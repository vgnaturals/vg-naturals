import type { Metadata } from "next";
import ProductFamilyTemplate from "@/components/ProductFamilyTemplate";

export const metadata: Metadata = {
  title: "Tulsi Essential Oil, Hydrosol & Air Freshener Supplier | VG Naturals",
  description:
    "Farm-grown, steam-distilled Tulsi Essential Oil, Hydrosol, and Air Freshener from VG Naturals, Lucknow. Sample sizes 50ml & 100ml, bulk enquiries welcome.",
};

export default function Page() {
  return (
    <ProductFamilyTemplate
      family="tulsi"
      familyLabel="Tulsi"
      intro="Tulsi (holy basil) is our second founding crop, cultivated on our own farm. From the same steam distillation, we produce a pure essential oil and a natural hydrosol — and a concentrated hydrosol blend formulated as an air freshener."
    />
  );
}
