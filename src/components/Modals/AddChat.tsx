import { useState } from "react";
import toast from "react-hot-toast";

interface AddChatProps {
  onAddChat: (chat: { id: string; name: string }) => void;
}

const AddChat: React.FC<AddChatProps> = ({ onAddChat }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validatePhoneNumber = (number: string): boolean => {
    const phoneRegex = /^[0-9]{10,12}$/;
    return phoneRegex.test(number);
  };

  const handleAddChat = (): void => {
    if (validatePhoneNumber(phoneNumber)) {
      setError("");
      onAddChat({
        id: `${phoneNumber}@c.us`,
        name: `Чат с ${phoneNumber}`,
      });
      toast.success(`Чат с ${phoneNumber} успешно создан!`);
      setPhoneNumber("");
    } else {
      setError("Введите корректный номер телефона");
    }
  };

  return (
    <div className="p-4 flex flex-col ">
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/, ""))}
        maxLength={12}
        placeholder="Введите номер телефона"
        className="w-full px-4 bg-[#F0F2F5] py-2 border rounded-lg"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleAddChat}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
      >
        Добавить чат
      </button>
    </div>
  );
};

export default AddChat;
