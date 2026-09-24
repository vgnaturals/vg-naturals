// Single source of truth for products, company info, and navigation.
// Per the "zero hardcoding across 6 pages" requirement, every product
// page is rendered from this data through shared templates in
// components/ProductDetailTemplate.tsx and components/ProductFamilyTemplate.tsx.

export type Size = { label: string; price: number };

export type Product = {
  slug: string; // e.g. "lemongrass-essential-oil"
  family: "lemongrass" | "tulsi";
  familyLabel: string; // "Lemongrass" | "Tulsi"
  type: "Essential Oil" | "Hydrosol" | "Air Freshener";
  name: string; // full product name, e.g. "Lemongrass Essential Oil"
  shortDescription: string;
  applications: string[];
  image: string; // path under /public
  labelNote: string; // exact safety/use label as printed
  pendingNote?: string; // disclosed-but-unverified spec, shown as a visible flag, never hidden
  sizes: Size[];
  seoTitle: string;
  seoDescription: string;
  status: "live" | "inactive";
};

export const products: Product[] = [
  // ── LEMONGRASS ──────────────────────────────────────────────
  {
    slug: "lemongrass-essential-oil",
    family: "lemongrass",
    familyLabel: "Lemongrass",
    type: "Essential Oil",
    name: "Lemongrass Essential Oil",
    shortDescription:
      "100% pure, steam-distilled from lemongrass cultivated on our own farm in Uttar Pradesh. Fresh, citrusy, slightly earthy aroma.",
    applications: [
      "Diffusers and home fragrance",
      "Soap and candle making",
      "Cosmetic and personal-care formulation",
      "Diluted skincare blends (always with a carrier oil)",
    ],
    image: "/products/lemongrass-essential-oil.jpg",
    labelNote: "For External Use Only. Dilute with a carrier oil before skin contact.",
    sizes: [
      { label: "50ml", price: 300 },
      { label: "100ml", price: 450 },
    ],
    seoTitle: "Lemongrass Essential Oil Supplier in India | VG Naturals",
    seoDescription:
      "Pure, farm-grown Lemongrass Essential Oil, steam-distilled in small batches in Lucknow. Sample sizes 50ml & 100ml. Bulk/B2B enquiries welcome.",
    status: "live",
  },
  {
    slug: "lemongrass-hydrosol",
    family: "lemongrass",
    familyLabel: "Lemongrass",
    type: "Hydrosol",
    name: "Lemongrass Hydrosol",
    shortDescription:
      "The natural water by-product of our Lemongrass Essential Oil distillation — same batch, zero-waste process. Gentle enough to use undiluted.",
    applications: [
      "Facial toner / skin mist",
      "Hair mist / scalp refresher",
      "Room and linen spray",
      "Base ingredient for natural cosmetic formulation",
    ],
    image: "/products/lemongrass-hydrosol.jpg",
    labelNote: "For External Use Only.",
    pendingNote: "Shelf life and preservative system — pending lab confirmation before publishing exact figures.",
    sizes: [
      { label: "50ml", price: 300 },
      { label: "100ml", price: 450 },
    ],
    seoTitle: "Lemongrass Hydrosol Supplier in India | VG Naturals",
    seoDescription:
      "Gentle, farm-distilled Lemongrass Hydrosol from Lucknow. Use as a facial toner, hair mist, or room spray. Sample sizes 50ml & 100ml.",
    status: "live",
  },
  {
    slug: "lemongrass-air-freshener",
    family: "lemongrass",
    familyLabel: "Lemongrass",
    type: "Air Freshener",
    name: "Lemongrass Air Freshener",
    shortDescription:
      "A concentrated Lemongrass Hydrosol blend, 100% water-based, formulated for a stronger and longer-lasting fragrance throw for rooms and fabric.",
    applications: [
      "Room and fabric spray",
      "Car fresheners",
      "Curtains and upholstery",
    ],
    image: "/products/lemongrass-hydrosol.jpg",
    labelNote: "For Room & Fabric Use Only. Avoid contact with eyes. Not for use on skin.",
    pendingNote: "Exact concentration and shelf-life specification — pending lab confirmation before publishing.",
    sizes: [
      { label: "50ml", price: 300 },
      { label: "100ml", price: 450 },
    ],
    seoTitle: "Lemongrass Air Freshener Supplier | VG Naturals",
    seoDescription:
      "Natural Lemongrass room & fabric spray, a concentrated hydrosol blend from our own farm distillation. Sample sizes 50ml & 100ml.",
    status: "live",
  },

  // ── TULSI ────────────────────────────────────────────────────
  {
    slug: "tulsi-essential-oil",
    family: "tulsi",
    familyLabel: "Tulsi",
    type: "Essential Oil",
    name: "Tulsi Essential Oil",
    shortDescription:
      "100% pure, steam-distilled from tulsi (holy basil) cultivated on our own farm. Warm, herbaceous, slightly spicy aroma.",
    applications: [
      "Diffusers and home fragrance",
      "Soap and candle making",
      "Cosmetic and wellness-product formulation",
      "Diluted skincare blends (always with a carrier oil)",
    ],
    image: "/products/tulsi-essential-oil.jpg",
    labelNote: "For External Use Only. Dilute with a carrier oil before skin contact.",
    sizes: [
      { label: "50ml", price: 300 },
      { label: "100ml", price: 450 },
    ],
    seoTitle: "Tulsi Essential Oil Supplier in India | VG Naturals",
    seoDescription:
      "Pure, farm-grown Tulsi Essential Oil, steam-distilled in small batches in Lucknow. Sample sizes 50ml & 100ml. Bulk/B2B enquiries welcome.",
    status: "live",
  },
  {
    slug: "tulsi-hydrosol",
    family: "tulsi",
    familyLabel: "Tulsi",
    type: "Hydrosol",
    name: "Tulsi Hydrosol",
    shortDescription:
      "The natural water by-product of our Tulsi Essential Oil distillation — same batch, zero-waste process. Gentle enough to use undiluted.",
    applications: [
      "Facial toner / skin mist",
      "Hair mist",
      "Room and linen spray",
      "Base ingredient for natural cosmetic formulation",
    ],
    image: "/products/tulsi-hydrosol.jpg",
    labelNote: "For External Use Only.",
    pendingNote: "Shelf life and preservative system — pending lab confirmation before publishing exact figures.",
    sizes: [
      { label: "50ml", price: 300 },
      { label: "100ml", price: 450 },
    ],
    seoTitle: "Tulsi Hydrosol Supplier in India | VG Naturals",
    seoDescription:
      "Gentle, farm-distilled Tulsi Hydrosol from Lucknow. Use as a facial toner, hair mist, or room spray. Sample sizes 50ml & 100ml.",
    status: "live",
  },
  {
    slug: "tulsi-air-freshener",
    family: "tulsi",
    familyLabel: "Tulsi",
    type: "Air Freshener",
    name: "Tulsi Air Freshener",
    shortDescription:
      "A concentrated Tulsi Hydrosol blend, 100% water-based, formulated for a stronger and longer-lasting fragrance throw for rooms and fabric.",
    applications: [
      "Room and fabric spray",
      "Car fresheners",
      "Curtains and upholstery",
    ],
    image: "/products/tulsi-hydrosol.jpg",
    labelNote: "For Room & Fabric Use Only. Avoid contact with eyes. Not for use on skin.",
    pendingNote: "Exact concentration and shelf-life specification — pending lab confirmation before publishing.",
    sizes: [
      { label: "50ml", price: 300 },
      { label: "100ml", price: 450 },
    ],
    seoTitle: "Tulsi Air Freshener Supplier | VG Naturals",
    seoDescription:
      "Natural Tulsi room & fabric spray, a concentrated hydrosol blend from our own farm distillation. Sample sizes 50ml & 100ml.",
    status: "live",
  },
];

