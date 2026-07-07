import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { BLOG_POSTS } from "@/data/blog";

export default function Blog() {
  return (
    <>
      <SEO jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <section className="container pt-36 pb-16">
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="Straight talk about business communications"
          subtitle="Buyer guides without the vendor spin: what things cost, how they work, and where the fine print bites."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {BLOG_POSTS.map((post, i) => (
            <ScrollReveal key={post.slug} delay={(i % 2) * 120}>
              <Link to={`/blog/${post.slug}`} className="group block glass rounded-2xl p-8 card-hover h-full">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readMinutes} min
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
