import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Tulsi Essential Oil, Hydrosol & Air Freshener",
  description:
    "Farm-grown, steam-distilled tulsi (holy basil) range from VG Naturals — pure essential oil, gentle hydrosol, and a concentrated room & fabric air freshener. Available in 50ml & 100ml, with bulk/B2B pricing.",
};

const products = [
  {
    name: "Tulsi Essential Oil",
    href: "/products/tulsi/tulsi-essential-oil",
    image: "/products/tulsi-oil-lineup.jpg",
    alt: "VG Naturals Tulsi Essential Oil bottles on a marble surface",
    description:
      "100% pure, steam-distilled from tulsi (holy basil) grown on our own farm. Warm, herbaceous, slightly spicy — for diffusers, formulation, and diluted skincare blends.",
    priceFrom: 300,
  },
  {
    name: "Tulsi Hydrosol",
    href: "/products/tulsi/tulsi-hydrosol",
    image: "/products/tulsi-hydrosol-single.jpg",
    alt: "VG Naturals Tulsi Hydrosol spray bottle",
    description:
      "The natural water by-product of our oil distillation — same batch, zero-waste. Ready to use undiluted as a facial toner, hair mist, or room spray.",
    priceFrom: 250,
  },
  {
    name: "Tulsi Air Freshener",
    href: "/products/tulsi/tulsi-air-freshener",
    image: "/products/tulsi-air-freshener.png",
    alt: "VG Naturals Tulsi Air Freshener spray bottle with fresh tulsi leaves",
    description:
      "A stronger-concentration, 100% water-based hydrosol blend (no alcohol) for a longer-lasting fragrance throw across rooms, curtains, and cars.",
    priceFrom: 250,
  },
];

export default function TulsiCategoryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="font-body text-sm text-ink/55">
            <Link href="/products" className="hover:text-forest">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">Tulsi</span>
          </nav>

          <div className="mt-6 flex items-center gap-2 font-body text-sm font-medium text-gold">
            <Leaf className="h-4 w-4" strokeWidth={1.5} />
            Farm-grown in Lucknow, Uttar Pradesh
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] text-forest sm:text-5xl">
            Tulsi, from our own fields
          </h1>
          <p className="mt-5 max-w-2xl font-body text-lg text-ink/75">
            One crop, three products — all from the same steam distillation.
            The oil, its hydrosol, and a concentrated air freshener blend, each
            traceable back to the harvest it came from.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group flex flex-col overflow-hidden rounded-sm border border-forest/10 bg-white transition-shadow hover:shadow-lg hover:shadow-forest/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl text-forest">
                  {product.name}
                </h2>
                <p className="mt-2 flex-1 font-body text-sm text-ink/70">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-body text-sm text-ink/60">
                    From{" "}
                    <span className="font-display text-lg text-forest">
                      ₹{product.priceFrom}
                    </span>
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-gold">
                    View Product
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