// Kept in the data model for future expansion (per the architecture
// requirement) but NOT exposed as clickable/active anywhere in nav,
// footer, or product listings — no product entries exist for these yet.
export const futureFamilies = ["chamomile", "vetiver"] as const;

export function getProductsByFamily(family: "lemongrass" | "tulsi") {
  return products.filter((p) => p.family === family && p.status === "live");
}

export function getProductBySlug(family: string, slug: string) {
  return products.find(
    (p) => p.family === family && p.slug === slug && p.status === "live"
  );
}

export const company = {
  legalName: "VG Naturals Private Limited",
  brand: "VG Naturals",
  brandWithSuffix: "VG Naturals Pvt Ltd",
  tagline: "Pure • Natural • Organic Care",
  phone: "+91 90442 10088",
  phoneDisplay: "90442 10088",
  email: "vgnaturalspvtltd@gmail.com",
  address: "1248 Royal City Phase 2, Aurangabad Jagir, B R A University, Lucknow – 226025, Uttar Pradesh",
  whatsappNumber: "919044210088", // for wa.me links — country code, no plus, no spaces
  url: "https://vgnaturals.com",
  social: {
    instagram: "https://www.instagram.com/vgnaturalspvtltd/",
    facebook: "https://www.facebook.com/profile.php?id=61593880927070",
    // LinkedIn intentionally omitted — do not render an empty link.
  },
};

// Nav structure — only the 6 live products appear. Category link points
// to the family page; each product links to its own detail page.
export const productNav = [
  {
    name: "Lemongrass",
    href: "/products/lemongrass",
    items: getProductsByFamily("lemongrass").map((p) => ({
      name: p.type,
      href: `/products/${p.family}/${p.slug}`,
    })),
  },
  {
    name: "Tulsi",
    href: "/products/tulsi",
    items: getProductsByFamily("tulsi").map((p) => ({
      name: p.type,
      href: `/products/${p.family}/${p.slug}`,
    })),
  },
];

export const industries = [
  {
    name: "Cosmetics & Personal Care",
    blurb:
      "Essential oils and hydrosols as fragrance and formulation ingredients for creams, lotions, and personal-care products.",
  },
  {
    name: "Skincare & Haircare",
    blurb:
      "Hydrosols as gentle, water-based bases for toners, mists, and hair-care formulations.",
  },
  {
    name: "Aromatherapy & Wellness",
    blurb:
      "Pure essential oils for diffuser blends and aromatherapy applications.",
  },
  {
    name: "Soap & Home Care",
    blurb:
      "Essential oils and concentrated hydrosol blends as natural fragrance for soap-making and home-care products.",
  },
  {
    name: "Perfume & Fragrance",
    blurb:
      "Botanical essential oils as natural fragrance components for perfumery and scent development.",
  },
  {
    name: "Natural Product Brands",
    blurb:
      "Raw botanical ingredients for brands building natural and Ayurvedic-adjacent product lines.",
  },
  {
    name: "Private Label Brands",
    blurb:
      "Bulk supply and private-label discussions for brands that want to launch under their own name.",
  },
  {
    name: "Distributors & Wholesalers",
    blurb:
      "Slab pricing by volume for distributors and wholesalers supplying other businesses.",
  },
];
