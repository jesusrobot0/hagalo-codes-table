import Link from "next/link";
import { Rows2, FilePlus } from "lucide-react";
import { NavbarItem, YouAreHere } from "..";

const NavbarItems = [
  {
    title: "Productos",
    path: "/list",
    icon: <Rows2 size={20} />,
  },
  {
    title: "Agregar",
    path: "/new",
    icon: <FilePlus size={20} />,
  },
];

export function Navbar() {
  return (
    <nav className="py-5 px-16 mb-8 flex justify-between items-center border-b border-b-gray-200 bg-[#fff] shadow-sm">
      <Link href="/list">
        <span className="text-3xl font-bold text-[#d73225]">Hágalo</span>
        <span className="mx-2">/</span>
        <YouAreHere />
      </Link>

      <ul className="flex gap-5">
        {NavbarItems.map((item) => (
          <NavbarItem key={`navbar-item-id-${item.path}`} {...item} />
        ))}
      </ul>
    </nav>
  );
}
