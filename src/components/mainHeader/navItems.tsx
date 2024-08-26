import { NavItemType } from "@/types/header";
import Link from "next/link";

export function NavItem({ href, content }: NavItemType) {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
        aria-current="page"
      >
        {content}
      </Link>
    </li>
  );
}
