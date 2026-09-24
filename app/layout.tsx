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
    default:
      "Natural Essential Oils, Hydrosols & Botanical Air Fresheners from India | VG Naturals",
    template: "%s | VG Naturals",
  },
  description:
    "VG Naturals Private Limited develops and supplies botanical products with a focus on Lemongrass and Tulsi — essential oils, hydrosols and air fresheners for formulation, personal care, home care, fragrance and wellness applications. Bulk, private label and sample enquiries welcome.",
  keywords: [
    "essential oil supplier India",
    "essential oil manufacturer India",
    "bulk essential oil supplier India",
    "lemongrass essential oil supplier",
    "lemongrass hydrosol supplier",
    "tulsi essential oil supplier",
    "tulsi hydrosol supplier",
    "botanical products supplier India",
    "natural air freshener supplier India",
    "bulk hydrosol supplier India",
  ],
  alternates: {
    canonical: "https://vgnaturals.com",
  },
  openGraph: {
    title: "Natural Essential Oils, Hydrosols & Botanical Air Fresheners from India",
    description:
      "Farm-grown, steam-distilled Lemongrass and Tulsi essential oils, hydrosols and air fresheners from Lucknow, India. Wholesale, private label, and sample supply.",
    url: "https://vgnaturals.com",
    siteName: "VG Naturals",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VG Naturals — Essential Oils, Hydrosols & Botanical Air Fresheners",
    description:
      "Farm-grown, steam-distilled Lemongrass and Tulsi essential oils, hydrosols and air fresheners from Lucknow, India.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VG Naturals Private Limited",
  alternateName: "VG Naturals",
  url: "https://vgnaturals.com",
  logo: "https://vgnaturals.com/brand/logo.png",
  email: "vgnaturalspvtltd@gmail.com",
  telephone: "+91-90442-10088",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1248 Royal City Phase 2, Aurangabad Jagir, B R A University",
    addressLocality: "Lucknow",
    postalCode: "226025",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/vgnaturalspvtltd/",
    "https://www.facebook.com/profile.php?id=61593880927070",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VG Naturals",
  url: "https://vgnaturals.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
