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
    <html lang="en">
      <body className={`${BodyFont.className} bg-[#fbfbfb]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
