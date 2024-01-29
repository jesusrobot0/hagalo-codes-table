import type { Metadata } from "next";
import { BodyFont } from "@/config/fonts";
import { Navbar } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hágalo lista de códigos",
  description:
    "Lista de códigos de los productos para el empleado de Ferreterias Hágalo",
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
