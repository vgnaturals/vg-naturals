import Link from "next/link";
import { Home, Package, MessageSquareText, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
      <p className="font-body text-sm font-medium text-gold">404</p>
      <h1 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 font-body text-ink/70">
        The page you&apos;re looking for may have moved or may not be
        available yet.
      </p>

      <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-sm border border-forest/20 px-5 py-3 font-body text-sm text-forest hover:bg-forest/5"
        >
          <Home className="h-4 w-4" strokeWidth={1.75} />
          Back to Home
        </Link>
        <Link
          href="/products"
          className="flex items-center justify-center gap-2 rounded-sm border border-forest/20 px-5 py-3 font-body text-sm text-forest hover:bg-forest/5"
        >
          <Package className="h-4 w-4" strokeWidth={1.75} />
          Explore Products
        </Link>
        <Link
          href="/request-quote"
          className="flex items-center justify-center gap-2 rounded-sm bg-forest px-5 py-3 font-body text-sm text-ivory hover:bg-forest-dark"
        >
          <MessageSquareText className="h-4 w-4" strokeWidth={1.75} />
          Request Bulk Quote
        </Link>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-sm border border-forest/20 px-5 py-3 font-body text-sm text-forest hover:bg-forest/5"
        >
          <Phone className="h-4 w-4" strokeWidth={1.75} />
          Contact Us
        </Link>
      </div>
    </section>
  );
}
