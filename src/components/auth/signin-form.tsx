"use client";
import { useFormState } from "react-dom";

import TextInput from "../form-components/text-input";
import OauthButtons from "../oauth-btns";
import PasswordInput from "../form-components/password-input";
import Divider from "../form-components/divider";
import FormSubmitButton from "../btns/form-submit-auth";
import CheckboxInput from "../form-components/checkbox-input";
import FormHeader from "../form-components/header";
import { authenticate } from "@/actions/auth";
import ErrorMessage from "../form-components/error-message";
import { useSearchParams } from "next/navigation";
import { SignInFormState } from "@/types/auth/formStates";
import SuccessMessage from "../form-components/success-message";
import Link from "next/link";

const initialState: SignInFormState = {
  message: null,
  error: null,
};

export default function SignInForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  const [state, formAction] = useFormState(authenticate, initialState);

  return (
    <form action={formAction}>
      <FormHeader
        cta="Register here"
        text="Don't have an account"
        title="Sign in"
      />
      {/* Email */}
      <TextInput id="email" type="email" name="email" label="Email" />
      <PasswordInput
        id="password"
        name="password"
        label="Password"
        errors={[]}
      />

      {/* <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <CheckboxInput
          id="remember-me"
          name="remember-me"
          label="Remember me"
        />
        <div>
          <Link
            href="/auth/reset"
            className="text-sm font-semibold text-trinidad-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div> */}

      <div>
        <ErrorMessage message={state.error || urlError} />
        <SuccessMessage message={state.message} />
        <FormSubmitButton text="Sign In" loadingText="Signing In" />

        {/* {state.error ||
            (urlError && <ErrorMessage message={state.error || urlError} />)} */}
      </div>

      <Divider />
      <OauthButtons />
    </form>
  );
}
