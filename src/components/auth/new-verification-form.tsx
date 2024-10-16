"use client";
import { SyncLoader } from "react-spinners";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import ErrorMessage from "@/components/form-components/error-message";
import SuccessMessage from "@/components/form-components/success-message";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-md min-h-[300px] mx-auto flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Email Verification
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400 my-4 text-center">
        Verifying Email
      </p>
      {!success && !error && <SyncLoader className="my-10" color="#f96416" />}
      {success && <SuccessMessage message={success} />}
      {error && !success && <ErrorMessage message={error} />}
      <Link
        href="/auth/signin"
        className="w-full max-w-sm rounded-md bg-trinidad-500 px-4 py-2.5 text-sm tracking-wide text-white shadow-xl hover:bg-trinidad-700 focus:outline-none text-center"
      >
        Go to login
      </Link>
    </div>
  );
};
