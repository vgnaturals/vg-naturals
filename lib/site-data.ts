// Single source of truth for company details, product catalogue, navigation,
// and WhatsApp helpers. All six current launch products share the same sample
// pricing (50 ml ₹300, 100 ml ₹450). Future botanicals can be added by pushing
// new entries to `products` — nothing is hard-coded per page.

export const SITE_URL = "https://vgnaturals.com";

export const company = {
  legalName: "VG Naturals Private Limited",
  brand: "VG Naturals",
  headerName: "VG Naturals Pvt Ltd",
  tagline: "Pure • Natural • Organic Care",
  phone: "+91 90442 10088",
  phoneDisplay: "+91 90442 10088",
  phoneHref: "+919044210088",
  email: "vgnaturalspvtltd@gmail.com",
  addressLines: [
    "1248 Royal City Phase 2, Aurangabad Jagir,",
    "B R A University,",
    "Lucknow – 226025,",
    "Uttar Pradesh, India",
  ],
  addressInline:
    "1248 Royal City Phase 2, Aurangabad Jagir, B R A University, Lucknow – 226025, Uttar Pradesh, India",
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "India",
  postalCode: "226025",
  website: SITE_URL,
  whatsappNumber: "919044210088", // for wa.me links — country code, no plus, no spaces
  social: {
    instagram: "https://www.instagram.com/vgnaturalspvtltd/",
    facebook: "https://www.facebook.com/profile.php?id=61593880927070",
  },
};

// --- WhatsApp helpers -------------------------------------------------------

