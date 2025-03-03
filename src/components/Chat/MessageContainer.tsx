import React from "react";
import { useSendMessage } from "../../Custom_hooks/useSendMessage";
import useReceiveMessages from "../../Custom_hooks/useReceiveMessages";

interface MessageContainerProps {
  selectedChat: string | null;
}

const MessageContainer: React.FC<MessageContainerProps> = ({
  selectedChat,
}) => {
  const { messages, newMessage, setNewMessage, handleSendMessage, addMessage } =
    useSendMessage(selectedChat);

  useReceiveMessages({
    selectedChat,
    onReceiveMessage: addMessage,
  });

  const renderChatHeader = () => {
    if (!selectedChat) {
      return (
        <span className="font-semibold italic text-red-400 text-xl ml-5">
          Добавьте номер, а затем нажмите в списке чтобы отправить сообщение
        </span>
      );
    }
    return <span className="font-bold text-lg ml-5">{selectedChat}</span>;
  };

  return (
    <div className="w-full relative bg-[#EFEAE2] px-3 py-3 flex flex-col h-full justify-end">
      <div className="absolute font-semibold left-0 top-0 w-full bg-white h-28 flex items-center">
        {renderChatHeader()}
      </div>
      <div className="overflow-y-scroll flex flex-col space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === "me"
                ? "bg-[#D9FDD3] self-end"
                : "bg-white self-start"
            }`}
          >
            <div>{msg.text}</div>
            <div className="text-gray-500 text-xs text-right mt-1">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center space-x-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Напишите сообщение..."
          className="w-full p-2 rounded-lg border border-gray-300"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          disabled={!selectedChat}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
