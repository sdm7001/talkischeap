import { useState, type FormEvent } from "react";
import { Mail, MessageSquare, Phone, CheckCircle2 } from "lucide-react";
import { SEO, breadcrumbLd } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_EMAIL, SITE_PHONE } from "@/data/site";

const CHANNELS = [
  {
    icon: Phone,
    title: "Call us",
    detail: SITE_PHONE,
    href: `tel:${SITE_PHONE.replace(/[^+\d]/g, "")}`,
    note: "A human answers. We're weirdly proud of that.",
  },
  {
    icon: MessageSquare,
    title: "Text us",
    detail: SITE_PHONE,
    href: `sms:${SITE_PHONE.replace(/[^+\d]/g, "")}`,
    note: "Same number. We eat our own dog food.",
  },
  {
    icon: Mail,
    title: "Email us",
    detail: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
    note: "Answered same business day.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <section className="container pt-36 pb-16">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Talk to a human. It's cheap, after all."
          subtitle="Questions about plans, porting, integrations, or a live demo — pick your channel."
        />

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
          {CHANNELS.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <a href={c.href} className="block glass rounded-2xl p-7 card-hover text-center h-full">
                <c.icon className="w-7 h-7 text-primary mx-auto mb-4" />
                <h2 className="font-display font-semibold mb-1">{c.title}</h2>
                <p className="text-primary font-medium text-sm mb-2">{c.detail}</p>
                <p className="text-xs text-muted-foreground">{c.note}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="max-w-xl mx-auto">
          {submitted ? (
            <div className="glass rounded-2xl p-10 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold mb-2">Got it — talk soon.</h2>
              <p className="text-muted-foreground">
                A real person will reach out within one business day. (Usually much faster. We monitor this inbox the
                way we tell you to monitor yours.)
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <h2 className="font-display text-xl font-bold">Or send a note</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-sm font-medium mb-1.5 block">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="w-full rounded-xl bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium mb-1.5 block">Company</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className="w-full rounded-xl bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium mb-1.5 block">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-xl bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium mb-1.5 block">What can we help with?</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full rounded-xl bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </label>
              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background hover:opacity-90 transition-opacity"
              >
                Send it
              </button>
              <p className="text-xs text-muted-foreground text-center">
                No spam, no drip campaigns, no "just circling back." One human reply.
              </p>
            </form>
          )}
        </ScrollReveal>
      </section>
    </>
  );
}
