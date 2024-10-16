import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <h1 className="">Something went wrong</h1>
      <Link href="/auth/signin">Back to login</Link>
    </div>
  );
}
