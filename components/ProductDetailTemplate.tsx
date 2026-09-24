import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import ProductBuyBox from "@/components/ProductBuyBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products, industries, type Product } from "@/lib/site-data";

export default function ProductDetailTemplate({ product }: { product: Product }) {
  const related = products.filter(
    (p) => p.family === product.family && p.slug !== product.slug
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: "VG Naturals" },
    offers: product.sizes.map((s) => ({
      "@type": "Offer",
      name: `${product.name} - ${s.label}`,
      priceCurrency: "INR",
      price: s.price,
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        trail={[
          { name: "Products", href: "/products" },
          { name: product.familyLabel, href: `/products/${product.family}` },
          { name: product.type, href: `/products/${product.family}/${product.slug}` },
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-sm border border-forest/10">
          <Image
            src={product.image}
            alt={`${product.name} — VG Naturals`}
            width={1000}
            height={1200}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div>
          <p className="font-body text-sm font-medium text-gold">
            {product.familyLabel} · {product.type}
          </p>
          <h1 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 font-body text-ink/80">{product.shortDescription}</p>

          <div className="mt-6 flex items-start gap-2 rounded-sm bg-cream px-4 py-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.75} />
            <p className="font-body text-sm text-ink/70">{product.labelNote}</p>
          </div>

          {product.pendingNote && (
            <div className="mt-3 rounded-sm border border-dashed border-gold/50 bg-gold/5 px-4 py-3">
              <p className="font-body text-xs text-ink/60">
                <span className="font-medium text-gold-dark">Pending: </span>
                {product.pendingNote}
              </p>
            </div>
          )}

          <h2 className="mt-8 font-display text-lg text-forest">Applications</h2>
          <ul className="mt-3 space-y-2">
            {product.applications.map((a) => (
              <li key={a} className="flex items-start gap-2 font-body text-sm text-ink/75">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-light" strokeWidth={1.75} />
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ProductBuyBox productName={product.name} sizes={product.sizes} />
          </div>
        </div>
      </section>

      {/* Industries this product applies to */}
      <section className="border-t border-forest/10 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="font-display text-2xl text-forest">Where this fits</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {industries.slice(0, 6).map((ind) => (
              <Link
                key={ind.name}
                href="/industries"
                className="rounded-sm border border-forest/10 bg-white px-4 py-3 font-body text-sm text-ink/75 hover:border-forest/30"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="font-display text-2xl text-forest">Frequently asked</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-display text-base text-forest">
              Can I apply this directly to my skin?
            </h3>
            <p className="mt-1.5 font-body text-sm text-ink/70">
              {product.type === "Essential Oil"
                ? "No — dilute with a carrier oil before any skin contact. Never apply undiluted essential oil directly."
                : product.type === "Hydrosol"
                ? "Yes, hydrosols are gentle enough for direct use, unlike concentrated essential oils."
                : "No — this is formulated for room and fabric use only, not for skin application."}
            </p>
          </div>
          <div>
            <h3 className="font-display text-base text-forest">
              Do you offer bulk or wholesale pricing?
            </h3>
            <p className="mt-1.5 font-body text-sm text-ink/70">
              Yes — contact us for bulk pricing based on your required
              quantity. Use the Request Bulk Quote button above or visit our{" "}
              <Link href="/bulk-supply" className="underline hover:text-forest">
                Bulk Supply page
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-display text-base text-forest">
              Where is this made?
            </h3>
            <p className="mt-1.5 font-body text-sm text-ink/70">
              Cultivated and steam-distilled at our facility in Lucknow,
              Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-forest/10 bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <h2 className="font-display text-2xl text-forest">
              More from {product.familyLabel}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.family}/${r.slug}`}
                  className="group flex items-center gap-4 rounded-sm border border-forest/10 bg-white p-4 hover:border-forest/30"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-sm">
                    <Image src={r.image} alt={r.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-base text-forest">{r.name}</p>
                    <p className="mt-1 font-body text-xs text-ink/60">
                      From ₹{r.sizes[0].price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
