import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Leaf } from "lucide-react";
import { company, productCategories } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory">
      {/* B2B CTA band */}
      <div className="border-b border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl italic text-ivory">
              Sourcing essential oils or hydrosols in bulk?
            </h2>
            <p className="mt-2 max-w-md font-body text-sm text-ivory/70">
              Wholesale, private label, and export enquiries — get specification
              sheets and pricing within one business day.
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

      {/* Main footer grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-gold" strokeWidth={1.75} />
            <span className="font-display text-lg italic text-ivory">
              {company.brand}
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
            {productCategories.map((cat) => (
              <li key={cat.name}>
                <Link
                  href={cat.href}
                  className="font-body text-sm text-ivory/70 hover:text-gold"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold text-ivory">
            Business
          </h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-ivory/70">
            <li><Link href="/bulk-supply" className="hover:text-gold">Bulk Supply</Link></li>
            <li><Link href="/industries" className="hover:text-gold">Industries We Serve</Link></li>
            <li><Link href="/request-sample" className="hover:text-gold">Request a Sample</Link></li>
            <li><Link href="/catalogue" className="hover:text-gold">Download Catalogue</Link></li>
            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
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
            {company.social.linkedin && (
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VG Naturals on LinkedIn"
                className="text-ivory/70 hover:text-gold"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-6 text-center font-body text-xs text-ivory/50 lg:px-8">
        © {new Date().getFullYear()} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
