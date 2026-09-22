import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fraunces: an editorial, slightly organic serif — carries the "premium
// botanical" personality without reaching for the overused Playfair Display.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

// Manrope: clean geometric sans for body/UI — distinct enough from the
// display serif to give the type system real contrast.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vgnaturals.com"),
  title: {
    default: "VG Naturals — Pure Essential Oils, Hydrosols & Herbal Teas | Lucknow, India",
    template: "%s | VG Naturals",
  },
  description:
    "VG Naturals Pvt Ltd manufactures and supplies steam-distilled essential oils, hydrosols, and herbal teas from our own farms in Lucknow, Uttar Pradesh. Bulk/wholesale, private label, and export enquiries welcome.",
  keywords: [
    "lemongrass essential oil",
    "lemongrass hydrosol",
    "tulsi essential oil",
    "tulsi hydrosol",
    "essential oil bulk supplier India",
    "essential oil manufacturer Lucknow",
  ],
  openGraph: {
    title: "VG Naturals — Pure Essential Oils, Hydrosols & Herbal Teas",
    description:
      "Farm-grown, steam-distilled essential oils and hydrosols from Lucknow, India. Wholesale, private label, and export supply.",
    url: "https://vgnaturals.com",
    siteName: "VG Naturals",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
