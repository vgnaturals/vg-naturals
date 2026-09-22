import Link from "next/link";
import Image from "next/image";
import { Droplets, Leaf, ShieldCheck, Ship, ArrowRight } from "lucide-react";
import { company } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-body text-sm font-medium tracking-wide text-gold">
              Farm-grown in Lucknow, Uttar Pradesh
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-6xl">
              Essential oils, distilled the way they should be.
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg text-ink/80">
              VG Naturals cultivates lemongrass and tulsi on our own farm and
              steam-distills every batch in-house — pure oils and hydrosols,
              traceable from soil to bottle, ready for wholesale and private
              label supply.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
            </div>

            <p className="mt-8 font-body text-sm text-ink/50">
              Own cultivation · Steam distilled · Batch traceable · Export
              target March 2027
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gold/10 blur-2xl" />
            <div className="overflow-hidden rounded-sm border border-forest/10 shadow-xl shadow-forest/10">
              <Image
                src="/products/lemongrass-duo.jpg"
                alt="VG Naturals Lemongrass Essential Oil and Lemongrass Hydrosol bottles, farm-fresh lemongrass in the background"
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
      {/* VALUE PROPOSITION                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-forest/10 bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-3 lg:px-8">
          {[
            {
              icon: Leaf,
              title: "Farm to bottle",
              body: "We grow lemongrass and tulsi ourselves — no unnamed middlemen between the field and your order.",
            },
            {
              icon: Droplets,
              title: "Steam distilled, zero waste",
              body: "The same distillation that produces our oil also yields hydrosol — nothing discarded, real margin advantage passed on in pricing.",
            },
            {
              icon: ShieldCheck,
              title: "Batch traceable",
              body: "Every bottle can be traced back to its harvest and distillation batch — the transparency bulk buyers ask for.",
            },
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
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* HERO CATEGORIES — LEMONGRASS & TULSI                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-forest sm:text-4xl">
            Our range, in two families
          </h2>
          <p className="mt-3 font-body text-ink/70">
            Lemongrass and tulsi are our founding crops — cultivated on our own
            land and available as essential oil and hydrosol today, with tea
            and dried herb lines following shortly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Lemongrass block */}
          <Link
            href="/products/lemongrass"
            className="group block overflow-hidden rounded-sm border border-forest/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/products/lemongrass-hydrosol-single.jpg"
                alt="VG Naturals Lemongrass Hydrosol bottle"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between bg-white p-6">
              <div>
                <h3 className="font-display text-xl text-forest">Lemongrass</h3>
                <p className="mt-1 font-body text-sm text-ink/60">
                  Essential Oil · Hydrosol · Tea (soon) · Slips (soon)
                </p>
              </div>
              <ArrowRight
                className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1"
                strokeWidth={2}
              />
            </div>
          </Link>

          {/* Tulsi block */}
          <Link
            href="/products/tulsi"
            className="group block overflow-hidden rounded-sm border border-forest/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/products/tulsi-oil-lineup.jpg"
                alt="VG Naturals Tulsi Essential Oil bottles"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between bg-white p-6">
              <div>
                <h3 className="font-display text-xl text-forest">Tulsi</h3>
                <p className="mt-1 font-body text-sm text-ink/60">
                  Essential Oil · Hydrosol · Herbs (soon) · Tea (soon)
                </p>
              </div>
              <ArrowRight
                className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1"
                strokeWidth={2}
              />
            </div>
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* B2B BULK SUPPLY & EXPORT TEASER                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-forest">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <p className="font-body text-sm font-medium text-gold-light">
              Wholesale · Private label · Export
            </p>
            <h2 className="mt-3 font-display text-3xl italic text-ivory sm:text-4xl">
              Built for buyers who need volume and proof of quality.
            </h2>
            <p className="mt-4 font-body text-ivory/75">
              We supply cosmetic and soap manufacturers, aromatherapy brands,
              and distributors with bulk essential oil and hydrosol —
              specification sheets, sample kits, and slab pricing by volume.
              We're building toward our first export shipments, targeted for
              March 2027.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/bulk-supply"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 font-body font-medium text-forest-dark transition-colors hover:bg-gold-light"
              >
                View Bulk Supply
              </Link>
              <Link
                href="/request-sample"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/30 px-6 py-3 font-body font-medium text-ivory transition-colors hover:bg-ivory/10"
              >
                Request a Sample
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
            {[
              { icon: Leaf, label: "Own cultivation" },
              { icon: Droplets, label: "In-house distillation" },
              { icon: ShieldCheck, label: "Batch traceability" },
              { icon: Ship, label: "Export target: Mar 2027" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-ivory/15 p-5"
              >
                <item.icon className="h-5 w-5 text-gold-light" strokeWidth={1.5} />
                <p className="mt-3 font-body text-sm text-ivory/85">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TRUST / WHY BUYERS CHOOSE US                                      */}
      {/* Note: real testimonials and certifications are not yet in hand —  */}
      {/* this section states only what's factually true today. Swap in    */}
      {/* actual buyer quotes and certification logos as they're secured,  */}
      {/* rather than inventing either.                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">
          Why buyers work with us directly
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          <div className="border-t border-forest/15 pt-5">
            <h3 className="font-display text-lg text-forest">
              One farm, full accountability
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              Vinod Kumar Yadav brings 10+ years of hands-on experience across
              the full essential-oil chain, from agriculture through to
              production — the operational depth most new suppliers don't
              have yet.
            </p>
          </div>
          <div className="border-t border-forest/15 pt-5">
            <h3 className="font-display text-lg text-forest">
              Direct from producer, not a reseller
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              Cultivation, distillation, and packaging all happen under one
              roof in Lucknow — fewer hands between harvest and your order.
            </p>
          </div>
          <div className="border-t border-forest/15 pt-5">
            <h3 className="font-display text-lg text-forest">
              Built for external, cosmetic-grade use
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              Every label is clearly marked for external use, with honest
              batch and manufacturer details — no unverifiable claims.
            </p>
          </div>
          <div className="border-t border-forest/15 pt-5">
            <h3 className="font-display text-lg text-forest">
              Growing toward export
            </h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              We're actively preparing our lemongrass, tulsi, chamomile, and
              vetiver lines for international buyers, targeted for March
              2027.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CONTACT CTA                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-forest/10 bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl text-forest sm:text-3xl">
              Let's talk about your requirement.
            </h2>
            <p className="mt-2 font-body text-ink/70">
              Reach us directly — {company.phoneDisplay} or{" "}
              <a href={`mailto:${company.email}`} className="underline hover:text-forest">
                {company.email}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${company.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-forest px-6 py-3 font-body font-medium text-ivory transition-colors hover:bg-forest-dark"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-forest/30 px-6 py-3 font-body font-medium text-forest transition-colors hover:border-forest hover:bg-forest/5"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
