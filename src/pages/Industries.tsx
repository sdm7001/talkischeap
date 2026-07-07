import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { INDUSTRIES } from "@/data/industries";

export default function Industries() {
  return (
    <>
      <SEO jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <section className="container pt-36 pb-16">
        <SectionHeading
          as="h1"
          eyebrow="Industries"
          title="Built for how your business actually talks"
          subtitle="Generic phone systems treat every call the same. Yours aren't the same — a missed call is a lost patient, a lost client, a lost listing, a lost job. We built for that."
        />
      </section>

      <section className="container pb-8 grid md:grid-cols-2 gap-6">
        {INDUSTRIES.map((industry, i) => (
          <ScrollReveal key={industry.slug} delay={(i % 2) * 120}>
            <Link
              to={`/industries/${industry.slug}`}
              className="group block glass rounded-3xl p-9 card-hover h-full"
            >
              <industry.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h2 className="font-display text-2xl font-bold mb-1.5">{industry.name}</h2>
              <p className="text-gradient font-medium mb-4">{industry.headline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{industry.blurb}</p>
              <ul className="space-y-2 mb-6">
                {industry.painPoints.slice(0, 3).map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">—</span> {p}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 font-medium text-primary">
                How we fix it <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
