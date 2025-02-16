import { useState } from "react";
import AddChat from "../Modals/AddChat";
import Button from "../ui/Button";
import ChatOutline from "../ui/svg/Chat_outline";
import DotsOutline from "../ui/svg/Dots_outline";
import SearchOutline from "../ui/svg/Search_outline";
import ChatList from "./ChatList";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Chat {
  id: string;
  name: string;
}

interface ChatContactsProps {
  onSelectChat: (chatId: string) => void;
}

const ChatContacts: React.FC<ChatContactsProps> = ({ onSelectChat }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const navigate = useNavigate();
  const handleAddChat = (newChat: Chat) => {
    setChats((prevChats) => [newChat, ...prevChats]);
  };
  const handleLeave = () => {
    localStorage.removeItem("idInstance");
    localStorage.removeItem("apiTokenInstance");
    toast.success("Вы вышли из системы");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <div className="pt-3 px-3 h-full">
      <div className="flex items-center justify-between  w-96">
        <h1 className="font-bold text-lg">Чаты</h1>
        <div className="flex">
          <button
            onClick={handleLeave}
            className="bg-blue-400 text-white py-1 px-3 rounded-lg"
          >
            Выйти
          </button>
          <Button>
            <ChatOutline />
          </Button>
          <Button>
            <DotsOutline />
          </Button>
        </div>
      </div>
      <div className="w-96 rounded-lg flex items-center bg-[#F0F2F5] h-8 mt-6 py-1 px-3">
        <SearchOutline />
        <input
          type="search"
          placeholder="Поиск"
          name=""
          id=""
          className="ml-5 w-full bg-transparent"
        />
      </div>
      <div className=" h-[550px] mt-10  overflow-y-auto flex flex-col items-center justify-center">
        <AddChat onAddChat={handleAddChat} />
        <ChatList onSelectChat={onSelectChat} chats={chats} />
      </div>
    </div>
  );
};

export default ChatContacts;