export function whatsappLink(message: string): string {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function sampleWhatsappMessage(productName: string): string {
  return `Hello VG Naturals, I am interested in a sample of ${productName}. Please share availability and details.`;
}

export function bulkWhatsappMessage(productName: string): string {
  return `Hello VG Naturals, I am interested in bulk supply of ${productName}. Please share specifications and pricing.`;
}

// --- Sample pricing (shared across all current products) --------------------

export type SampleSize = { size: string; price: number };

export const SAMPLE_SIZES: SampleSize[] = [
  { size: "50 ml", price: 300 },
  { size: "100 ml", price: 450 },
];

export const SAMPLE_PRICE_FROM = 300;

// --- Product model ----------------------------------------------------------

export type ProductType = "Essential Oil" | "Hydrosol" | "Air Freshener";
export type BotanicalKey = "lemongrass" | "tulsi";

export type Product = {
  slug: string;
  name: string;
  shortName: ProductType;
  type: ProductType;
  botanical: BotanicalKey;
  botanicalName: string;
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  description: string;
  intro: string;
  botanicalInfo: string;
  origin: string;
  applications: string[];
  usageNote: string;
  disclaimer: string;
  seoTitle: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

const EXTERNAL_USE_DISCLAIMER =
  "For external and formulation use only. Not for ingestion. Essential oils should be diluted with a suitable carrier before any skin application. Keep out of reach of children.";

const HYDROSOL_DISCLAIMER =
  "For external and formulation use. Shelf life, preservative system, and laboratory specifications are shared on request once confirmed for the relevant batch — we do not publish figures we have not verified.";

const AIR_FRESHENER_DISCLAIMER =
  "A room, fabric, and home fragrance product — not a cosmetic or therapeutic product, and not intended for skin application.";

export const products: Product[] = [
  // ---- LEMONGRASS ----------------------------------------------------------
  {
    slug: "lemongrass-essential-oil",
    name: "Lemongrass Essential Oil",
    shortName: "Essential Oil",
    type: "Essential Oil",
    botanical: "lemongrass",
    botanicalName: "Lemongrass",
    href: "/products/lemongrass/lemongrass-essential-oil",
    image: "/products/lemongrass-oil-lineup.jpg",
    imageAlt: "VG Naturals Lemongrass Essential Oil bottles on a stone surface",
    eyebrow: "Steam-distilled botanical oil",
    description:
      "Steam-distilled lemongrass essential oil with a fresh, citrus-forward aroma — supplied for formulation, personal care, soap, and fragrance applications.",
    intro:
      "Lemongrass (Cymbopogon) essential oil is valued across personal care, home care, and fragrance work for its bright, lemony, slightly herbaceous profile. VG Naturals supplies it as a botanical raw material for manufacturers, formulators, and product brands — in sample sizes for evaluation and in bulk for production.",
    botanicalInfo:
      "Botanical source: Cymbopogon (lemongrass). Extraction method: steam distillation of the aerial parts.",
    origin: "Sourced and produced in India, from our operations in Lucknow, Uttar Pradesh.",
    applications: [
      "Cosmetic and personal care formulation",
      "Soap, candle, and bath product making",
      "Aromatherapy and diffuser blends",
      "Natural home-care and fragrance products",
      "Perfumery and fragrance bases",
    ],
    usageNote:
      "Intended for external and formulation use. Dilute with a suitable carrier before any skin contact; do not apply undiluted.",
    disclaimer: EXTERNAL_USE_DISCLAIMER,
    seoTitle: "Lemongrass Essential Oil Supplier in India | VG Naturals",
    seoDescription:
      "Buy lemongrass essential oil from VG Naturals, an India-based botanical supplier. Steam-distilled, available in 50 ml (₹300) and 100 ml (₹450) samples and in bulk. Request a sample or bulk quote.",
    faqs: [
      {
        q: "Is your lemongrass essential oil available in bulk?",
        a: "Yes. We supply lemongrass essential oil in sample sizes for evaluation and in bulk quantities for production. Contact us with your requirement for bulk pricing.",
      },
      {
        q: "What sample sizes and prices are available?",
        a: "Samples are available in 50 ml at ₹300 and 100 ml at ₹450. Bulk pricing is quoted based on your quantity and packaging requirement.",
      },
      {
        q: "How should lemongrass essential oil be used?",
        a: "It is intended for external and formulation use — for example in soaps, cosmetics, diffuser blends, and fragrance products. It should be diluted with a suitable carrier before any skin application.",
      },
    ],
    related: ["lemongrass-hydrosol", "lemongrass-air-freshener", "tulsi-essential-oil"],
  },
  {
    slug: "lemongrass-hydrosol",
    name: "Lemongrass Hydrosol",
    shortName: "Hydrosol",
    type: "Hydrosol",
    botanical: "lemongrass",
    botanicalName: "Lemongrass",
    href: "/products/lemongrass/lemongrass-hydrosol",
    image: "/products/lemongrass-hydrosol-single.jpg",
    imageAlt: "VG Naturals Lemongrass Hydrosol spray bottle",
    eyebrow: "Aromatic distillation water",
    description:
      "Lemongrass hydrosol — the aromatic water from steam distillation. A gentle, water-based botanical ingredient for facial mists, formulation, and natural fragrance products.",
    intro:
      "Hydrosol (also called floral or aromatic water) is the water phase collected during steam distillation of lemongrass. It carries a soft, fresh lemongrass scent and is used as a water-based botanical ingredient in personal care and home-care formulations, as well as a ready-to-use mist.",
    botanicalInfo:
      "Botanical source: Cymbopogon (lemongrass). Produced as the aromatic water phase of steam distillation.",
    origin: "Sourced and produced in India, from our operations in Lucknow, Uttar Pradesh.",
    applications: [
      "Facial and body mist base",
      "Water phase in cosmetic formulation",
      "Hair and room mists",
      "Natural fragrance waters",
    ],
    usageNote:
      "A water-based product for external and formulation use. Patch-test finished formulations as you would with any cosmetic ingredient.",
    disclaimer: HYDROSOL_DISCLAIMER,
    seoTitle: "Lemongrass Hydrosol Supplier in India | VG Naturals",
    seoDescription:
      "Lemongrass hydrosol (aromatic distillation water) from VG Naturals, an India-based botanical supplier. Samples in 50 ml (₹300) and 100 ml (₹450), plus bulk supply. Request a sample or bulk quote.",
    faqs: [
      {
        q: "What is lemongrass hydrosol?",
        a: "It is the aromatic water collected during the steam distillation of lemongrass. It has a gentle lemongrass scent and is used as a water-based ingredient in cosmetics and as a ready-to-use mist.",
      },
      {
        q: "Do you publish shelf life and preservative details?",
        a: "We share shelf life, preservative system, and laboratory details on request once they are confirmed for the relevant batch. We do not publish figures we have not verified.",
      },
      {
        q: "Is it available in bulk?",
        a: "Yes. Samples are available in 50 ml (₹300) and 100 ml (₹450), and bulk quantities are supplied against your requirement. Contact us for bulk pricing.",
      },
    ],
    related: ["lemongrass-essential-oil", "lemongrass-air-freshener", "tulsi-hydrosol"],
  },
  {
    slug: "lemongrass-air-freshener",
    name: "Lemongrass Air Freshener",
    shortName: "Air Freshener",
    type: "Air Freshener",
    botanical: "lemongrass",
    botanicalName: "Lemongrass",
    href: "/products/lemongrass/lemongrass-air-freshener",
    image: "/products/lemongrass-air-freshener.png",
    imageAlt: "VG Naturals Lemongrass Air Freshener spray bottle with fresh lemongrass",
    eyebrow: "Room & fabric fragrance",
    description:
      "A botanical lemongrass air freshener for rooms, fabrics, and interiors — a fresh, natural home-fragrance option for home-care and hospitality use.",
    intro:
      "Our lemongrass air freshener is a home and fabric fragrance product built around the fresh, citrus profile of lemongrass. It is intended for freshening rooms, fabrics, and interior spaces — a natural-fragrance option for home-care brands, hospitality, and everyday use.",
    botanicalInfo:
      "Fragrance profile: lemongrass (Cymbopogon). A room and fabric fragrance formulation.",
    origin: "Formulated and produced in India, from our operations in Lucknow, Uttar Pradesh.",
    applications: [
      "Home and office room freshening",
      "Fabric and curtain freshening",
      "Cars and compact spaces",
      "Hospitality and retail environments",
    ],
    usageNote:
      "For room, fabric, and home fragrance use. Not intended for skin application. Spray into the air or onto fabrics from a suitable distance; avoid delicate or stainable surfaces.",
    disclaimer: AIR_FRESHENER_DISCLAIMER,
    seoTitle: "Lemongrass Air Freshener Supplier | VG Naturals",
    seoDescription:
      "Botanical lemongrass air freshener from VG Naturals for rooms, fabrics, and interiors. Samples in 50 ml (₹300) and 100 ml (₹450), plus bulk supply. Request a sample or bulk quote.",
    faqs: [
      {
        q: "Can the air freshener be used on skin?",
        a: "No. It is a room, fabric, and home fragrance product, not a cosmetic. It is not intended for skin application.",
      },
      {
        q: "Where can it be used?",
        a: "It is designed for rooms, offices, fabrics and curtains, cars, and hospitality or retail spaces. Avoid spraying onto delicate or stainable surfaces.",
      },
      {
        q: "Is bulk supply available?",
        a: "Yes. Samples are available in 50 ml (₹300) and 100 ml (₹450), and bulk quantities are supplied against your requirement. Contact us for bulk pricing.",
      },
    ],
    related: ["lemongrass-essential-oil", "lemongrass-hydrosol", "tulsi-air-freshener"],
  },
  // ---- TULSI ---------------------------------------------------------------
  {
    slug: "tulsi-essential-oil",
    name: "Tulsi Essential Oil",
    shortName: "Essential Oil",
    type: "Essential Oil",
    botanical: "tulsi",
    botanicalName: "Tulsi",
    href: "/products/tulsi/tulsi-essential-oil",
    image: "/products/tulsi-oil-lineup.jpg",
    imageAlt: "VG Naturals Tulsi Essential Oil bottles on a marble surface",
    eyebrow: "Steam-distilled botanical oil",
    description:
      "Steam-distilled tulsi (holy basil) essential oil with a warm, herbaceous aroma — supplied for personal care, wellness, soap, and fragrance formulation.",
    intro:
      "Tulsi (Ocimum, holy basil) essential oil has a warm, green, herbaceous character and a long association with Indian botanical traditions. VG Naturals supplies it as a botanical raw material for formulators and product brands — in sample sizes for evaluation and in bulk for production.",
    botanicalInfo:
      "Botanical source: Ocimum (tulsi / holy basil). Extraction method: steam distillation of the aerial parts.",
    origin: "Sourced and produced in India, from our operations in Lucknow, Uttar Pradesh.",
    applications: [
      "Personal care and wellness formulation",
      "Aromatherapy and diffuser blends",
      "Soap, candle, and bath product making",
      "Natural fragrance and perfumery bases",
    ],
    usageNote:
      "Intended for external and formulation use. Dilute with a suitable carrier before any skin contact; do not apply undiluted.",
    disclaimer: EXTERNAL_USE_DISCLAIMER,
    seoTitle: "Tulsi Essential Oil Supplier in India | VG Naturals",
    seoDescription:
      "Buy tulsi (holy basil) essential oil from VG Naturals, an India-based botanical supplier. Steam-distilled, available in 50 ml (₹300) and 100 ml (₹450) samples and in bulk. Request a sample or bulk quote.",
    faqs: [
      {
        q: "What is tulsi essential oil used for?",
        a: "It is used in personal care and wellness formulations, aromatherapy and diffuser blends, soap and candle making, and natural fragrance work. It is intended for external and formulation use.",
      },
      {
        q: "What sample sizes and prices are available?",
        a: "Samples are available in 50 ml at ₹300 and 100 ml at ₹450. Bulk pricing is quoted based on your quantity and packaging requirement.",
      },
      {
        q: "Is bulk supply available?",
        a: "Yes. We supply tulsi essential oil in bulk against your requirement. Contact us with your quantity and packaging needs for pricing.",
      },
    ],
    related: ["tulsi-hydrosol", "tulsi-air-freshener", "lemongrass-essential-oil"],
  },
  {
    slug: "tulsi-hydrosol",
    name: "Tulsi Hydrosol",
    shortName: "Hydrosol",
    type: "Hydrosol",
    botanical: "tulsi",
    botanicalName: "Tulsi",
    href: "/products/tulsi/tulsi-hydrosol",
    image: "/products/tulsi-hydrosol-single.jpg",
    imageAlt: "VG Naturals Tulsi Hydrosol spray bottle",
    eyebrow: "Aromatic distillation water",
    description:
      "Tulsi hydrosol — the aromatic water from steam distillation. A gentle, water-based botanical ingredient for facial mists, formulation, and natural fragrance products.",
    intro:
      "Tulsi hydrosol is the aromatic water phase collected during steam distillation of tulsi. It carries a soft, herbaceous tulsi scent and is used as a water-based botanical ingredient in personal care and home-care formulations, as well as a ready-to-use mist.",
    botanicalInfo:
      "Botanical source: Ocimum (tulsi / holy basil). Produced as the aromatic water phase of steam distillation.",
    origin: "Sourced and produced in India, from our operations in Lucknow, Uttar Pradesh.",
    applications: [
      "Facial and body mist base",
      "Water phase in cosmetic formulation",
      "Hair and room mists",
      "Natural fragrance waters",
    ],
    usageNote:
      "A water-based product for external and formulation use. Patch-test finished formulations as you would with any cosmetic ingredient.",
    disclaimer: HYDROSOL_DISCLAIMER,
    seoTitle: "Tulsi Hydrosol Supplier in India | VG Naturals",
    seoDescription:
      "Tulsi hydrosol (aromatic distillation water) from VG Naturals, an India-based botanical supplier. Samples in 50 ml (₹300) and 100 ml (₹450), plus bulk supply. Request a sample or bulk quote.",
    faqs: [
      {
        q: "What is tulsi hydrosol?",
        a: "It is the aromatic water collected during the steam distillation of tulsi. It has a gentle, herbaceous scent and is used as a water-based ingredient in cosmetics and as a ready-to-use mist.",
      },
      {
        q: "Do you publish shelf life and preservative details?",
        a: "We share shelf life, preservative system, and laboratory details on request once they are confirmed for the relevant batch. We do not publish figures we have not verified.",
      },
      {
        q: "Is it available in bulk?",
        a: "Yes. Samples are available in 50 ml (₹300) and 100 ml (₹450), and bulk quantities are supplied against your requirement. Contact us for bulk pricing.",
      },
    ],
    related: ["tulsi-essential-oil", "tulsi-air-freshener", "lemongrass-hydrosol"],
  },
  {
    slug: "tulsi-air-freshener",
    name: "Tulsi Air Freshener",
    shortName: "Air Freshener",
    type: "Air Freshener",
    botanical: "tulsi",
    botanicalName: "Tulsi",
    href: "/products/tulsi/tulsi-air-freshener",
    image: "/products/tulsi-air-freshener.png",
    imageAlt: "VG Naturals Tulsi Air Freshener spray bottle with fresh tulsi leaves",
    eyebrow: "Room & fabric fragrance",
    description:
      "A botanical tulsi air freshener for rooms, fabrics, and interiors — a warm, natural home-fragrance option for home-care and hospitality use.",
    intro:
      "Our tulsi air freshener is a home and fabric fragrance product built around the warm, herbaceous profile of tulsi. It is intended for freshening rooms, fabrics, and interior spaces — a natural-fragrance option for home-care brands, hospitality, and everyday use.",
    botanicalInfo:
      "Fragrance profile: tulsi (Ocimum). A room and fabric fragrance formulation.",
    origin: "Formulated and produced in India, from our operations in Lucknow, Uttar Pradesh.",
    applications: [
      "Home and office room freshening",
      "Fabric and curtain freshening",
      "Cars and compact spaces",
      "Hospitality and retail environments",
    ],
    usageNote:
      "For room, fabric, and home fragrance use. Not intended for skin application. Spray into the air or onto fabrics from a suitable distance; avoid delicate or stainable surfaces.",
    disclaimer: AIR_FRESHENER_DISCLAIMER,
    seoTitle: "Tulsi Air Freshener Supplier | VG Naturals",
    seoDescription:
      "Botanical tulsi air freshener from VG Naturals for rooms, fabrics, and interiors. Samples in 50 ml (₹300) and 100 ml (₹450), plus bulk supply. Request a sample or bulk quote.",
    faqs: [
      {
        q: "Can the air freshener be used on skin?",
        a: "No. It is a room, fabric, and home fragrance product, not a cosmetic. It is not intended for skin application.",
      },
      {
        q: "Where can it be used?",
        a: "It is designed for rooms, offices, fabrics and curtains, cars, and hospitality or retail spaces. Avoid spraying onto delicate or stainable surfaces.",
      },
      {
        q: "Is bulk supply available?",
        a: "Yes. Samples are available in 50 ml (₹300) and 100 ml (₹450), and bulk quantities are supplied against your requirement. Contact us for bulk pricing.",
      },
    ],
    related: ["tulsi-essential-oil", "tulsi-hydrosol", "lemongrass-air-freshener"],
  },
];

// --- Lookups ----------------------------------------------------------------

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBotanical(botanical: BotanicalKey): Product[] {
  return products.filter((p) => p.botanical === botanical);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}

// --- Botanical categories (only live products are exposed in navigation) ----

export type BotanicalCategory = {
  key: BotanicalKey;
  name: string;
  href: string;
  blurb: string;
  formats: string; // short "Essential Oil · Hydrosol · Air Freshener" label
};

export const botanicalCategories: BotanicalCategory[] = [
  {
    key: "lemongrass",
    name: "Lemongrass",
    href: "/products/lemongrass",
    blurb: "Fresh, citrus-forward botanical range — essential oil, hydrosol, and air freshener.",
    formats: "Essential Oil · Hydrosol · Air Freshener",
  },
  {
    key: "tulsi",
    name: "Tulsi",
    href: "/products/tulsi",
    blurb: "Warm, herbaceous holy-basil range — essential oil, hydrosol, and air freshener.",
    formats: "Essential Oil · Hydrosol · Air Freshener",
  },
];

// --- Product formats (for homepage "Our Product Formats") -------------------

export const productFormats = [
  {
    name: "Essential Oils",
    description:
      "Steam-distilled botanical oils supplied as raw material for cosmetics, personal care, soap, aromatherapy, and fragrance formulation.",
  },
  {
    name: "Hydrosols",
    description:
      "The aromatic water phase of distillation — gentle, water-based botanical ingredients for mists, toners, and formulation.",
  },
  {
    name: "Air Fresheners",
    description:
      "Botanical room and fabric fragrance products for home-care, hospitality, and everyday interior freshening.",
  },
];

// --- Industries -------------------------------------------------------------

export type Industry = {
  slug: string;
  name: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "cosmetics-personal-care",
    name: "Cosmetics & Personal Care",
    description:
      "Essential oils and hydrosols as botanical ingredients and natural fragrance components in cosmetic and personal care formulations.",
  },
  {
    slug: "skincare-haircare",
    name: "Skincare & Haircare",
    description:
      "Hydrosols as water-phase ingredients and essential oils as fragrance and functional additions in skincare and haircare products.",
  },
  {
    slug: "aromatherapy-wellness",
    name: "Aromatherapy & Wellness",
    description:
      "Single-botanical essential oils for diffuser blends, massage-oil bases, and wellness product lines.",
  },
  {
    slug: "soap-home-care",
    name: "Soap & Home Care",
    description:
      "Essential oils for soap, candle, and home-care fragrancing, plus botanical air fresheners for interior spaces.",
  },
  {
    slug: "perfume-fragrance",
    name: "Perfume & Fragrance",
    description:
      "Natural botanical materials as fragrance notes and bases for perfumery and fragrance product development.",
  },
  {
    slug: "natural-product-brands",
    name: "Natural Product Brands",
    description:
      "Traceable, India-sourced botanical inputs for brands building natural and botanical-first product ranges.",
  },
  {
    slug: "private-label-brands",
    name: "Private Label Brands",
    description:
      "Botanical raw materials to support private-label product development. Packaging and requirements discussed per project.",
  },
  {
    slug: "distributors-wholesalers",
    name: "Distributors & Wholesalers",
    description:
      "Bulk essential oils, hydrosols, and air fresheners for distributors and wholesalers serving the natural products market.",
  },
];
