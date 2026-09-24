import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Request a Product Sample | VG Naturals",
  description:
    "Request a 50ml or 100ml sample of any VG Naturals essential oil, hydrosol, or air freshener before placing a bulk order.",
};

export default function RequestSamplePage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Request a Sample", href: "/request-sample" }]} />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <h1 className="font-display text-3xl text-forest sm:text-4xl">
            Request a Product Sample
          </h1>
          <p className="mt-4 font-body text-ink/75">
            Evaluate our quality before committing to a bulk order. Samples
            are available in 50ml and 100ml across all six products.
          </p>

          <div className="mt-8 space-y-3">
            {products.map((p) => (
              <div
                key={p.slug}
                className="flex items-center justify-between rounded-sm border border-forest/10 bg-white px-4 py-3"
              >
                <p className="font-body text-sm text-forest">{p.name}</p>
                <p className="font-body text-xs text-ink/60">
                  {p.sizes.map((s) => `${s.label} — ₹${s.price}`).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm border border-forest/15 bg-white p-6 lg:p-8">
          <EnquiryForm formType="sample" />
        </div>
      </section>
    </>
  );
}
