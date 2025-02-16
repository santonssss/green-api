import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  active = false,
  ...props
}) => {
  return (
    <button
      {...props}
      role="menuitem"
      className={`rounded-full w-[40px] h-[40px] flex items-center justify-center  ${
        active ? "bg-[#D9DBDF]" : "bg-transparent"
      }`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
