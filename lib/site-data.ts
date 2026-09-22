// Single source of truth for product categories, used by the Navbar now
// and by the /products pages when those are built next.

export type ProductLink = {
  name: string;
  href: string;
  status?: "live" | "coming-soon";
};

export type ProductCategory = {
  name: string;
  href: string;
  status: "live" | "coming-soon";
  items: ProductLink[];
};

export const productCategories: ProductCategory[] = [
  {
    name: "Lemongrass",
    href: "/products/lemongrass",
    status: "live",
    items: [
      { name: "Lemongrass Essential Oil", href: "/products/lemongrass/lemongrass-essential-oil", status: "live" },
      { name: "Lemongrass Hydrosol", href: "/products/lemongrass/lemongrass-hydrosol", status: "live" },
      { name: "Lemongrass Tea", href: "/products/lemongrass/lemongrass-tea", status: "coming-soon" },
      { name: "Lemongrass Slips", href: "/products/lemongrass/lemongrass-slips", status: "coming-soon" },
    ],
  },
  {
    name: "Tulsi",
    href: "/products/tulsi",
    status: "live",
    items: [
      { name: "Tulsi Essential Oil", href: "/products/tulsi/tulsi-essential-oil", status: "live" },
      { name: "Tulsi Hydrosol", href: "/products/tulsi/tulsi-hydrosol", status: "live" },
      { name: "Tulsi Herbs", href: "/products/tulsi/tulsi-herbs", status: "coming-soon" },
      { name: "Tulsi Tea", href: "/products/tulsi/tulsi-tea", status: "coming-soon" },
    ],
  },
  {
    name: "Chamomile",
    href: "/products/chamomile",
    status: "coming-soon",
    items: [],
  },
  {
    name: "Vetiver",
    href: "/products/vetiver",
    status: "coming-soon",
    items: [],
  },
];

export const company = {
  legalName: "VG Naturals Private Limited",
  brand: "VG Naturals",
  tagline: "Pure • Natural • Organic Care",
  phone: "+91 90442 10088",
  phoneDisplay: "90442 10088",
  email: "vgnaturalspvtltd@gmail.com",
  address: "1248 Royal City Phase 2, Aurangabad Jagir, B R A University, Lucknow – 226025, Uttar Pradesh",
  whatsappNumber: "919044210088", // for wa.me links — country code, no plus, no spaces
  social: {
    instagram: "https://www.instagram.com/vgnaturalspvtltd/",
    facebook: "https://www.facebook.com/profile.php?id=61593880927070",
    linkedin: "", // add once the company page/profile URL is live
  },
};
