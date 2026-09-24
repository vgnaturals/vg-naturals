import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogTopics } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogTopics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = blogTopics.find((t) => t.slug === params.slug);
  if (!topic) return {};
  return { title: `${topic.title} | VG Naturals Blog`, description: topic.excerpt };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const topic = blogTopics.find((t) => t.slug === params.slug);
  if (!topic) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    author: { "@type": "Organization", name: "VG Naturals" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        trail={[
          { name: "Blog", href: "/blog" },
          { name: topic.title, href: `/blog/${topic.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8 lg:py-20">
        <h1 className="font-display text-3xl text-forest sm:text-4xl">
          {topic.title}
        </h1>
        <div className="mt-8 rounded-sm border border-dashed border-gold/50 bg-gold/5 p-6">
          <p className="font-body text-sm text-ink/70">
            This article is being written and will be published here soon.
          </p>
        </div>
        <Link
          href="/blog"
          className="mt-8 inline-block font-body text-sm text-forest underline underline-offset-4"
        >
          ← Back to Blog
        </Link>
      </article>
    </>
  );
}
