import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import notification_music from "../assets/notification_music.mp3";
interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  timestamp: number;
}

interface UseReceiveMessagesProps {
  selectedChat: string | null;
  onReceiveMessage: (message: Message) => void;
}

const useReceiveMessages = ({
  selectedChat,
  onReceiveMessage,
}: UseReceiveMessagesProps) => {
  const instanceId = localStorage.getItem("idInstance");
  const apiTokenInstance = localStorage.getItem("apiTokenInstance");

  useEffect(() => {
    if (!selectedChat || !instanceId || !apiTokenInstance) return;

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `https://api.green-api.com/waInstance${instanceId}/receiveNotification/${apiTokenInstance}`
        );

        if (response.data && response.data.body) {
          const { body, receiptId } = response.data;

          if (
            body.typeWebhook === "incomingMessageReceived" &&
            body.senderData?.chatId === selectedChat
          ) {
            const { senderData, messageData } = body;

            if (messageData?.textMessageData?.textMessage) {
              const incomingMessage: Message = {
                id: Date.now(),
                text: messageData.textMessageData.textMessage,
                sender: senderData.chatId === selectedChat ? "other" : "me",
                timestamp: Date.now(),
              };
              const audio = new Audio(notification_music);
              audio.play();
              onReceiveMessage(incomingMessage);
            }
          }

          await axios.delete(
            `https://api.green-api.com/waInstance${instanceId}/deleteNotification/${apiTokenInstance}/${receiptId}`
          );
        }
      } catch (error) {
        console.error("Ошибка при получении сообщений: ", error);
        toast.error("Не удалось получить новые сообщения");
      }
    };
    const interval = setInterval(fetchMessages, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedChat, onReceiveMessage]);
};

export default useReceiveMessages;
