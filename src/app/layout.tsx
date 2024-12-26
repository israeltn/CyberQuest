import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberQuest",
  description: "A Cybersecurity Essential Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-gradient-to-b from-[#4E2D6C] via-[#475091] to-[#43284C] */}
      <body className={twMerge(inter.className, " bg-white")}>{children}
      </body>
    </html>
  );
}
