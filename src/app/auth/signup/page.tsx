import { FormSubmitButton } from "@/components/btns/form-submit-auth";
import SignInForm from "@/components/register-form";

export default function SignUpPage() {
  // const onSubmit = handleSubmit(async (data) => {
  //   if (data.password !== data.confirmPassword) {
  //     return alert("Passwords do not match");
  //   }

  //   const res = await fetch("/api/auth/register", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: data.username,
  //       email: data.email,
  //       password: data.password,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (res.ok) {
  //     router.push("/auth/login");
  //   }
  // });

  // console.log(errors);

  // return (
  //   <div className="h-[calc(100vh-7rem)] flex justify-center items-center mx-auto">
  //     <form action={formAction} className="w-3/4 mx-4 md:w-1/2">
  //       <h1 className="text-slate-200 font-bold text-4xl mb-4">Sign Up</h1>

  //       <label htmlFor="name" className="text-slate-500 mb-2 block text-sm">
  //         Name:
  //       </label>
  //       <input
  //         type="text"
  //         name="name"
  //         id="name"
  //         className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
  //       />

  //       {/* {errors.name?.message && (
  //         <span className="text-red-500 text-xs">
  //           {errors.name.message.toString()}
  //         </span>
  //       )} */}

  //       <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
  //         Username:
  //       </label>
  //       <input
  //         type="text"
  //         name="username"
  //         id="username"
  //         className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
  //       />

  //       {/* {errors.name?.message && (
  //         <span className="text-red-500 text-xs">
  //           {errors.name.message.toString()}
  //         </span>
  //       )} */}

  //       <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
  //         Email:
  //       </label>

  //       <input
  //         type="email"
  //         name="email"
  //         id="email"
  //         className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
  //       />

  //       <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
  //         Password:
  //       </label>
  //       <input
  //         type="password"
  //         name="password"
  //         id="password"
  //         className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
  //       />
  //       {/* {errors.password && (
  //         <span className="text-red-500 text-sm">
  //           {errors.password.message}
  //         </span>
  //       )} */}

  //       <label
  //         htmlFor="confirmPassword"
  //         className="text-slate-500 mb-2 block text-sm"
  //       >
  //         Confirm Password:
  //       </label>
  //       <input
  //         type="password"
  //         name="confirmPassword"
  //         id="confirmPassword"
  //         className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
  //       />
  //       {/* {errors.confirmPassword && (
  //         <span className="text-red-500 text-sm">
  //           {errors.confirmPassword.message}
  //         </span>
  //       )} */}

  //       {/* <button
  //         className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
  //         type="submit"
  //       >
  //         Register
  //       </button> */}
  //       <FormSubmitButton
  //         text="Register"
  //         loadingText="Creating user..."
  //         classes="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
  //       ></FormSubmitButton>
  //     </form>
  //   </div>
  // );

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center gap-4">
      <h1 className="text-slate-200 font-bold mb-4 text-2xl md:text-3xl">
        Create an account
      </h1>
      <SignInForm />
    </div>
  );
}
