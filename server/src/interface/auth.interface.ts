// interface/auth.interface.ts
export interface register {
  username: string;
  password: string;
  role: string;
}

export interface login {
  username: string;
  password: string;
}
