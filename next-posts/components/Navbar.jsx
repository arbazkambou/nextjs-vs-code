"use client";
import { signoutAction } from "@/lib/actions";
import { LucideLogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/posts/create",
    label: "Create Post",
  },
];
function Navbar({ session }) {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between text-lg font-semibold text-zinc-300 transition-all px-[2rem] py-4 border-b">
      <div>
        <Image
          src="https://github.com/shadcn.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center justify-center gap-x-10">
        <ul className=" flex justify-center gap-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={` ${
                  pathName === item.href
                    ? "text-zinc-900 underline underline-offset-4 "
                    : ""
                }  hover:text-zinc-900 hover:underline hover:underline-offset-`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {session && (
          <div className="flex justify-center gap-x-4">
            <Link
              href={"/posts/my"}
              className="flex justify-center gap-x-2 hover:text-zinc-900 hover:underline hover:underline-offset-4"
            >
              My Posts
            </Link>
            <form action={signoutAction}>
              <button
                type="submit"
                className={`flex justify-center gap-x-2 hover:text-zinc-900 hover:underline hover:underline-offset-4`}
              >
                <LucideLogOut />
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
