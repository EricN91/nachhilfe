import {User} from "./user";

export class UserFactory {
  static empty() {
    return new User(0, "", "", "", false, "");
  }

  static fromObject(rawUser: any): User {
    return new User(
      rawUser.id,
      rawUser.name,
      rawUser.email,
      rawUser.password,
      rawUser.role,
      rawUser.photo,
    );
  }
}
