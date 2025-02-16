import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
}

export const useSendMessage = (selectedChat: string | null) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const navigate = useNavigate();
  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "" || !selectedChat) return;

    const instanceId = localStorage.getItem("idInstance");
    const apiTokenInstance = localStorage.getItem("apiTokenInstance");

    if (!instanceId || !apiTokenInstance) {
      toast.error("Отсутствует ID инстанса или токен API");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    try {
      addMessage({
        id: Date.now(),
        text: newMessage,
        sender: "me",
      });

      await axios.post(
        `https://api.green-api.com/waInstance${instanceId}/sendMessage/${apiTokenInstance}`,
        {
          chatId: `${selectedChat}`,
          message: newMessage,
        }
      );

      toast.success("Сообщение отправлено!");
      setNewMessage("");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Ошибка при отправке сообщения:",
          error.response?.data || error.message
        );
        toast.error(
          `Ошибка при отправке: ${
            error.response?.data?.message || "Неизвестная ошибка"
          }`
        );
      } else {
        console.error("Непредвиденная ошибка:", error);
        toast.error("Произошла непредвиденная ошибка");
      }
    }
  };

  return {
    messages,
    newMessage,
    setNewMessage,
    handleSendMessage,
    addMessage,
  };
};
