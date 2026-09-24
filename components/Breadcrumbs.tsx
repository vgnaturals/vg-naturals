import Link from "next/link";
import { company } from "@/lib/site-data";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...trail];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${company.url}${c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-forest/10 bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-6 py-3 font-body text-xs text-ink/60 lg:px-8">
        {full.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-ink/30">/</span>}
            {i === full.length - 1 ? (
              <span className="text-forest">{c.name}</span>
            ) : (
              <Link href={c.href} className="hover:text-forest">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
