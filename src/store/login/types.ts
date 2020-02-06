export interface User {
  login?: string;
  password?: string;
  code?: string;
}

export interface LoginState {
  user?: User;
}
