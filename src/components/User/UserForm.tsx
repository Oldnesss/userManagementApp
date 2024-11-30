import React from "react";
import { UserFormUniversal } from "./UserFormUniversal";
import { useUserContext } from "../../hooks/useUserContext";

export const UserForm: React.FC = () => {
  const { addUser } = useUserContext();

  return (
    <UserFormUniversal
      onSubmit={addUser}
      submitButtonText="Добавить пользователя"
      formTitle="Добавить пользователя"
    />
  );
};
export default UserForm
