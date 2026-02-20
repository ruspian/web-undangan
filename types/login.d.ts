export type LoginState = {
  error?: {
    email?: string;
    password?: string;
  };
  message?: string;
  success?: boolean;
} | null;
