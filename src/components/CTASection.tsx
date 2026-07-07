import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready to stop overpaying for dial tone?",
  subtitle = "Get the whole platform — voice, text, video, AI — from $14.99 per user. Set up today, port your number free, cancel whenever. Talk is cheap; switching is even cheaper.",
}: CTASectionProps) {
  return (
    <section className="container py-24">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 30% 20%, hsl(187 92% 53% / 0.18), transparent), radial-gradient(ellipse 60% 80% at 70% 80%, hsl(258 90% 66% / 0.18), transparent)",
            }}
            aria-hidden="true"
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background hover:opacity-90 transition-opacity glow-cyan text-lg"
            >
              See pricing <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold glass hover:bg-white/10 transition-colors text-lg"
            >
              Talk to a human
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
