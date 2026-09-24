"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { botanicalCategories, getProductsByBotanical, company } from "@/lib/site-data";

const primaryLinks = [
  { name: "Industries", href: "/industries" },
  { name: "Bulk Supply", href: "/bulk-supply" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="VG Naturals — home">
          <Image
            src="/logo.png"
            alt="VG Naturals Pvt Ltd logo"
            width={52}
            height={52}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-forest">{company.headerName}</span>
            <span className="font-body text-[11px] tracking-wide text-ink/55">
              {company.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <Link href="/" className="font-body text-[15px] text-ink hover:text-forest">
            Home
          </Link>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="flex items-center gap-1 font-body text-[15px] text-ink hover:text-forest"
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className="h-4 w-4" strokeWidth={1.75} />
            </Link>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 rounded-sm border border-forest/10 bg-white p-6 shadow-lg shadow-forest/5">
                  {botanicalCategories.map((cat) => (
                    <div key={cat.key}>
                      <Link
                        href={cat.href}
                        className="font-display text-base text-forest hover:text-gold"
                      >
                        {cat.name}
                      </Link>
                      <ul className="mt-2 space-y-1.5">
                        {getProductsByBotanical(cat.key).map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={item.href}
                              className="font-body text-sm text-ink/70 hover:text-forest"
                            >
                              {item.shortName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[15px] text-ink hover:text-forest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/catalogue" className="font-body text-[15px] text-ink hover:text-forest">
            Catalogue
          </Link>
          <Link
            href="/request-quote"
            className="rounded-sm bg-forest px-5 py-2.5 font-body text-[15px] font-medium text-ivory transition-colors hover:bg-forest-dark"
          >
            Request Bulk Quote
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-forest" strokeWidth={1.75} />
          ) : (
            <Menu className="h-6 w-6 text-forest" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-forest/10 bg-ivory px-6 py-6 lg:hidden">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className="block py-2 font-body text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Products accordion */}
            <li>
              <button
                className="flex w-full items-center justify-between py-2 font-body text-ink"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                aria-expanded={mobileProductsOpen}
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.75}
                />
              </button>
              {mobileProductsOpen && (
                <div className="mb-2 space-y-4 border-l border-forest/15 pl-4">
                  <Link
                    href="/products"
                    className="block font-body text-sm font-medium text-forest"
                    onClick={() => setMobileOpen(false)}
                  >
                    All Products
                  </Link>
                  {botanicalCategories.map((cat) => (
                    <div key={cat.key}>
                      <Link
                        href={cat.href}
                        className="block font-display text-base text-forest"
                        onClick={() => setMobileOpen(false)}
                      >
                        {cat.name}
                      </Link>
                      <ul className="mt-1.5 space-y-1.5">
                        {getProductsByBotanical(cat.key).map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={item.href}
                              className="block font-body text-sm text-ink/70"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.shortName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 font-body text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/catalogue"
                className="block py-2 font-body text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                href="/request-sample"
                className="block py-2 font-body text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Request a Sample
              </Link>
            </li>
          </ul>

          <Link
            href="/request-quote"
            className="mt-5 block rounded-sm bg-forest px-5 py-3 text-center font-body font-medium text-ivory"
            onClick={() => setMobileOpen(false)}
          >
            Request Bulk Quote
          </Link>
        </div>
      )}
    </header>
  );
}
