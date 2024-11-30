import { IUser } from "../type/User.interface";

export class ValidationService {
  static validateUser(user: IUser): {
    isValid: boolean;
    errors: Partial<Record<keyof IUser, string>>;
  } {
    const errors: Partial<Record<keyof IUser, string>> = {};

    if (!user.name.trim()) errors.name = "Имя обязательно";

    if (!user.email.trim()) {
      errors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Некорректный формат email";
    }

    if (!user.city.trim()) errors.city = "Город обязателен";
    if (!user.phone.trim()) errors.phone = "Телефон обязателен";

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
}
