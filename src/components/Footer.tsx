import { Link } from "react-router-dom";
import { AudioWaveform } from "lucide-react";
import { FEATURES } from "@/data/features";
import { INDUSTRIES } from "@/data/industries";
import { SITE_EMAIL, SITE_PHONE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-background">
                <AudioWaveform className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-bold text-lg">
                talk<span className="text-gradient">is</span>cheap<span className="text-muted-foreground">.io</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Enterprise-grade unified communications without the enterprise price. Cloud phone, SMS, video, AI
              receptionist, and contact center — one platform, one honest bill.
            </p>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary transition-colors">{SITE_EMAIL}</a>
              </p>
              <p>
                <a href={`tel:${SITE_PHONE.replace(/[^+\d]/g, "")}`} className="hover:text-primary transition-colors">{SITE_PHONE}</a>
              </p>
            </div>
          </div>

          <nav aria-label="Product">
            <h3 className="font-display font-semibold text-sm mb-4 text-foreground/90">Product</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {FEATURES.map((f) => (
                <li key={f.slug}>
                  <Link to={`/features/${f.slug}`} className="hover:text-primary transition-colors">
                    {f.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Industries">
            <h3 className="font-display font-semibold text-sm mb-4 text-foreground/90">Industries</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link to={`/industries/${i.slug}`} className="hover:text-primary transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="hover:text-primary transition-colors">All industries</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-display font-semibold text-sm mb-4 text-foreground/90">Company</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Talk Is Cheap. All rights reserved.</p>
          <p>
            Talk is cheap. <span className="text-gradient font-medium">Your phone bill should be too.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
