import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, SITE_NAME } from "@/data/site";
import { FEATURES } from "@/data/features";
import { INDUSTRIES } from "@/data/industries";
import { BLOG_POSTS } from "@/data/blog";

interface PageMeta {
  title: string;
  description: string;
}

const PAGE_SEO: Record<string, PageMeta> = {
  "/": {
    title: "Cheap Business Phone System | UCaaS from $14.99/mo | Talk Is Cheap",
    description:
      "All-in-one cloud phone, SMS, video, and AI receptionist for small business. Plans from $14.99/user/month. No contracts, no setup fees.",
  },
  "/features": {
    title: "Features — Everything Your Business Uses to Talk | Talk Is Cheap",
    description:
      "Explore the full Talk Is Cheap UCaaS platform: cloud voice, unified messaging, video meetings, AI receptionist, contact center, integrations, and analytics.",
  },
  "/pricing": {
    title: "Pricing — UCaaS From $14.99/User/Month | Talk Is Cheap",
    description:
      "Straight Talk $14.99, Real Talk $29.99, Big Talk $44.99 per user/month. Unlimited calling, texting, video, and AI. No setup fees, no porting fees, no contracts on monthly plans.",
  },
  "/industries": {
    title: "Industries — UCaaS Built for How Your Business Talks | Talk Is Cheap",
    description:
      "Purpose-built communications for healthcare, legal, real estate, and home services: PMS/CRM sync, missed-call rescue, AI answering, and compliance-ready messaging.",
  },
  "/about": {
    title: "About Talk Is Cheap — Why We Made Enterprise Communications Cheap",
    description:
      "Talk Is Cheap was founded on a simple grievance: business communications are wildly overpriced. Carrier-grade platform, honest pricing, humans on support.",
  },
  "/contact": {
    title: "Contact Talk Is Cheap — Talk to a Human (It's Cheap, After All)",
    description:
      "Questions about plans, porting, or a demo? Reach the Talk Is Cheap team by phone, text, or email. US-based humans, no phone tree irony.",
  },
  "/faq": {
    title: "FAQ — Pricing, Porting, HIPAA, Reliability & More | Talk Is Cheap",
    description:
      "Answers to common questions about the Talk Is Cheap UCaaS platform: what it costs, keeping your number, uptime, HIPAA compliance, AI receptionist, and integrations.",
  },
  "/blog": {
    title: "Blog — UCaaS Guides & Straight Answers | Talk Is Cheap",
    description:
      "Plain-English guides to business communications: what UCaaS costs, UCaaS vs VoIP, AI receptionists, and how to buy a phone system without getting fleeced.",
  },
  "/privacy": {
    title: "Privacy Policy | Talk Is Cheap",
    description: "How Talk Is Cheap collects, uses, and protects your information.",
  },
  "/terms": {
    title: "Terms of Service | Talk Is Cheap",
    description: "Terms of service for the Talk Is Cheap platform and website.",
  },
};

for (const f of FEATURES) {
  PAGE_SEO[`/features/${f.slug}`] = { title: f.metaTitle, description: f.metaDescription };
}
for (const i of INDUSTRIES) {
  PAGE_SEO[`/industries/${i.slug}`] = { title: i.metaTitle, description: i.metaDescription };
}
for (const p of BLOG_POSTS) {
  PAGE_SEO[`/blog/${p.slug}`] = { title: `${p.title} | Talk Is Cheap`, description: p.description };
}

const DEFAULT_META: PageMeta = {
  title: "Cheap Business Phone System | UCaaS from $14.99/mo | Talk Is Cheap",
  description:
    "All-in-one cloud phone, SMS, video, and AI receptionist for small business. Plans from $14.99/user/month. No contracts, no setup fees.",
};

/** Upsert a <meta> tag identified by name= or property=. */
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const ROUTE_LD_CLASS = "route-jsonld";

interface SEOProps {
  path?: string;
  /** Extra JSON-LD objects to inject for this page (FAQPage, Article, Product, etc.) */
  jsonLd?: object | object[];
}

export function SEO({ path, jsonLd }: SEOProps) {
  const location = useLocation();
  const currentPath = path ?? location.pathname;

  useEffect(() => {
    const meta = PAGE_SEO[currentPath] ?? DEFAULT_META;
    const canonical = `${SITE_URL}${currentPath === "/" ? "/" : currentPath}`;
    const isArticle = currentPath.startsWith("/blog/");

    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", isArticle ? "article" : "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", `${SITE_URL}/og-image.png`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // Replace route-scoped JSON-LD blocks (the static @graph block in index.html is untouched)
    document.head.querySelectorAll(`script.${ROUTE_LD_CLASS}`).forEach((el) => el.remove());
    const ldBlocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    for (const block of ldBlocks) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.className = ROUTE_LD_CLASS;
      script.textContent = JSON.stringify(block);
      document.head.appendChild(script);
    }
    // jsonLd is compared via stringify to keep the dep array stable across re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath, JSON.stringify(jsonLd ?? null)]);

  return null;
}

/** BreadcrumbList JSON-LD helper */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
