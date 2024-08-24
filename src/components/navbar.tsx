import Link from "next/link";

export default function NavBar() {
  return (
    <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
      <div className="flex flex-grow basis-0">
        <Link href="/" className="text-2xl">
          Chefsito.space
        </Link>
      </div>

      <nav className="hidden xl:block sm:hidden">
        <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <Link href="#TODO">Most Liked</Link>
          </li>
          <li>
            <Link href="#TODO">Surprice Meal</Link>
          </li>
          <li>
            <Link href="#TODO">Advanced Search</Link>
          </li>
        </ul>
      </nav>

      <nav className="flex flex-grow justify-end basis-0">
        <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li className="hidden xl:block sm:hidden">
            <Link href="#TODO">Sign In</Link>
          </li>
          <li className="hidden xl:block sm:hidden">
            <Link href="#TODO">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
