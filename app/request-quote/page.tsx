import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Request a Bulk Quote | VG Naturals",
  description:
    "Request bulk pricing for VG Naturals Lemongrass or Tulsi essential oil, hydrosol, or air freshener. Share your product, volume, and intended use.",
};

export default function RequestQuotePage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Request Bulk Quote", href: "/request-quote" }]} />

      <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8 lg:py-20">
        <p className="font-body text-sm font-medium text-gold">
          Our primary business — B2B supply
        </p>
        <h1 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
          Request a Bulk Quote
        </h1>
        <p className="mt-4 font-body text-ink/75">
          Tell us your product, required quantity, and intended use — we'll
          respond with specifications and pricing based on your volume.
        </p>

        <div className="mt-10 rounded-sm border border-forest/15 bg-white p-6 lg:p-8">
          <EnquiryForm formType="quote" />
        </div>

        <p className="mt-8 font-body text-sm text-ink/60">
          Prefer to talk directly? Call {company.phoneDisplay} or email{" "}
          <a href={`mailto:${company.email}`} className="underline hover:text-forest">
            {company.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
