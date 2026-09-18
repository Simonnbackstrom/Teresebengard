import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terese Bengard – Föreläsare, Författare & Moderator",
  description: "Boka Terese Bengard som föreläsare eller moderator. Expert på landsbygdsfrågor, platsperspektiv och kommunikation. Författare till Världens mittpunkt.",
  openGraph: {
    title: "Terese Bengard – Föreläsare, Författare & Moderator",
    description: "Boka Terese Bengard som föreläsare eller moderator. Expert på landsbygdsfrågor och platsperspektiv.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
