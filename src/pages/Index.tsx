import { Link } from "react-router-dom";
import {
  ArrowRight,
  PhoneIncoming,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Star,
  DollarSign,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { WaveformCanvas } from "@/components/WaveformCanvas";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { LogoMarquee } from "@/components/LogoMarquee";
import { CTASection } from "@/components/CTASection";
import { FEATURES } from "@/data/features";
import { INDUSTRIES } from "@/data/industries";
import { PLANS } from "@/data/pricing";

const STATS = [
  { value: "99.999%", label: "Uptime target on geo-redundant infrastructure" },
  { value: "$14.99", label: "Per user/month to start — everything included" },
  { value: "100+", label: "Native CRM, PMS & calendar integrations" },
  { value: "24/7", label: "AI receptionist answering when you can't" },
];

const TESTIMONIALS = [
  {
    quote:
      "We cut our phone bill 60% and started catching the calls we used to miss. The missed-call text alone books us two extra jobs a week.",
    name: "Marcus T.",
    role: "Owner, HVAC company (14 seats)",
  },
  {
    quote:
      "Screen Pop changed our front desk. We greet patients by name, see their balance, and confirm their next visit before they've finished saying hello.",
    name: "Dr. Sarah K.",
    role: "Dental practice owner (2 locations)",
  },
  {
    quote:
      "The AI receptionist booked 43 appointments last month — most of them after 6 PM. It paid for the entire platform on its own.",
    name: "Jennifer R.",
    role: "Med spa director",
  },
];

export default function Index() {
  return (
    <>
      <SEO />

      {/* ---------- HERO ---------- */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <WaveformCanvas className="absolute inset-x-0 bottom-0 h-[55vh] w-full opacity-70" />

        <div className="container relative z-10 py-24">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                The UCaaS platform that read your phone bill and got angry
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                Talk is cheap.
                <br />
                <span className="text-gradient">Finally, so is your phone system.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Cloud voice, business texting, video meetings, AI receptionist, and a full contact center — one
                platform, one app, one honest bill. Enterprise-grade everything, from{" "}
                <span className="text-foreground font-semibold">$14.99 per user</span>.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background hover:opacity-90 transition-opacity glow-cyan text-lg"
                >
                  Get started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold glass hover:bg-white/10 transition-colors text-lg"
                >
                  Tour the platform
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Free number porting</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> No setup fees</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> No long-term contracts</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> US-based human support</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="border-y border-border bg-card/40">
        <div className="container py-14 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------- LIVE DEMO MOCK ---------- */}
      <section className="container py-28">
        <SectionHeading
          eyebrow="See it work"
          title="A missed call becomes a booked job in 90 seconds"
          subtitle="Businesses miss 20–30% of their calls, and 75% of those callers never try again. Watch what happens when your phone system refuses to let that happen."
        />
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="glass rounded-2xl p-6 card-hover h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-red-500/15 text-red-400">
                  <PhoneIncoming className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">2:47 PM — Missed call</p>
                  <p className="text-xs text-muted-foreground">(713) 555-0142 · New caller</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your tech is on a ladder. The office line rings four times. In the old world, this lead is already
                dialing your competitor.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="glass rounded-2xl p-6 card-hover h-full border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-primary/15 text-primary">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">2:47 PM — Auto-text sent</p>
                  <p className="text-xs text-muted-foreground">0 seconds later</p>
                </div>
              </div>
              <div className="rounded-xl bg-secondary p-3 text-sm leading-relaxed mb-3">
                "Hi! Sorry we missed you — we're on a job. What can we help with? Reply here and we'll get you
                scheduled. — Apex Plumbing"
              </div>
              <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-sm leading-relaxed">
                "water heater leaking, need someone today if possible"
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="glass rounded-2xl p-6 card-hover h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-violet-500/15 text-violet-400">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">2:49 PM — AI books the job</p>
                  <p className="text-xs text-muted-foreground">$385 average ticket, saved</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                The AI Receptionist quotes the service window, captures the address, books the 4:30 slot, and texts a
                deposit link.
              </p>
              <p className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Booked: Today 4:30 PM · Deposit paid
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- FEATURES BENTO ---------- */}
      <section className="container py-24">
        <SectionHeading
          eyebrow="The platform"
          title="Seven products. One login. One bill."
          subtitle="Everything the enterprise vendors sell as separate SKUs, minus the SKUs — and minus most of the price."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.slug} delay={(i % 3) * 100}>
              <Link
                to={`/features/${feature.slug}`}
                className="group block glass rounded-2xl p-7 card-hover h-full"
              >
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-primary mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </span>
                <h3 className="font-display text-xl font-semibold mb-1.5">{feature.name}</h3>
                <p className="text-sm font-medium text-gradient mb-3">{feature.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Built for your business"
            title="Your industry has a phone problem. We've met it."
            subtitle="Purpose-built workflows for the businesses where every missed call is measurable money."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((industry, i) => (
              <ScrollReveal key={industry.slug} delay={i * 100}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group block glass rounded-2xl p-6 card-hover h-full"
                >
                  <industry.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-lg mb-1">{industry.name}</h3>
                  <p className="text-sm text-gradient font-medium mb-3">{industry.headline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{industry.blurb}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="container py-24">
        <SectionHeading
          eyebrow="Word on the street"
          title="Talk is cheap. Results aren't."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <figure className="glass rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed flex-1">"{t.quote}"</blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------- INTEGRATIONS ---------- */}
      <section className="py-16 border-y border-border bg-card/40">
        <div className="container mb-4">
          <ScrollReveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Plays nice with your stack
            </p>
          </ScrollReveal>
        </div>
        <LogoMarquee />
        <div className="container mt-4 text-center">
          <Link to="/features/integrations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            See all 100+ integrations →
          </Link>
        </div>
      </section>

      {/* ---------- PRICING PREVIEW ---------- */}
      <section className="container py-24" id="pricing-preview">
        <SectionHeading
          eyebrow="Pricing"
          title="Three plans. Zero fine print."
          subtitle="Per user, per month, billed annually. Free porting, free onboarding, taxes itemized honestly."
        />
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 120}>
              <Link
                to="/pricing"
                className={`block glass rounded-2xl p-7 card-hover h-full relative ${plan.popular ? "border-primary/50 glow-cyan" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-gradient">${plan.annual}</span>
                  <span className="text-sm text-muted-foreground">/user/mo</span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  <DollarSign className="w-4 h-4" /> Full plan details
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
