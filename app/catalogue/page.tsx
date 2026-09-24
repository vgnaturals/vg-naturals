import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { company, products, productNav } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Product Catalogue | VG Naturals",
  description:
    "VG Naturals product catalogue — Lemongrass and Tulsi essential oils, hydrosols, and air fresheners. Sample pricing and bulk enquiries.",
};

export default function CataloguePage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Catalogue", href: "/catalogue" }]} />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
        <h1 className="font-display text-3xl text-forest sm:text-4xl">
          VG Naturals Product Catalogue
        </h1>
        <p className="mt-4 max-w-2xl font-body text-ink/75">
          {company.legalName} manufactures and supplies Lemongrass and Tulsi
          essential oils, hydrosols, and botanical air fresheners from our
          farm and distillation facility in Lucknow, Uttar Pradesh.
        </p>

        <div className="mt-8 rounded-sm border border-dashed border-gold/50 bg-gold/5 p-6">
          <p className="font-body text-sm text-ink/70">
            Catalogue coming soon — contact us for the current product list
            and pricing.
          </p>
          <a
            href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
              "Hi, could you share your current product catalogue?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-sm bg-forest px-6 py-3 font-body font-medium text-ivory transition-colors hover:bg-forest-dark"
          >
            Ask for the Catalogue on WhatsApp
          </a>
        </div>

        {productNav.map((cat) => (
          <div key={cat.name} className="mt-12">
            <h2 className="font-display text-2xl text-forest">{cat.name}</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {products
                .filter((p) => p.family === (cat.name.toLowerCase() as "lemongrass" | "tulsi"))
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.family}/${p.slug}`}
                    className="block overflow-hidden rounded-sm border border-forest/10 bg-white"
                  >
                    <div className="relative aspect-square">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <p className="font-display text-sm text-forest">{p.name}</p>
                      <p className="mt-1 font-body text-xs text-ink/60">
                        {p.sizes.map((s) => `${s.label} ₹${s.price}`).join(" / ")}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-12 border-t border-forest/10 pt-8">
          <Link
            href="/request-quote"
            className="inline-flex items-center justify-center rounded-sm bg-forest px-7 py-3.5 font-body font-medium text-ivory transition-colors hover:bg-forest-dark"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>
    </>
  );
}
