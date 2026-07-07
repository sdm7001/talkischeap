import { Link } from "react-router-dom";
import { PhoneMissed } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO />
      <section className="container min-h-[70vh] flex flex-col items-center justify-center text-center pt-24">
        <PhoneMissed className="w-16 h-16 text-primary mb-6" />
        <h1 className="font-display text-6xl md:text-8xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl font-display font-semibold mb-2">This page missed your call.</p>
        <p className="text-muted-foreground mb-8 max-w-md">
          Unlike your customers, it won't text you back. Let's get you somewhere useful.
        </p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background hover:opacity-90 transition-opacity"
          >
            Back home
          </Link>
          <Link to="/features" className="px-6 py-3 rounded-xl font-semibold glass hover:bg-white/10 transition-colors">
            Explore features
          </Link>
        </div>
      </section>
    </>
  );
}
