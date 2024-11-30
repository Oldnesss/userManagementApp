import React, { useState } from "react";
import { IUser } from "../../type/User.interface";
import { ValidationService } from "../../sevrices/ValidationService";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { X, Save } from "lucide-react";

interface UserFormProps {
  initialData?: IUser;
  onSubmit: (user: IUser) => void;
  submitButtonText: string;
  formTitle: string;
  isEditing?: boolean;
  onCancel?: () => void;
}

export const UserFormUniversal: React.FC<UserFormProps> = ({
  initialData = { name: "", email: "", city: "", phone: "" },
  onSubmit,
  submitButtonText,
  formTitle,
  isEditing = false,
  onCancel,
}) => {
  const [formData, setFormData] = useState<IUser>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof IUser, string>>>({
    name: "",
    email: "",
    city: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } =
      ValidationService.validateUser(formData);

    if (isValid) {
      onSubmit(formData);
      if (!isEditing) {
        setFormData({ name: "", email: "", city: "", phone: "" });
      }
      setErrors({ name: "", email: "", city: "", phone: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md relative"
    >
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>
      )}
      <h2 className="text-2xl font-bold mb-4 text-center">{formTitle}</h2>

      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
        icon="user"
        error={errors.name}
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
        icon="mail"
        error={errors.email}
      />
      <Input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Город"
        icon="mapPin"
        error={errors.city}
      />
      <Input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
        icon="phone"
        error={errors.phone}
      />

      <div className="flex space-x-2 mt-4">
        <Button type="submit" className="flex items-center">
          <Save className="mr-2" /> {submitButtonText}
        </Button>
        {onCancel && (
          <Button 
            type="button" 
            onClick={onCancel} 
            className="bg-red-500 hover:bg-red-600 flex items-center"
          >
            <X className="mr-2" /> Отмена
          </Button>
        )}
      </div>
    </form>
  );
};