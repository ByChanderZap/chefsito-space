export interface SignUpFormState {
  message?: string | null;
  success?: string | null;
  errors?: {
    name?: string[];
    username?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
}

export interface SignInFormState {
  error?: string | null
  message?: string | null
}

export interface ResetFormState {
  error?: string | null
  message?: string | null
}
