import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OfferBit",
  description: "Swap, buy and sell items in your local area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {inter.className}>
        <div className="sticky top-1">
          <Header/>
        </div>

        <div className="flex min-h-screen flex-col items-center justify-between w-full">
            {children}
        </div>
          <div className="">
            <Footer/>
          </div>
        </body>
    </html>
  );
}