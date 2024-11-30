import { Mail, MapPin, Phone, User } from "lucide-react";
import React from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: "user" | "mail" | "mapPin" | "phone";
  error?: string;
}

const iconMap = {
  user: User,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
};

export const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  icon,
  error,
}) => {
  const IconComponent = iconMap[icon];

  return (
    <div
      className="
  mb-4"
    >
      <label className=" mb-2 flex items-center ">
        <IconComponent className="mr-2 text-gray-500 " />
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded ${
          error ? "border-red-500" : " border-gray-300"
        } `}
        placeholder={`Введите ${placeholder.toLowerCase()}`}
      />
    </div>
  );
};
