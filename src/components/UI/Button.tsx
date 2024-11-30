import React from "react";

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};
