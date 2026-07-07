import { Link } from "react-router-dom";
import { HandCoins, ShieldCheck, Headphones, Zap } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";

const VALUES = [
  {
    icon: HandCoins,
    title: "Price like we mean it",
    body: "Business communications carry some of the fattest margins in software. We took the margin out and left the engineering in. The name isn't a joke — it's the P&L.",
  },
  {
    icon: ShieldCheck,
    title: "Carrier-grade or nothing",
    body: "Cheap doesn't mean flimsy. We run on geo-redundant, carrier-grade voice infrastructure with a 99.999% uptime target — the same class of network the expensive guys brag about.",
  },
  {
    icon: Headphones,
    title: "Humans answer",
    body: "We sell communication tools. It would be embarrassing if you couldn't reach us. US-based support humans on every plan, no phone-tree purgatory.",
  },
  {
    icon: Zap,
    title: "Ship the whole product",
    body: "No feature ransoms. Video isn't an add-on, porting isn't a fee, and the API isn't an 'enterprise conversation.' You get the platform. All of it.",
  },
];

export default function About() {
  return (
    <>
      <SEO jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <section className="container pt-36 pb-16">
        <SectionHeading
          as="h1"
          eyebrow="About us"
          title="We read your phone bill. Then we got to work."
          subtitle="Talk Is Cheap exists because business communications became a racket: decades-old technology, rebranded yearly, priced like it's still 1998."
        />
        <ScrollReveal className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            The telecom industry has a dirty secret: the cost of carrying a phone call has fallen roughly 99% in twenty
            years, while the price of a business phone <em>system</em> somehow went up. Add-ons multiplied. "Unified
            communications" became a way to charge for five products instead of one. Setup fees returned from the dead.
          </p>
          <p>
            We're telecom and software people who spent years building and integrating these platforms for other
            companies — and got tired of watching small businesses pay enterprise prices for missed calls and voicemail
            boxes. So we built the platform we kept wishing existed: every channel in one place, deep integrations,
            genuinely useful AI, and a price that reflects what this stuff actually costs to run.
          </p>
          <p>
            The result is Talk Is Cheap: a full UCaaS platform — cloud voice, messaging, video, AI receptionist,
            contact center, analytics — from $14.99 a seat. Enterprise-grade everything, minus the enterprise
            invoice theater.
          </p>
        </ScrollReveal>
      </section>

      <section className="container py-16">
        <SectionHeading eyebrow="What we believe" title="Four rules we don't break" />
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} delay={(i % 2) * 120}>
              <article className="glass rounded-2xl p-7 card-hover h-full">
                <v.icon className="w-7 h-7 text-primary mb-4" />
                <h2 className="font-display text-lg font-semibold mb-2">{v.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container py-16 text-center">
        <ScrollReveal>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Want to see whether we live up to any of this?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Call us
            </Link>
            . A human will answer, and that's already more than your current vendor is offering.
          </p>
        </ScrollReveal>
      </section>

      <CTASection />
    </>
  );
}
