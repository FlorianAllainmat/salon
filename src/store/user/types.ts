export interface User {
  name?: string;
  password?: string;
  phone?: string;
  mail?: string;
}

export interface UserState {
  user?: User;
}
