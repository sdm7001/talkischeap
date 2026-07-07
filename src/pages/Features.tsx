import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { FEATURES } from "@/data/features";

export default function Features() {
  return (
    <>
      <SEO jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Features", path: "/features" }])} />
      <section className="container pt-36 pb-16">
        <SectionHeading
          as="h1"
          eyebrow="Platform tour"
          title="Everything your business uses to talk"
          subtitle="Phone, text, video, AI, contact center, integrations, analytics — built as one product, not seven acquisitions in a trench coat."
        />
      </section>

      <section className="container pb-8 space-y-8">
        {FEATURES.map((feature, i) => (
          <ScrollReveal key={feature.slug}>
            <Link
              to={`/features/${feature.slug}`}
              className={`group grid lg:grid-cols-2 gap-8 glass rounded-3xl p-8 md:p-12 card-hover items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-primary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7" />
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">{feature.name}</h2>
                <p className="text-gradient font-medium mb-4">{feature.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.intro}</p>
                <span className="inline-flex items-center gap-2 font-medium text-primary">
                  Explore {feature.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {feature.stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-center">
                    <p className="font-display text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
