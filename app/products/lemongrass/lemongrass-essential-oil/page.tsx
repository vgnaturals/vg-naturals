import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductBySlug } from "@/lib/site-data";

const product = getProductBySlug("lemongrass", "lemongrass-essential-oil")!;

export const metadata: Metadata = {
  title: product.seoTitle,
  description: product.seoDescription,
};

export default function Page() {
  return <ProductDetailTemplate product={product} />;
}
