import { NewVerificationForm } from "@/components/forms/new-verification-form";
import { Suspense } from "react";

export default function newVerificationPage() {
  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
      <Suspense>
        <NewVerificationForm></NewVerificationForm>
      </Suspense>
    </div>
  );
}
