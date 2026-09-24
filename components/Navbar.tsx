"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { productNav, company } from "@/lib/site-data";

const primaryLinks = [
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Bulk Supply", href: "/bulk-supply" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo — real uploaded artwork, unmodified */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/brand/logo.png"
            alt="VG Naturals Pvt Ltd logo"
            width={48}
            height={48}
            className="h-11 w-11 lg:h-12 lg:w-12"
            priority
          />
          <span className="font-display text-lg leading-tight text-forest lg:text-xl">
            {company.brandWithSuffix}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
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
              <div className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 rounded-sm border border-forest/10 bg-white p-6 shadow-lg shadow-forest/5">
                  {productNav.map((cat) => (
                    <div key={cat.name}>
                      <Link
                        href={cat.href}
                        className="font-display text-base text-forest hover:text-gold"
                      >
                        {cat.name}
                      </Link>
                      <ul className="mt-2 space-y-1.5">
                        {cat.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-sm text-ink/70 hover:text-forest"
                            >
                              {item.name}
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

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/catalogue"
            className="font-body text-[15px] text-ink hover:text-forest"
          >
            Catalogue
          </Link>
          <Link
            href="/request-quote"
            className="rounded-sm bg-forest px-5 py-2.5 font-body text-[15px] font-medium text-ivory transition-colors hover:bg-forest-dark"
          >
            Request Bulk Quote
          </Link>
        </div>

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

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-forest/10 bg-ivory px-6 py-6 lg:hidden">
          <p className="mb-2 font-display text-sm text-forest">Products</p>
          <ul className="mb-6 space-y-3 pl-2">
            {productNav.map((cat) => (
              <li key={cat.name}>
                <Link
                  href={cat.href}
                  className="font-body font-medium text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
                <ul className="mt-1.5 space-y-1.5 pl-3">
                  {cat.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/catalogue"
                className="font-body text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Catalogue
              </Link>
            </li>
          </ul>

          <Link
            href="/request-quote"
            className="mt-6 block rounded-sm bg-forest px-5 py-3 text-center font-body font-medium text-ivory"
            onClick={() => setMobileOpen(false)}
          >
            Request Bulk Quote
          </Link>
        </div>
      )}
    </header>
  );
}
