"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  path: string;
  icon: JSX.Element;
}

export function NavbarItem({ title, path, icon }: Props) {
  const currentPath = usePathname();

  return (
    <li className="relative">
      {currentPath === path && (
        <span className="w-full h-[3px] bg-[#213e6c] absolute top-[47px] rounded-t"></span>
      )}
      <Link href={path} className="flex items-center gap-1">
        <span>{icon}</span>
        <span className="hidden sm:block">{title}</span>
      </Link>
    </li>
  );
}
