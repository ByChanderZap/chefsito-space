"use client";
import { useFormState } from "react-dom";

import TextInput from "./form-components/text-input";
import OauthButtons from "./oauth-btns";
import PasswordInput from "./form-components/password-input";
import Divider from "./form-components/divider";
import FormSubmitButton from "./btns/form-submit-auth";
import CheckboxInput from "./form-components/checkbox-input";
import FormHeader from "./form-components/header";

export default function SignInForm() {
  const [formState, formAction] = useFormState(() => {}, {});

  return (
    <form>
      <FormHeader
        cta="Register here"
        text="Don't have an account"
        title="Sign in"
      />
      {/* Email */}
      <TextInput
        id="email"
        type="email"
        name="email"
        label="Email"
        // errors={formState.errors?.email || []}
        errors={[]}
      />
      <PasswordInput
        id="password"
        name="password"
        label="Password"
        // errors={formState.errors?.password || []}
        errors={[]}
      />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <CheckboxInput
          id="remember-me"
          name="remember-me"
          label="Remember me"
        />
        <div>
          <a
            href="#"
            className="text-sm font-semibold text-trinidad-500 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="mt-12">
        <FormSubmitButton text="Sign In" loadingText="Signing In" />
      </div>

      <Divider />
      <OauthButtons />
    </form>
  );
}
