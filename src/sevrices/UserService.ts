import { IUser, IUserService } from "../type/User.interface";
import { LocalStorageService } from "../utils/localStorage";

export class UserService implements IUserService {
  private localStorageService: LocalStorageService;

  constructor() {
    this.localStorageService = new LocalStorageService("users");
  }

  getUsers(): IUser[] {
    return this.localStorageService.getData() || [];
  }

  addUser(user: IUser): void {
    const users = this.getUsers();
    const newUser = { ...user, id: Date.now() };
    users.push(newUser);
    this.localStorageService.saveData(users);
  }

  getUserById(id: number): IUser | undefined {
    return this.getUsers().find((user) => user.id === id);
  }

  deleteUser(id: number): void {
    const users = this.getUsers().filter((user) => user.id !== id);
    this.localStorageService.saveData(users);
  }

  updateUser(id: number, updatedUser: IUser): void {
    const users = this.getUsers().map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    this.localStorageService.saveData(users);
  }
}
