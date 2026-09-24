import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Sprout, Scissors, Flame, CheckCircle2, Package, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "About VG Naturals Private Limited",
  description:
    "VG Naturals is an Indian natural and botanical products company based in Lucknow, Uttar Pradesh, focused on Lemongrass and Tulsi essential oils, hydrosols, and botanical air fresheners.",
};

const process = [
  { icon: Sprout, label: "Cultivation" },
  { icon: Scissors, label: "Harvest" },
  { icon: Flame, label: "Steam Distillation" },
  { icon: CheckCircle2, label: "Quality Check" },
  { icon: Package, label: "Packaging" },
  { icon: Truck, label: "Dispatch" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "About", href: "/about" }]} />

      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
        <h1 className="font-display text-3xl text-forest sm:text-4xl">
          About VG Naturals Private Limited
        </h1>
        <p className="mt-6 font-body text-ink/80">
          VG Naturals is an Indian natural and botanical products company
          based in Lucknow, Uttar Pradesh. Our current focus is Lemongrass
          and Tulsi — cultivated on our own farm and steam-distilled into
          essential oils, hydrosols, and botanical air fresheners.
        </p>
        <p className="mt-4 font-body text-ink/80">
          We operate B2B-first: our primary business is supplying cosmetic,
          soap, aromatherapy, and personal-care manufacturers, along with
          distributors and private-label brands. Sample-size retail (50ml
          and 100ml) exists alongside this, mainly so buyers can evaluate
          product quality before a bulk order.
        </p>
        <p className="mt-4 font-body text-ink/80">
          Our approach is built around botanical sourcing, responsible
          growth, and direct, long-term relationships with the businesses
          we supply — rather than scaling into a wide generic catalogue.
        </p>
      </section>

      <section className="border-y border-forest/10 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <h2 className="font-display text-2xl text-forest">
            Farm to Distillation
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {process.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest">
                  <step.icon className="h-5 w-5 text-ivory" strokeWidth={1.75} />
                </div>
                <p className="mt-3 font-body text-xs text-ink/70">{step.label}</p>
                {i < process.length - 1 && (
                  <div className="mt-3 hidden h-px w-full bg-forest/15 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <h2 className="font-display text-2xl text-forest">Directors</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-display text-lg text-forest">Vinod Kumar Yadav</h3>
            <p className="mt-1.5 font-body text-sm text-ink/70">
              10+ years of experience across the essential oil industry, from
              agriculture through to production.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-forest">Gaurav Pandey</h3>
            <p className="mt-1.5 font-body text-sm text-ink/70">Director.</p>
          </div>
        </div>
      </section>
    </>
  );
}
