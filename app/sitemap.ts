import type { MetadataRoute } from "next";
import { products } from "@/lib/site-data";
import { blogTopics } from "@/lib/blog-data";

const BASE_URL = "https://vgnaturals.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/products/lemongrass",
    "/products/tulsi",
    "/industries",
    "/bulk-supply",
    "/request-sample",
    "/request-quote",
    "/catalogue",
    "/about",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = products
    .filter((p) => p.status === "live")
    .map((p) => ({
      url: `${BASE_URL}/products/${p.family}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const blogRoutes = blogTopics.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
