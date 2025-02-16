import { Toaster } from "react-hot-toast";
import ChatBackground from "../components/Chat/ChatBackground";
import ChatContacts from "../components/Chat/ChatContacts";
import ChatSidebar from "../components/Chat/ChatSidebar";
import MessageContainer from "../components/Chat/MessageContainer";
import { useState } from "react";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const handleSelectChat = (chatId: string) => {
    setSelectedChat(chatId);
  };
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <section className=" max-w-screen-2xl mx-auto flex z-10 bg-white w-[100vw] h-[100vh] lg:h-[90vh]">
        <ChatSidebar />
        <ChatContacts onSelectChat={handleSelectChat} />
        <MessageContainer selectedChat={selectedChat} />
      </section>
      <ChatBackground />
      <Toaster />
    </div>
  );
};

export default Chat;
