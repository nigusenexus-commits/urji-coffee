
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { Cormorant_Upright, Open_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
  display: "swap",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "URJI COFFEE | Good Coffee. Warm Moments.",
    template: "%s | URJI COFFEE",
  },
  description:
    "Discover URJI COFFEE in Furi and Sebeta, Ethiopia. Enjoy coffee, tea, fresh juices, Ethiopian breakfast, delicious food and fish dishes. Dine-in, takeaway and delivery available.",
  keywords: [
    "URJI COFFEE",
    "Coffee shop Furi",
    "Coffee shop Sebeta",
    "Ethiopian coffee",
    "Fresh juices",
    "Ethiopian breakfast",
    "Cafe in Ethiopia",
    "Food delivery",
  ],
  authors: [{ name: "URJI COFFEE" }],
  creator: "URJI COFFEE",
  publisher: "URJI COFFEE",
  applicationName: "URJI COFFEE",
  category: "Food & Beverage",
  openGraph: {
    type: "website",
    locale: "en_ET",
    siteName: "URJI COFFEE",
    title: "URJI COFFEE | Good Coffee. Warm Moments.",
    description:
      "Enjoy great coffee, refreshing drinks and delicious food at URJI COFFEE in Furi and Sebeta, Ethiopia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "URJI COFFEE | Good Coffee. Warm Moments.",
    description:
      "Discover coffee, fresh juices, Ethiopian breakfast and delicious food at URJI COFFEE.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant_upright.variable} ${open_sans.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
