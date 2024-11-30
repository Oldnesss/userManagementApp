export interface IUser {
  id?: number;
  name: string;
  email: string;
  city: string;
  phone: string;
}

export interface IUserService {
  getUsers(): IUser[];
  addUser(user: IUser): void;
  getUserById(id: number): IUser | undefined;
  deleteUser(id: number): void;
  updateUser(id: number, updatedUser: IUser): void;
}
