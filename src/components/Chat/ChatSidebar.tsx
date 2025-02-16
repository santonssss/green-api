import Button from "../ui/Button";
import ChatsFilled from "../ui/svg/Chats_filled";
import CommunityOutline from "../ui/svg/Community_outline";
import SletterOutline from "../ui/svg/Sletter_outline";
import StatusOutline from "../ui/svg/Status_outline";
import SletOutline from "../ui/svg/Sletter_outline";

const ICONS_TOP = [
  { icon: <ChatsFilled />, active: true },
  { icon: <StatusOutline /> },
  { icon: <SletterOutline /> },
  { icon: <CommunityOutline /> },
];

const ICONS_BOTTOM = [
  { icon: <SletOutline /> },
  {
    icon: <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" />,
  },
];

const ChatSidebar = () => {
  return (
    <header className="sticky left-0 border-r border-gray-400">
      <div className="flex px-3 pt-3 pb-3 flex-col bg-[#F0F2F5] justify-between h-full">
        <div className="flex flex-col gap-1">
          {ICONS_TOP.map((item, index) => (
            <Button key={index} active={item.active || false}>
              {item.icon}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {ICONS_BOTTOM.map((item, index) => (
            <Button key={index}>{item.icon}</Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ChatSidebar;
