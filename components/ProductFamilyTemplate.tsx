import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getProductsByFamily } from "@/lib/site-data";

export default function ProductFamilyTemplate({
  family,
  familyLabel,
  intro,
}: {
  family: "lemongrass" | "tulsi";
  familyLabel: string;
  intro: string;
}) {
  const items = getProductsByFamily(family);

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Products", href: "/products" },
          { name: familyLabel, href: `/products/${family}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl text-forest sm:text-4xl">
            {familyLabel} Essential Oil, Hydrosol &amp; Air Freshener Supplier in India
          </h1>
          <p className="mt-4 font-body text-ink/75">{intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.family}/${p.slug}`}
              className="group block overflow-hidden rounded-sm border border-forest/10 bg-white"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-body text-xs font-medium text-gold">{p.type}</p>
                <h2 className="mt-1 font-display text-lg text-forest">{p.name}</h2>
                <p className="mt-2 line-clamp-2 font-body text-sm text-ink/60">
                  {p.shortDescription}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-body text-sm text-ink/70">
                    From ₹{p.sizes[0].price}
                  </p>
                  <ArrowRight
                    className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-forest/10 bg-forest">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center lg:px-8">
          <h2 className="font-display text-2xl italic text-ivory">
            Need {familyLabel.toLowerCase()} in bulk for manufacturing?
          </h2>
          <Link
            href="/request-quote"
            className="shrink-0 rounded-sm bg-gold px-6 py-3 font-body font-medium text-forest-dark transition-colors hover:bg-gold-light"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>
    </>
  );
}
