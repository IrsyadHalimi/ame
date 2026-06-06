export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    role:
      | "customer"
      | "seller"
      | "superadmin";
  };
}