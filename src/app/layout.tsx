import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavBarServer from "@/components/NavBarServer";
import { SessionProvider } from "next-auth/react";
import NavBarClient from "@/components/NavBarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next-Auth V5 Tutorial",
    absolute: "Next-Auth V5 tutorial",
  },
  description:
    "Learn how to use Auth.js v5 in Next.js with custom roles, caching, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider> {/* provider when I work in the client side. It allows me to use useSession() */}
          <NavBarClient />
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
