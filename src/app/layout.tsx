import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Layout from '@/components/Custom/Layout'


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-[#F5F7FF]",
          fontSans.variable
        )}
      ><Layout>
        {children}
      </Layout>
      </body>
    </html>
  );
}
