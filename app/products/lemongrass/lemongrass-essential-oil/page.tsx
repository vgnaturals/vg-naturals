import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Droplets, FlaskConical, ShieldAlert } from "lucide-react";
import ProductBuyBox from "@/components/ProductBuyBox";

export const metadata: Metadata = {
  title: "Lemongrass Essential Oil — 100% Pure & Farm-Distilled",
  description:
    "Pure, farm-grown Lemongrass Essential Oil, steam-distilled in small batches. Available in 50ml & 100ml. Bulk/B2B pricing available.",
};

const uses = [
  { icon: Droplets, text: "Diffusers and aromatherapy" },
  { icon: FlaskConical, text: "Soap and candle making" },
  { icon: Leaf, text: "Cosmetic formulation" },
  { icon: Droplets, text: "Diluted skincare blends" },
];

export default function LemongrassEssentialOilPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <nav aria-label="Breadcrumb" className="font-body text-sm text-ink/55">
        <Link href="/products" className="hover:text-forest">
          Products
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products/lemongrass" className="hover:text-forest">
          Lemongrass
        </Link>
        <span className="mx-2">/</span>
        <span className="text-forest">Essential Oil</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gold/10 blur-2xl" />
          <div className="overflow-hidden rounded-sm border border-forest/10 shadow-xl shadow-forest/10">
            <Image
              src="/products/lemongrass-oil-lineup.jpg"
              alt="VG Naturals Lemongrass Essential Oil bottles"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2 font-body text-sm font-medium text-gold">
            <Leaf className="h-4 w-4" strokeWidth={1.5} />
            Farm-grown · Steam distilled
          </div>
          <h1 className="mt-3 font-display text-3xl leading-[1.15] text-forest sm:text-4xl">
            Lemongrass Essential Oil — 100% Pure, Farm-Grown &amp; Steam-Distilled
          </h1>
          <p className="mt-5 font-body text-lg text-ink/75">
            100% pure, steam-distilled from lemongrass cultivated on our own
            farm in Uttar Pradesh. Fresh, citrusy, slightly earthy aroma.
          </p>

          <div className="mt-8">
            <ProductBuyBox
              productName="Lemongrass Essential Oil"
              price50ml={300}
              price100ml={450}
            />
          </div>
        </div>
      </div>

      {/* Uses + label */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-2xl text-forest">How it&apos;s used</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {uses.map((use) => (
              <li
                key={use.text}
                className="flex items-start gap-3 rounded-sm border border-forest/10 bg-white p-4"
              >
                <use.icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="font-body text-sm text-ink/75">{use.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-body text-sm text-ink/60">
            Always dilute with a carrier oil — never apply undiluted on skin.
          </p>
        </div>

        <div className="flex items-start gap-3 self-start rounded-sm border border-gold/40 bg-gold/10 p-5">
          <ShieldAlert className="h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.75} />
          <div>
            <p className="font-body text-sm font-semibold text-forest">
              For External Use Only
            </p>
            <p className="mt-1 font-body text-sm text-ink/70">
              This product is intended for external and formulation use. Keep
              out of reach of children. Do not ingest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
