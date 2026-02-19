export type RegisterState = {
  error?: {
    name?: string;
    email?: string;
    password?: string;
  };
  message?: string;
  success?: boolean;
} | null;
