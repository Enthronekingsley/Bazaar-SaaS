import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@repo/ui/components/ui/tooltip";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bazaar — Escrow Infrastructure for Social Commerce Deals",
    template: "%s | Bazaar",
  },
  description:
    "Bazaar is the escrow and transaction infrastructure for social commerce, enabling sellers to turn informal chats and community interactions into secure, structured, and trackable deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
