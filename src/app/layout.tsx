import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ziad-fissal.vercel.app"),
  title: "Ziad Fissal — Full-Stack Developer",
  description:
    "Full-stack developer building web applications with React, Next.js and Node.js — real databases, real authentication, and real server-side logic. Available for new projects.",
  openGraph: {
    title: "Ziad Fissal — Full-Stack Developer",
    description:
      "Full-stack developer building web applications with React, Next.js and Node.js — real databases, real authentication, and real server-side logic.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
