"use client";

import { SignUpFormState } from "@/types/auth/signin-formstate";
import { signUpAction } from "@/actions/auth";
import { useFormState } from "react-dom";
import FormSubmitButton from "./btns/form-submit-auth";
import TextInput from "./form-components/text-input";
import PasswordInput from "./form-components/password-input";
import ErrorMessage from "./form-components/error-message";

const initialState: SignUpFormState = { message: null, errors: {} };

export default function SignUpForm() {
  const [formState, formAction] = useFormState(signUpAction, initialState);

  return (
    <form action={formAction} className="w-3/4 mx-auto md:w-2/5">
      {/* Full Name */}
      <TextInput
        id="name"
        type="text"
        name="name"
        label="Fullname"
        errors={formState.errors?.name || []}
      />
      {/* Username */}
      <TextInput
        id="username"
        type="text"
        name="username"
        label="Username"
        errors={formState.errors?.username || []}
      />
      {/* Email */}
      <TextInput
        id="email"
        type="email"
        name="email"
        label="Email"
        errors={formState.errors?.email || []}
      />
      {/* Password */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <PasswordInput
          id="password"
          name="password"
          label="Password"
          errors={formState.errors?.password || []}
        />
        {/* Confirm Password */}
        <PasswordInput
          name="confirm_password"
          id="confirm_password"
          label="Confirm Password"
          errors={formState.errors?.confirmPassword || []}
        />
      </div>

      <ErrorMessage message={formState.message} />
      <FormSubmitButton
        text="Register"
        loadingText="Creating user..."
      ></FormSubmitButton>
    </form>
  );
}
