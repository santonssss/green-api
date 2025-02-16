interface Chat {
  id: string;
  name: string;
}

interface ChatListProps {
  onSelectChat: (chatId: string) => void;
  chats: Chat[];
}

const ChatList: React.FC<ChatListProps> = ({ onSelectChat, chats }) => {
  return (
    <div className="h-full w-full overflow-y-auto p-4 bg-light">
      <div className="list-group">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border rounded shadow-sm mb-3 p-3"
            style={{ cursor: "pointer" }}
            onClick={() => onSelectChat(chat.id)}
          >
            <h5 className="mb-1">{chat.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
