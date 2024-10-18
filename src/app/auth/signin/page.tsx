import formImage from "@/assets/sign-in-form-image.webp";
import SignInForm from "@/components/forms/signin-form";
import Image from "next/image";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <div className="font-[sans-serif]">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="m-4 grid w-full max-w-6xl items-center gap-4 rounded-md p-4 max-md:max-w-lg max-md:gap-8 md:grid-cols-2">
          <div className="w-full px-4 py-4 md:max-w-md">
            <Suspense>
              <SignInForm></SignInForm>
            </Suspense>
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
    </div>
  );
}
