export type RegisterModalTypes = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type LoginModalTypes = {
  email: string;
  password: string;
  remember_me: string;
};

export type ResetPasswordTypes = {
  email?: string;
  token?: string;
  password?: string;
  confirm_password?: string;
};
