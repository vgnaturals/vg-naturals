import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogTopics } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | VG Naturals",
  description:
    "A B2B knowledge centre on essential oils, hydrosols, and sourcing considerations from VG Naturals.",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Blog", href: "/blog" }]} />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
        <h1 className="font-display text-3xl text-forest sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl font-body text-ink/75">
          A knowledge centre for B2B buyers — articles are being written and
          will publish here over time.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {blogTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/blog/${t.slug}`}
              className="group block rounded-sm border border-forest/10 bg-white p-6"
            >
              <h2 className="font-display text-lg text-forest">{t.title}</h2>
              <p className="mt-2 font-body text-sm text-ink/50">{t.excerpt}</p>
              <span className="mt-4 flex items-center gap-1.5 font-body text-sm text-forest">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
