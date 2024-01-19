"use client";

import { usePathname } from "next/navigation";

export function YouAreHere() {
  const currentPath = usePathname();
  const currentPage =
    currentPath === "/list" ? "Listado de productos" : "Formulario de producto";
  return <span className="text-gray-500">{currentPage}</span>;
}
