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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://teresebengard.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Terese Bengard – Föreläsare, Författare & Moderator",
    template: "%s | Terese Bengard",
  },
  description:
    "Boka Terese Bengard som föreläsare eller moderator. Expert på landsbygdsfrågor, platsperspektiv och kommunikation. Författare till Världens mittpunkt.",
  applicationName: "Terese Bengard",
  authors: [{ name: "Terese Bengard" }],
  creator: "Terese Bengard",
  publisher: "Terese Bengard",
  keywords: [
    "Terese Bengard",
    "föreläsare",
    "moderator",
    "författare",
    "landsbygd",
    "landsbygdsfrågor",
    "platsperspektiv",
    "Världens mittpunkt",
    "boksamtal",
    "rådgivning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: "Terese Bengard",
    title: "Terese Bengard – Föreläsare, Författare & Moderator",
    description:
      "Boka Terese Bengard som föreläsare eller moderator. Expert på landsbygdsfrågor och platsperspektiv.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terese Bengard – Föreläsare, Författare & Moderator",
    description:
      "Boka Terese Bengard som föreläsare eller moderator. Expert på landsbygdsfrågor och platsperspektiv.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Terese Bengard",
  url: siteUrl,
  image: `${siteUrl}/terese-portratt-sjo.jpg`,
  jobTitle: "Föreläsare, författare och moderator",
  description:
    "Föreläsare, författare och moderator med fokus på landsbygdsfrågor, platsperspektiv och kommunikation.",
  nationality: "SE",
  knowsAbout: [
    "Landsbygdsfrågor",
    "Platsutveckling",
    "Urban norm",
    "Beredskap",
    "Kommunikation",
    "Moderering",
  ],
  sameAs: [] as string[],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${garamond.variable} ${cabin.variable} ${pinyon.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
