import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { getIndustry, INDUSTRIES } from "@/data/industries";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustry(slug ?? "");
  if (!industry) return <Navigate to="/industries" replace />;

  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <SEO
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container relative">
          <ScrollReveal className="max-w-3xl">
            <span className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-primary mb-8 glow-cyan">
              <industry.icon className="w-8 h-8" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">{industry.name}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">{industry.headline}</h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">{industry.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <ScrollReveal className="lg:col-span-2">
            <div className="glass rounded-2xl p-7 h-full border-red-500/20">
              <h2 className="font-display text-lg font-semibold mb-5 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" /> Sound familiar?
              </h2>
              <ul className="space-y-4">
                {industry.painPoints.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                    <span className="text-red-400 shrink-0">✕</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {industry.solutions.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <article className="glass rounded-2xl p-6 card-hover h-full">
                  <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Other industries we speak fluently</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {others.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 100}>
              <Link to={`/industries/${ind.slug}`} className="group block glass rounded-2xl p-6 card-hover h-full">
                <ind.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-1">{ind.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{ind.headline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
