import React, { useState } from "react";
import { User, Mail, MapPin, Phone, X, Edit } from "lucide-react";
import { useUserContext } from "../../hooks/useUserContext";
import { UserFormUniversal } from "../User/UserFormUniversal";
import { IUser } from "../../type/User.interface";

const UserDetails: React.FC = () => {
  const { selectedUser, selectUser, updateUser } = useUserContext();
  const [isEditing, setIsEditing] = useState(false);

  if (!selectedUser) return null;

  const handleSave = (updatedUser: IUser) => {
    updateUser(selectedUser.id!, updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  
  if (isEditing) {
    return (
      <UserFormUniversal
        initialData={selectedUser}
        onSubmit={handleSave}
        submitButtonText="Сохранить"
        formTitle="Редактирование пользователя"
        isEditing
        onCancel={handleCancel}
      />
    );
  }

  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-700"
        >
          <Edit />
        </button>
        <button
          onClick={() => selectUser(null)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>
      </div>
      <h2 className="text-2xl font-bold mt-2 mb-4 text-center">
        Информация о пользователе
      </h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <User className="mr-2 text-blue-500" />
          <span className="font-bold">Имя:</span> {selectedUser.name}
        </div>
        <div className="flex items-center">
          <Mail className="mr-2 text-blue-500" />
          <span className="font-bold">Email:</span> {selectedUser.email}
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2 text-blue-500" />
          <span className="font-bold">Город:</span> {selectedUser.city}
        </div>
        <div className="flex items-center">
          <Phone className="mr-2 text-blue-500" />
          <span className="font-bold">Телефон:</span> {selectedUser.phone}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
