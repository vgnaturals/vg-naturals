import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products, productNav } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Essential Oils, Hydrosols & Air Fresheners | VG Naturals Products",
  description:
    "Browse VG Naturals' full product range — Lemongrass and Tulsi Essential Oils, Hydrosols, and Air Fresheners. Farm-grown, steam-distilled in Lucknow.",
};

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Products", href: "/products" }]} />

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <h1 className="font-display text-3xl text-forest sm:text-4xl">
          Our Botanical Range
        </h1>
        <p className="mt-4 max-w-2xl font-body text-ink/75">
          Two founding crops, cultivated on our own farm in Lucknow, Uttar
          Pradesh — each available as an essential oil, hydrosol, and
          concentrated air freshener blend.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {productNav.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group block overflow-hidden rounded-sm border border-forest/10 bg-white p-6"
            >
              <h2 className="font-display text-2xl text-forest">{cat.name}</h2>
              <p className="mt-2 font-body text-sm text-ink/60">
                Essential Oil · Hydrosol · Air Freshener
              </p>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl text-forest">
          All products
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.family}/${p.slug}`}
              className="group block overflow-hidden rounded-sm border border-forest/10 bg-white"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <p className="font-body text-xs text-ink/50">{p.familyLabel}</p>
                <p className="font-display text-sm text-forest">{p.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
