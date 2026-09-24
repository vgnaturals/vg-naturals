import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { company, productNav } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory">
      <div className="border-b border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl italic text-ivory">
              Sourcing essential oils, hydrosols or air fresheners in bulk?
            </h2>
            <p className="mt-2 max-w-md font-body text-sm text-ivory/70">
              Tell us your requirement — we'll respond with specifications and
              a quote based on your quantity.
            </p>
          </div>
          <Link
            href="/request-quote"
            className="shrink-0 rounded-sm bg-gold px-6 py-3 font-body font-medium text-forest-dark transition-colors hover:bg-gold-light"
          >
            Request Bulk Quote
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/logo.png"
              alt="VG Naturals Pvt Ltd logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-display text-lg text-ivory">
              {company.brandWithSuffix}
            </span>
          </div>
          <p className="mt-3 font-body text-sm text-ivory/60">
            {company.tagline}
          </p>
          <p className="mt-4 font-body text-xs text-ivory/50">
            {company.legalName}
          </p>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold text-ivory">
            Products
          </h3>
          <ul className="mt-4 space-y-2">
            {productNav.map((cat) => (
              <li key={cat.name}>
                <Link
                  href={cat.href}
                  className="font-body text-sm text-ivory/70 hover:text-gold"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="font-body text-sm text-ivory/70 hover:text-gold">
                All Products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold text-ivory">
            Business
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-ivory/70">
            <li><Link href="/industries" className="hover:text-gold">Industries</Link></li>
            <li><Link href="/bulk-supply" className="hover:text-gold">Bulk Supply</Link></li>
            <li><Link href="/request-sample" className="hover:text-gold">Request a Sample</Link></li>
            <li><Link href="/request-quote" className="hover:text-gold">Request Bulk Quote</Link></li>
            <li><Link href="/catalogue" className="hover:text-gold">Catalogue</Link></li>
          </ul>
          <h3 className="mt-5 font-body text-sm font-semibold text-ivory">
            Company
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-ivory/70">
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold text-ivory">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 font-body text-sm text-ivory/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <a href={`tel:${company.phone}`} className="hover:text-gold">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <a href={`mailto:${company.email}`} className="hover:text-gold">
                {company.email}
              </a>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-4">
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VG Naturals on Instagram"
              className="text-ivory/70 hover:text-gold"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.75} />
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VG Naturals on Facebook"
              className="text-ivory/70 hover:text-gold"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.75} />
            </a>
            {/* LinkedIn intentionally omitted until a real URL is confirmed. */}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-6 text-center font-body text-xs text-ivory/50 lg:px-8">
        © {new Date().getFullYear()} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
