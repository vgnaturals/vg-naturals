"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";
import { company, type Size } from "@/lib/site-data";

export default function ProductBuyBox({
  productName,
  sizes,
}: {
  productName: string;
  sizes: Size[];
}) {
  const [selected, setSelected] = useState(0);
  const size = sizes[selected];

  const message = `Hi, I'd like to order ${productName} - ${size.label} (₹${size.price}). Please confirm availability and payment details.`;
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="rounded-sm border border-forest/15 bg-white p-6">
      <p className="font-body text-sm font-medium text-ink/70">Sample Size</p>
      <div className="mt-3 flex gap-3">
        {sizes.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setSelected(i)}
            className={`rounded-full border px-5 py-2 font-body text-sm transition-colors ${
              i === selected
                ? "border-forest bg-forest text-ivory"
                : "border-forest/25 text-ink hover:border-forest/50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className="mt-4 font-display text-3xl text-forest">
        ₹{size.price}
        <span className="ml-1 font-body text-sm text-ink/50">
          / {size.label}
        </span>
      </p>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-forest px-6 py-3.5 font-body font-medium text-ivory transition-colors hover:bg-forest-dark"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2} />
        Buy via WhatsApp
      </a>
      <p className="mt-2 text-center font-body text-xs text-ink/45">
        Opens WhatsApp with your order pre-filled. Payment is confirmed
        directly with us after — not processed on this site.
      </p>

      <div className="mt-5 border-t border-forest/10 pt-5">
        <p className="font-body text-sm text-ink/70">
          Ordering in volume for manufacturing or private label?
        </p>
        <Link
          href="/request-quote"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-sm border border-gold/60 px-6 py-3 font-body font-medium text-forest transition-colors hover:bg-gold/10"
        >
          <FileText className="h-4 w-4" strokeWidth={2} />
          Request Bulk Quote
        </Link>
        <p className="mt-2 text-center font-body text-xs text-ink/45">
          Contact us for bulk pricing — quoted per your required volume.
        </p>
      </div>
    </div>
  );
}
