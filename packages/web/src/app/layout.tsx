import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://instanticon.app"),
  title: "Instant Icon Generator",
  description:
    "Instantly generate SVG or PNG icons and logos for your next project.",
  category: "technology",
  generator: "Next.js",
  applicationName: "Instant Icon Generator",
  keywords: ["Icon generator", "Logo generator"],
  authors: [{ name: "Alexander Zepezauer", url: "https://zepez.dev" }],
  creator: "Alexander Zepezauer",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Instant Icon Generator",
    description:
      "Instantly generate SVG or PNG icons and logos for your next project.",
    url: "https://instanticon.app",
    siteName: "Instant Icon Generator",
    images: [
      {
        url: "https://instanticon.app/og.png",
        width: 800,
        height: 600,
        alt: "Instant Icon Generator Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Icon Generator",
    description:
      "Instantly generate SVG or PNG icons and logos for your next project.",
    creator: "@zepezAlex",
    images: [
      {
        url: "https://instanticon.app/twitter.png",
        alt: "Instant Icon Generator Twitter Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    other: {
      creator: ["https://zepez.dev", "https://github.com/zepez"],
    },
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-dvh")}>
        <PlausibleProvider domain="instanticon.app">
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
