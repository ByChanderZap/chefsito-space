export interface SignUpFormState {
  message?: string | null;
  errors?: {
    name?: string[];
    username?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
}

export interface SignInFormState {
  message?: string
  errors?: {
    email?: string[];
    password?: string[]
  }
}
