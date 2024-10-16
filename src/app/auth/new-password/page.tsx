import Image from "next/image";

import formImage from "@/assets/sign-in-form-image.webp";
import NewPasswordForm from "@/components/auth/new-password-form";

export default function NewPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="m-4 grid w-full max-w-6xl items-center gap-4 rounded-md p-4 max-md:max-w-lg max-md:gap-8 md:grid-cols-2">
        <div className="w-full px-4 py-4 md:max-w-md">
          <NewPasswordForm />
        </div>

        <div className="rounded-xl bg-transparent p-8 hidden md:block md:h-full lg:p-12">
          <Image
            src={formImage}
            className="h-full w-full object-contain rounded-lg"
            alt="login-image"
          />
        </div>
      </div>
    </div>
  );
}
