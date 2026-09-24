"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { company, products } from "@/lib/site-data";

type FormType = "sample" | "quote" | "general";

const productOptions = products.map((p) => p.name);

export default function EnquiryForm({ formType }: { formType: FormType }) {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines: string[] = [];

    if (formType === "sample") {
      lines.push("Hi, I'd like to request a sample.");
      if (fields.product) lines.push(`Product: ${fields.product}`);
      if (fields.size) lines.push(`Size: ${fields.size}`);
      if (fields.quantity) lines.push(`Quantity: ${fields.quantity}`);
      if (fields.name) lines.push(`Name: ${fields.name}`);
      if (fields.company) lines.push(`Company: ${fields.company}`);
      if (fields.city) lines.push(`Delivery City: ${fields.city}`);
      if (fields.message) lines.push(`Note: ${fields.message}`);
    } else if (formType === "quote") {
      lines.push("Hi, I'd like to request a bulk quote.");
      if (fields.product) lines.push(`Product: ${fields.product}`);
      if (fields.quantity) lines.push(`Required Quantity: ${fields.quantity}`);
      if (fields.packaging) lines.push(`Preferred Packaging: ${fields.packaging}`);
      if (fields.use) lines.push(`Intended Use: ${fields.use}`);
      if (fields.city) lines.push(`Delivery Location: ${fields.city}`);
      if (fields.name) lines.push(`Name: ${fields.name}`);
      if (fields.company) lines.push(`Company: ${fields.company}`);
      if (fields.email) lines.push(`Email: ${fields.email}`);
      if (fields.message) lines.push(`Note: ${fields.message}`);
    } else {
      lines.push("Hi, I have a question for VG Naturals.");
      if (fields.name) lines.push(`Name: ${fields.name}`);
      if (fields.email) lines.push(`Email: ${fields.email}`);
      if (fields.message) lines.push(`Message: ${fields.message}`);
    }

    const href = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-sm border border-forest/20 bg-white px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink/35 focus:border-forest";
  const labelClass = "mb-1.5 block font-body text-sm font-medium text-ink/80";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {formType !== "general" && (
        <div>
          <label className={labelClass}>Product{formType === "quote" ? " *" : ""}</label>
          <select
            className={inputClass}
            required={formType === "quote"}
            onChange={update("product")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a product
            </option>
            {productOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}

      {formType === "sample" && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Size</label>
            <select className={inputClass} onChange={update("size")} defaultValue="">
              <option value="" disabled>Select size</option>
              <option value="50ml">50ml</option>
              <option value="100ml">100ml</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Quantity</label>
            <input className={inputClass} onChange={update("quantity")} placeholder="e.g. 2 bottles" />
          </div>
        </div>
      )}

      {formType === "quote" && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Required Quantity</label>
              <input className={inputClass} onChange={update("quantity")} placeholder="e.g. 20 litres/month" />
            </div>
            <div>
              <label className={labelClass}>Preferred Packaging</label>
              <input className={inputClass} onChange={update("packaging")} placeholder="e.g. 1L bottles" />
            </div>
          </div>
          <div>
            <label className={labelClass}>Application / Intended Use</label>
            <input className={inputClass} onChange={update("use")} placeholder="e.g. soap making, cosmetic formulation" />
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name *</label>
          <input className={inputClass} required onChange={update("name")} />
        </div>
        {formType !== "general" && (
          <div>
            <label className={labelClass}>Company Name</label>
            <input className={inputClass} onChange={update("company")} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {formType === "quote" && (
          <div>
            <label className={labelClass}>Business Email *</label>
            <input type="email" className={inputClass} required onChange={update("email")} />
          </div>
        )}
        {formType === "general" && (
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" className={inputClass} onChange={update("email")} />
          </div>
        )}
        {formType !== "general" && (
          <div>
            <label className={labelClass}>Delivery {formType === "quote" ? "Location" : "City"}</label>
            <input className={inputClass} onChange={update("city")} />
          </div>
        )}
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea className={inputClass} rows={3} onChange={update("message")} />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-forest px-6 py-3.5 font-body font-medium text-ivory transition-colors hover:bg-forest-dark sm:w-auto"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2} />
        {formType === "sample"
          ? "Request Sample"
          : formType === "quote"
          ? "Request Bulk Quote"
          : "Send Message"}
      </button>
      <p className="font-body text-xs text-ink/45">
        This opens WhatsApp with your details pre-filled — we don't process
        anything automatically on our end yet.
      </p>
      {sent && (
        <p className="font-body text-sm text-forest">
          If WhatsApp didn't open, message us directly at {company.phoneDisplay}.
        </p>
      )}
    </form>
  );
}
