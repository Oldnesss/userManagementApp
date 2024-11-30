import React from "react";

import { Trash2, User } from "lucide-react";
import { useUserContext } from "../../hooks/useUserContext";

export const UserList: React.FC = () => {
  const { users, selectUser, deleteUser } = useUserContext();

  const handleDelete = (e: React.MouseEvent, userId: number) => {
    e.stopPropagation();
    deleteUser(userId);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Список пользователей
      </h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-500">Пользователей пока нет</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => selectUser(user)}
              className="flex justify-between items-center p-3 border-b hover:bg-gray-100 cursor-pointer group"
            >
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <div className="flex items-center">
                <User className="text-blue-500 mr-2" />
                <button
                  onClick={(e) => handleDelete(e, user.id!)}
                  className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default UserList;
