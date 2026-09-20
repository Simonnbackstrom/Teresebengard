import type { Metadata } from "next";
import { EB_Garamond, Cabin, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: ["400"],
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
    <html lang="sv" className={`${garamond.variable} ${cabin.variable} ${pinyon.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
