import React, { createContext, useState, useEffect, useMemo } from "react";
import { IUser } from "../type/User.interface";
import { UserService } from "../sevrices/UserService";

interface UserContextType {
  users: IUser[];
  selectedUser: IUser | null;
  addUser: (user: IUser) => void;
  deleteUser: (id: number) => void;
  selectUser: (user: IUser | null) => void;
  updateUser: (id: number, user: IUser) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const userService = useMemo(() => new UserService(), []);

  useEffect(() => {
    const storedUsers = userService.getUsers();
    setUsers(storedUsers);
  }, [userService]);

  const addUser = (newUser: IUser) => {
    userService.addUser(newUser);
    setUsers(userService.getUsers());
  };

  const deleteUser = (id: number) => {
    userService.deleteUser(id);
    setUsers(userService.getUsers());

    if (selectedUser?.id === id) {
      setSelectedUser(null);
    }
  };

  const selectUser = (user: IUser | null) => {
    setSelectedUser(user);
  };

  const updateUser = (id: number, updatedUser: IUser) => {
    userService.updateUser(id, updatedUser);
    setUsers(userService.getUsers());
    if (selectedUser?.id === id) {
      setSelectedUser({ ...selectedUser, ...updatedUser });
    }
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, deleteUser, selectUser, selectedUser, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
