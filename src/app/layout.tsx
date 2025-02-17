import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Component/Nav";
import Footer from "@/Component/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-black">
      <body className={inter.className  }>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
