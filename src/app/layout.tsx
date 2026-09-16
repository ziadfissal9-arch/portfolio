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
  title: "Ziad Fissal — Front-End Developer",
  description:
    "Front-End Developer building responsive, modern web applications with React, Next.js and TypeScript. Available for freelance work.",
  openGraph: {
    title: "Ziad Fissal — Front-End Developer",
    description:
      "Front-End Developer building responsive, modern web applications with React, Next.js and TypeScript.",
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
