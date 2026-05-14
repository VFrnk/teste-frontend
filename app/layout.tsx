import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AuthSync } from "@/components/providers/AuthSync";
import { ToastHost } from "@/components/providers/ToastHost";

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
  title: "Teste Frontend",
  description: "Teste prático - desenvolvedor frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AuthSync>
          {children}
          <ToastHost />
        </AuthSync>
      </body>
    </html>
  );
}
