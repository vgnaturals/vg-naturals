import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { products } from "@/lib/site-data";
import { Sprout, Flame, ShieldCheck, Ship } from "lucide-react";

export const metadata: Metadata = {
  title: "Bulk Essential Oils, Hydrosols & Botanical Air Fresheners | VG Naturals",
  description:
    "VG Naturals supplies bulk Lemongrass and Tulsi essential oils, hydrosols, and air fresheners for manufacturers, distributors, and private-label brands.",
};

const steps = [
  "Tell us your requirement",
  "Request a sample",
  "Evaluate the product",
  "Discuss quantity and packaging",
  "Receive a bulk quotation",
  "Proceed with supply",
];

export default function BulkSupplyPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Bulk Supply", href: "/bulk-supply" }]} />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
        <h1 className="font-display text-3xl text-forest sm:text-4xl">
          Bulk Essential Oils, Hydrosols &amp; Botanical Air Fresheners
        </h1>
        <p className="mt-4 max-w-2xl font-body text-ink/75">
          We supply wholesale buyers, private-label brands, and distributors
          with sample evaluation, product specifications, and
          requirement-based quotations.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Sprout, label: "Own cultivation" },
            { icon: Flame, label: "In-house distillation" },
            { icon: ShieldCheck, label: "Batch traceability" },
            { icon: Ship, label: "Export target: Mar 2027" },
          ].map((item) => (
            <div key={item.label} className="rounded-sm border border-forest/10 bg-cream p-4">
              <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <p className="mt-2 font-body text-xs text-ink/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-forest/10 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="font-display text-2xl text-forest">Our process</h2>
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 sm:flex-col sm:items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm text-ivory">
                  {i + 1}
                </span>
                <span className="font-body text-sm text-ink/75 sm:mt-2">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <h2 className="font-display text-2xl text-forest">
          Product specifications
        </h2>
        <p className="mt-2 font-body text-sm text-ink/60">
          Request a specification sheet for any product below — bulk pricing
          is quoted per your required volume.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-body text-sm">
            <thead>
              <tr className="border-b border-forest/20 text-left text-ink/60">
                <th className="py-3 pr-4">Product</th>
                <th className="py-3 pr-4">Sample sizes</th>
                <th className="py-3">Spec sheet</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.slug} className="border-b border-forest/10">
                  <td className="py-3 pr-4 text-forest">{p.name}</td>
                  <td className="py-3 pr-4 text-ink/70">
                    {p.sizes.map((s) => `${s.label} (₹${s.price})`).join(" · ")}
                  </td>
                  <td className="py-3">
                    <Link
                      href="/request-quote"
                      className="text-forest underline underline-offset-4"
                    >
                      Request Spec Sheet
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-forest/10 bg-cream">
        <div className="mx-auto max-w-2xl px-6 py-14 lg:px-8">
          <h2 className="font-display text-2xl text-forest">
            Request a Bulk Quote
          </h2>
          <div className="mt-8">
            <EnquiryForm formType="quote" />
          </div>
        </div>
      </section>
    </>
  );
}
