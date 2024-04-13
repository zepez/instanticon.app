import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instant Icon Generator",
  description:
    "Instantly generate SVG or PNG icons and logos for your next project.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlausibleProvider domain="instanticon.app">
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
