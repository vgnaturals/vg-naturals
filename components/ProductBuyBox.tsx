"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";
import { company } from "@/lib/site-data";

type Size = "50ml" | "100ml";

type ProductBuyBoxProps = {
  productName: string;
  price50ml: number;
  price100ml: number;
};

export default function ProductBuyBox({
  productName,
  price50ml,
  price100ml,
}: ProductBuyBoxProps) {
  const [size, setSize] = useState<Size>("50ml");

  const price = size === "50ml" ? price50ml : price100ml;

  const message = `Hi, I'd like to order ${productName} - ${size} (₹${price}). Please confirm availability and payment details.`;
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  const sizes: { value: Size; price: number }[] = [
    { value: "50ml", price: price50ml },
    { value: "100ml", price: price100ml },
  ];

  return (
    <div className="rounded-sm border border-forest/15 bg-white p-6">
      {/* Size selector + live price */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="radiogroup"
          aria-label={`Select size for ${productName}`}
          className="flex gap-2"
        >
          {sizes.map((option) => {
            const active = size === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSize(option.value)}
                className={`rounded-full border px-5 py-2 font-body text-sm font-medium transition-colors ${
                  active
                    ? "border-forest bg-forest text-ivory"
                    : "border-forest/25 text-forest hover:border-forest hover:bg-forest/5"
                }`}
              >
                {option.value}
              </button>
            );
          })}
        </div>

        <div className="text-right">
          <p className="font-body text-xs uppercase tracking-wide text-ink/50">
            Price
          </p>
          <p className="font-display text-2xl text-forest">₹{price}</p>
        </div>
      </div>

      {/* Sample order — WhatsApp enquiry */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-forest px-6 py-3.5 font-body font-medium text-ivory transition-colors hover:bg-forest-dark"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2} />
        Buy via WhatsApp
      </a>
      <p className="mt-2 font-body text-xs text-ink/55">
        Sends a WhatsApp enquiry for a sample-size order. Payment is arranged
        directly over chat — nothing is charged on this site.
      </p>

      {/* Divider */}
      <div className="my-6 border-t border-forest/10" />

      {/* Bulk / wholesale — deliberately separated */}
      <div className="rounded-sm bg-cream p-4">
        <p className="font-body text-sm font-medium text-forest">
          Buying in bulk or for wholesale?
        </p>
        <p className="mt-1 font-body text-xs text-ink/60">
          For larger quantities, private label, or export volumes, request a
          formal quote instead of a sample order.
        </p>
        <Link
          href="/request-quote"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm border border-gold bg-gold/10 px-6 py-3 font-body font-medium text-forest-dark transition-colors hover:bg-gold/20"
        >
          <FileText className="h-4 w-4" strokeWidth={2} />
          Request Bulk Quote
        </Link>
      </div>
    </div>
  );
}
