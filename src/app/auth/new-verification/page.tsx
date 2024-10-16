import { NewVerificationForm } from "@/components/auth/new-verification-form";

export default function newVerificationPage() {
  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
      <NewVerificationForm></NewVerificationForm>
    </div>
  );
}
