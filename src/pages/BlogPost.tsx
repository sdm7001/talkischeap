import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { getPost, BLOG_POSTS } from "@/data/blog";
import { SITE_URL } from "@/data/site";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug ?? "");
  if (!post) return <Navigate to="/blog" replace />;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Talk Is Cheap", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Talk Is Cheap", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO
        jsonLd={[
          articleLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="container pt-36 pb-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-5">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{post.category}</span>
              <time dateTime={post.date}>
                {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readMinutes} min read
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-10">{post.title}</h1>
          </ScrollReveal>

          <div className="space-y-6">
            {post.blocks.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} className="font-display text-2xl font-bold pt-6">
                    {block.text}
                  </h2>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.items?.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary shrink-0 mt-1">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      <section className="container pb-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-xl font-bold mb-6">Keep reading</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="glass rounded-xl p-6 card-hover block">
                <p className="text-xs text-primary font-medium mb-2">{p.category}</p>
                <h3 className="font-display font-semibold leading-snug">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
