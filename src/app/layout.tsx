import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alloutwindowtint.com"),
  title: "All-Out Window Tint | Gonzales & Baton Rouge, LA",
  description:
    "Professional window tinting, paint protection film, ceramic coating, and vehicle wraps in Gonzales and Baton Rouge, LA. Two locations. Family owned. Call (225) 381-1000.",
  keywords:
    "window tinting, PPF, paint protection film, vehicle wraps, ceramic coating, Gonzales LA, Baton Rouge LA, residential tinting, commercial tinting, marine tinting",
  openGraph: {
    type: "website",
    siteName: "All-Out Window Tint",
    title: "All-Out Window Tint | Gonzales & Baton Rouge, LA",
    description:
      "Professional window tinting, PPF, ceramic coating, and vehicle wraps in Gonzales and Baton Rouge, LA. Two locations. Family owned.",
    url: "https://alloutwindowtint.com",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "All-Out Window Tint — Gonzales & Baton Rouge, LA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-Out Window Tint | Gonzales & Baton Rouge, LA",
    description:
      "Professional window tinting, PPF, ceramic coating, and vehicle wraps in Gonzales and Baton Rouge, LA.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
