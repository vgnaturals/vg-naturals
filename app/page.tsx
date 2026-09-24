import Link from "next/link";
import Image from "next/image";
import {
  Droplets,
  Leaf,
  Wind,
  ShieldCheck,
  FileText,
  MessageCircle,
  Package,
  Users,
  ArrowRight,
} from "lucide-react";
import { company, productNav, industries, products } from "@/lib/site-data";

export default function HomePage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: company.url,
    logo: `${company.url}/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressCountry: "IN",
    },
    telephone: company.phone,
    email: company.email,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brand,
    url: company.url,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you supply in bulk for manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we supply Lemongrass and Tulsi essential oils, hydrosols, and air fresheners in bulk quantities for cosmetic, soap, and fragrance manufacturers. Contact us for a quote based on your required volume.",
        },
      },
      {
        "@type": "Question",
        name: "Can I order a sample before placing a bulk order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — 50ml and 100ml sample sizes are available for all six products, so you can evaluate quality before a bulk order.",
        },
      },
      {
        "@type": "Question",
        name: "Where are your products made?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cultivate lemongrass and tulsi on our own farm and steam-distill every batch at our facility in Lucknow, Uttar Pradesh.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-body text-sm font-medium tracking-wide text-gold">
              Farm-grown in Lucknow, Uttar Pradesh
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[3.25rem]">
              Natural Essential Oils, Hydrosols &amp; Botanical Air Fresheners from India
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg text-ink/80">
              VG Naturals Private Limited develops and supplies botanical
              products with a focus on Lemongrass and Tulsi. Explore
              essential oils, hydrosols and air fresheners for formulation,
              personal care, home care, fragrance and wellness applications.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-forest px-7 py-3.5 font-body font-medium text-ivory transition-colors hover:bg-forest-dark"
              >
                Request Bulk Quote
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-forest/30 px-7 py-3.5 font-body font-medium text-forest transition-colors hover:border-forest hover:bg-forest/5"
              >
                Explore Products
              </Link>
              <Link
                href="/request-sample"
                className="inline-flex items-center justify-center gap-2 px-2 py-3.5 font-body font-medium text-forest underline underline-offset-4"
              >
                Request a Sample
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gold/10 blur-2xl" />
            <div className="overflow-hidden rounded-sm border border-forest/10 shadow-xl shadow-forest/10">
              <Image
                src="/products/lemongrass-duo.jpg"
                alt="VG Naturals Lemongrass Essential Oil and Lemongrass Hydrosol, farm-fresh lemongrass and lemons in the background"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* EXPLORE OUR BOTANICAL RANGE                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-forest/10 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="font-display text-3xl text-forest sm:text-4xl">
            Explore Our Botanical Range
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {productNav.map((cat, i) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group block overflow-hidden rounded-sm border border-forest/10 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={i === 0 ? "/products/lemongrass-hydrosol.jpg" : "/products/tulsi-essential-oil.jpg"}
                    alt={`VG Naturals ${cat.name} range`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl text-forest">{cat.name}</h3>
                    <p className="mt-1 font-body text-sm text-ink/60">
                      Essential Oil · Hydrosol · Air Freshener
                    </p>
                  </div>
                  <ArrowRight
                    className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* OUR PRODUCT FORMATS                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">
          Our Product Formats
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Essential Oils",
              body: "100% pure, steam-distilled oils for diffusers, formulation, soap and candle making. Used diluted for skin applications.",
            },
            {
              icon: Droplets,
              title: "Hydrosols",
              body: "The gentle, water-based by-product of distillation — ready to use undiluted as a toner, mist, or formulation base.",
            },
            {
              icon: Wind,
              title: "Air Fresheners",
              body: "A concentrated hydrosol blend formulated for room and fabric use, with a longer-lasting fragrance throw.",
            },
          ].map((item) => (
            <div key={item.title}>
              <item.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl text-forest">{item.title}</h3>
              <p className="mt-2 font-body text-sm text-ink/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* BUILT FOR B2B BUYERS                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-forest">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="font-body text-sm font-medium text-gold-light">
            B2B first
          </p>
          <h2 className="mt-3 font-display text-3xl italic text-ivory sm:text-4xl">
            Built for B2B Buyers
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Package, label: "Sample quantities available (50ml / 100ml)" },
              { icon: Users, label: "Bulk supply for manufacturers & distributors" },
              { icon: FileText, label: "Product specifications on request" },
              { icon: MessageCircle, label: "Direct business enquiries via WhatsApp" },
            ].map((item) => (
              <div key={item.label} className="rounded-sm border border-ivory/15 p-5">
                <item.icon className="h-5 w-5 text-gold-light" strokeWidth={1.5} />
                <p className="mt-3 font-body text-sm text-ivory/85">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-body text-sm text-ivory/70">
            We're open to private-label and packaging discussions for the
            right fit — reach out with your requirement and we'll respond
            directly.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* INDUSTRIES WE SERVE                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl text-forest sm:text-4xl">
            Industries We Serve
          </h2>
          <Link href="/industries" className="font-body text-sm text-forest underline underline-offset-4">
            View all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-sm border border-forest/10 bg-cream px-4 py-4">
              <p className="font-body text-sm font-medium text-forest">{ind.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* WHY CHOOSE VG NATURALS                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-forest/10 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="font-display text-3xl text-forest sm:text-4xl">
            Why Choose VG Naturals
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {[
              { icon: Leaf, title: "Botanical-focused range", body: "Lemongrass and Tulsi, cultivated on our own farm — not a wide generic catalogue." },
              { icon: ShieldCheck, title: "Direct from producer", body: "Cultivation, distillation, and packaging happen under one roof in Lucknow." },
              { icon: Package, title: "Sample availability", body: "50ml and 100ml samples across all six products before you commit to bulk." },
              { icon: MessageCircle, title: "Direct communication", body: "Enquiries go straight to us on WhatsApp or email — no ticketing system in between." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg text-forest">{item.title}</h3>
                  <p className="mt-1.5 font-body text-sm text-ink/70">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SAMPLE TO BULK SUPPLY FUNNEL                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">
          From Sample to Bulk Supply
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {["Sample", "Product Evaluation", "Buyer Requirement", "Bulk Quote", "Supply"].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-3 sm:flex-col sm:items-start">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm text-ivory">
                  {i + 1}
                </div>
                <p className="font-body text-sm text-ink/75 sm:mt-3">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* REQUEST A BULK QUOTE                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-forest/10 bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl text-forest sm:text-3xl">
              Request a Bulk Quote
            </h2>
            <p className="mt-2 font-body text-ink/70">
              Tell us your product, quantity, and intended use — we'll come
              back with specifications and pricing.
            </p>
          </div>
          <Link
            href="/request-quote"
            className="shrink-0 rounded-sm bg-forest px-7 py-3.5 font-body font-medium text-ivory transition-colors hover:bg-forest-dark"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-lg text-forest">
              Do you supply in bulk for manufacturing?
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              Yes — we supply Lemongrass and Tulsi essential oils, hydrosols,
              and air fresheners in bulk for cosmetic, soap, and fragrance
              manufacturers. Contact us for a quote based on your volume.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-forest">
              Can I order a sample before a bulk order?
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              Yes — 50ml and 100ml sample sizes are available across all six
              products so you can evaluate quality first.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-forest">
              Where are your products made?
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              We cultivate lemongrass and tulsi on our own farm and
              steam-distill every batch at our facility in Lucknow, Uttar
              Pradesh.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-forest">
              Do you offer private-label packaging?
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              We're open to private-label and packaging discussions for the
              right fit — reach out with your requirement.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FINAL CTA                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-forest">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <h2 className="font-display text-2xl italic text-ivory sm:text-3xl">
            Looking for Essential Oils, Hydrosols or Botanical Air Fresheners?
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 font-body font-medium text-forest-dark transition-colors hover:bg-gold-light"
            >
              Request Bulk Quote
            </Link>
            <a
              href={`https://wa.me/${company.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/30 px-6 py-3 font-body font-medium text-ivory transition-colors hover:bg-ivory/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
