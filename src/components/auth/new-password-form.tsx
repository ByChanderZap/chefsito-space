"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import ErrorMessage from "@/components/form-components/error-message";
import SuccessMessage from "@/components/form-components/success-message";
import PasswordInput from "@/components/form-components/password-input";
import { NewPasswordSchema } from "@/validations/auth.schema";
import { newPasswordAction } from "@/actions/new-password";

export default function NewPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    console.log("HEREEE:", password);
    // Validate the password
    const parsed = NewPasswordSchema.safeParse({ password });

    if (!parsed.success) {
      setError("Invalid password");
      return;
    }

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const data = await newPasswordAction({ password }, token);
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(data.success);
      }
    } catch (error) {
      setError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h3 className="text-3xl font-extrabold text-trinidad-50">
        Enter new password
      </h3>

      {/* Password */}
      <PasswordInput id="password" name="password" label="Password" />

      <div>
        {error && <ErrorMessage message={error} />}
        {success && <SuccessMessage message={success} />}
        <button
          type="submit"
          className="w-full rounded-md bg-trinidad-500 px-4 py-2.5 text-sm tracking-wide text-white shadow-xl hover:bg-trinidad-700 focus:outline-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Reset Password"}
        </button>

        {/* {state.error ||
            (urlError && <ErrorMessage message={state.error || urlError} />)} */}
      </div>
    </form>
  );
}
