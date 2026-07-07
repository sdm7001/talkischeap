import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTASection } from "@/components/CTASection";
import { getFeature, FEATURES } from "@/data/features";

export default function FeatureDetail() {
  const { slug } = useParams();
  const feature = getFeature(slug ?? "");
  if (!feature) return <Navigate to="/features" replace />;

  const others = FEATURES.filter((f) => f.slug !== feature.slug).slice(0, 3);

  return (
    <>
      <SEO
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: feature.name, path: `/features/${feature.slug}` },
        ])}
      />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container relative">
          <ScrollReveal className="max-w-3xl">
            <span className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-primary mb-8 glow-cyan">
              <feature.icon className="w-8 h-8" />
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              {feature.name}
              <span className="block text-gradient mt-2 text-2xl md:text-4xl">{feature.tagline}</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">{feature.intro}</p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl">
            {feature.stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="glass rounded-xl p-5 text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-gradient">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {feature.sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={(i % 2) * 120}>
              <article className="glass rounded-2xl p-7 card-hover h-full">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <h2 className="font-display text-xl font-semibold mb-3">{section.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <ScrollReveal>
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Keep exploring the platform</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {others.map((f, i) => (
            <ScrollReveal key={f.slug} delay={i * 100}>
              <Link to={`/features/${f.slug}`} className="group block glass rounded-2xl p-6 card-hover h-full">
                <f.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-1">{f.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{f.blurb}</p>
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
