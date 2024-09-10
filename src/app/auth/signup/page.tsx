import { FormSubmitButton } from "@/components/btns/form-submit-auth";
import SignUpForm from "@/components/register-form";

export default function SignUpPage() {
  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center gap-4">
      <h1 className="text-slate-200 font-bold mb-4 text-2xl md:text-3xl">
        Create an account
      </h1>
      <SignUpForm />
    </div>
  );
}