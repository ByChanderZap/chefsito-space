import Image from "next/image";
import formImage from "@/assets/sign-in-form-image.webp";
import NewRecipeForm from "@/components/forms/new-recipe-form";

export default function NewRecipePage() {
  return (
    <div className="font-[sans-serif]">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="m-4 grid w-full max-w-6xl items-center gap-4 rounded-md p-4 max-md:max-w-lg max-md:gap-8 md:grid-cols-2">
          <div className="w-full px-4 py-4 md:max-w-md">
            {/* <SignInForm></SignInForm> */}
            <h1 className="text-slate-200 font-bold mb-4 text-2xl md:text-3xl text-center">
              Create a new recipe
            </h1>
            <NewRecipeForm />
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
