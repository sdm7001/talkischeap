import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PLANS, PRICING_NOTES } from "@/data/pricing";
import { FAQS } from "@/data/faqs";
import { SITE_URL } from "@/data/site";
import { cn } from "@/lib/utils";

const pricingLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Talk Is Cheap UCaaS Platform",
  description:
    "All-in-one business communications: cloud phone, SMS, video meetings, AI receptionist, and contact center.",
  brand: { "@type": "Brand", name: "Talk Is Cheap" },
  offers: PLANS.map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} Plan`,
    price: String(plan.annual),
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(plan.annual),
      priceCurrency: "USD",
      unitText: "per user per month, billed annually",
    },
    url: `${SITE_URL}/pricing`,
    availability: "https://schema.org/InStock",
  })),
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <SEO
        jsonLd={[
          pricingLd,
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]),
        ]}
      />

      <section className="container pt-36 pb-10">
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title="The whole platform. A fraction of the bill."
          subtitle="No setup fees. No porting fees. No 'implementation packages.' No mystery service charges. The name of the company is the pricing strategy."
        />

        {/* Billing toggle */}
        <ScrollReveal className="flex items-center justify-center gap-4 mb-14">
          <span className={cn("text-sm font-medium", !annual && "text-primary")}>Monthly</span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className="relative w-14 h-7 rounded-full bg-secondary border border-border transition-colors"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
          >
            <span
              className={cn(
                "absolute top-0.5 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all",
                annual ? "left-[calc(100%-1.625rem)]" : "left-0.5"
              )}
            />
          </button>
          <span className={cn("text-sm font-medium", annual && "text-primary")}>
            Annual <span className="text-emerald-400">(save ~20%)</span>
          </span>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 120} className="h-full">
              <div
                className={cn(
                  "glass rounded-3xl p-8 h-full flex flex-col relative",
                  plan.popular && "border-primary/50 glow-cyan lg:scale-[1.04]"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background whitespace-nowrap">
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-xl font-bold">{plan.name}</h2>
                <p className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-bold text-gradient">
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-sm text-muted-foreground">/user/mo</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {annual ? "billed annually" : "billed monthly, cancel anytime"}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.tagline}</p>

                <ul className="mt-7 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      {f.startsWith("Everything in") ? (
                        <span className="font-semibold text-gradient">{f}</span>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={cn(
                    "mt-8 block text-center px-6 py-3.5 rounded-xl font-semibold transition-all",
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-background hover:opacity-90"
                      : "glass hover:bg-white/10"
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 max-w-3xl mx-auto space-y-2">
          {PRICING_NOTES.map((note) => (
            <p key={note} className="text-xs text-muted-foreground text-center leading-relaxed">
              {note}
            </p>
          ))}
        </ScrollReveal>
      </section>

      {/* Cost comparison */}
      <section className="container py-20">
        <SectionHeading
          eyebrow="Do the math"
          title="A 10-person office, priced honestly"
          subtitle="Same seats, same features, very different invoices."
        />
        <ScrollReveal>
          <div className="max-w-3xl mx-auto glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="p-5 font-display">What you're buying</th>
                    <th className="p-5 font-display">Legacy enterprise vendor</th>
                    <th className="p-5 font-display text-gradient">Talk Is Cheap</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="p-5">10 UCaaS seats (mid tier)</td>
                    <td className="p-5">$350–$450/mo</td>
                    <td className="p-5 text-foreground font-medium">$299.90/mo</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-5">Video meetings</td>
                    <td className="p-5">+$120/mo add-on</td>
                    <td className="p-5 text-foreground font-medium">Included</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-5">Onboarding & setup</td>
                    <td className="p-5">$500–$2,500 one-time</td>
                    <td className="p-5 text-foreground font-medium">$0</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-5">Number porting</td>
                    <td className="p-5">$15–$25/number</td>
                    <td className="p-5 text-foreground font-medium">$0</td>
                  </tr>
                  <tr>
                    <td className="p-5 font-medium text-foreground">First-year total</td>
                    <td className="p-5">~$7,100+</td>
                    <td className="p-5 font-display font-bold text-gradient text-base">$3,599</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing FAQ teaser */}
      <section className="container py-16">
        <SectionHeading eyebrow="Questions" title="The fine print, out loud" />
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.slice(1, 5).map((faq, i) => (
            <ScrollReveal key={faq.question} delay={i * 80}>
              <details className="glass rounded-xl group">
                <summary className="cursor-pointer p-5 font-medium list-none flex justify-between items-center gap-4">
                  {faq.question}
                  <span className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
          <ScrollReveal className="text-center pt-4">
            <Link to="/faq" className="text-sm text-primary hover:underline">
              Read the full FAQ →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
