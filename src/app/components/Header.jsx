'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const linkData = [
  { name: "setting", href: "/setting" },
  { name: "about", href: "/about" },
  { name: "me", href: "/me" },
];
export default function Header() {
  const path = usePathname();
  return (
    <div className="absolute z-10 top-0">
      <div className="flex justify-between p-8 w-screen pr-30 pl-30 text-white">
        <div className="text-3xl font-bold">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="flex gap-2 font-bold text-xl items-center">
          {linkData.map((link) => (
            <Link
              key={link.name}
              className={path == link.href ? "text-blue-500" : ""}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
