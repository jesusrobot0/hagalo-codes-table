import type { Metadata } from "next";
import { BodyFont } from "@/config/fonts";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Hágalo Lista de Productos",
  description: "Lista de productos para el empleado de Ferreterias Hágalo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${BodyFont.className} bg-[#f5f7f8]`}>
        <Navbar />
        <main className="pt-28 px-5 sm:px-16">{children}</main>
      </body>
    </html>
  );
}
