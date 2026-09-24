import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { industries } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries We Serve | VG Naturals",
  description:
    "VG Naturals supplies Lemongrass and Tulsi essential oils, hydrosols, and air fresheners to cosmetics, personal care, aromatherapy, soap, fragrance, and private-label businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Industries", href: "/industries" }]} />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
        <h1 className="font-display text-3xl text-forest sm:text-4xl">
          Industries We Serve
        </h1>
        <p className="mt-4 max-w-2xl font-body text-ink/75">
          Our essential oils, hydrosols, and air fresheners fit into a
          range of business applications. Here's how each industry
          typically uses our products.
        </p>

        <div className="mt-12 space-y-8">
          {industries.map((ind) => (
            <div key={ind.name} className="border-t border-forest/10 pt-6">
              <h2 className="font-display text-xl text-forest">{ind.name}</h2>
              <p className="mt-2 max-w-2xl font-body text-sm text-ink/70">
                {ind.blurb}
              </p>
              <Link
                href="/request-quote"
                className="mt-3 inline-block font-body text-sm text-forest underline underline-offset-4"
              >
                Discuss Your Requirement
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
