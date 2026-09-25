import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact VG Naturals",
  description:
    "Contact VG Naturals Private Limited — Lucknow, Uttar Pradesh. Phone, email, WhatsApp, and enquiry form for bulk and sample orders.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Contact", href: "/contact" }]} />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <h1 className="font-display text-3xl text-forest sm:text-4xl">
            Contact VG Naturals
          </h1>
          <p className="mt-4 font-body text-ink/75">
            {company.legalName}
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
              <span className="font-body text-sm text-ink/80">{company.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
              <a href={`tel:${company.phone}`} className="font-body text-sm text-ink/80 hover:text-forest">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
              <a href={`mailto:${company.email}`} className="font-body text-sm text-ink/80 hover:text-forest">
                {company.email}
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-2 rounded-sm border border-forest/30 px-5 py-2.5 font-body text-sm text-forest hover:bg-forest/5"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} /> Call
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-sm border border-forest/30 px-5 py-2.5 font-body text-sm text-forest hover:bg-forest/5"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} /> Email
            </a>
            <a
              href={`https://wa.me/${company.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-forest px-5 py-2.5 font-body text-sm text-ivory hover:bg-forest-dark"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> WhatsApp
            </a>
          </div>

          <p className="mt-6 font-body text-xs text-ink/45">
            <a
              href="https://www.google.com/maps/search/?api=1&query=1248+Royal+City+Phase+2%2C+Aurangabad+Jagir%2C+B+R+A+University%2C+Lucknow%2C+Uttar+Pradesh+226025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline hover:text-gold"
            >
              View on Google Maps →
            </a>
          </p>
        </div>

        <div className="rounded-sm border border-forest/15 bg-white p-6 lg:p-8">
          <h2 className="font-display text-lg text-forest">Send a message</h2>
          <div className="mt-5">
            <EnquiryForm formType="general" />
          </div>
        </div>
      </section>

      {/* Map — free, no API key required (output=embed works without billing) */}
      <section className="mx-auto max-w-6xl px-6 pb-14 lg:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-sm border border-forest/15">
          <iframe
            src="https://www.google.com/maps?q=1248+Royal+City+Phase+2%2C+Aurangabad+Jagir%2C+B+R+A+University%2C+Lucknow%2C+Uttar+Pradesh+226025&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VG Naturals location on Google Maps"
          />
        </div>
      </section>
    </>
  );
}
