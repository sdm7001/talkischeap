import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AudioWaveform, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { FEATURES } from "@/data/features";
import { INDUSTRIES } from "@/data/industries";

const NAV_LINKS = [
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-lg shadow-black/30" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16" aria-label="Main">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Talk Is Cheap home">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-background transition-transform group-hover:scale-105">
            <AudioWaveform className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            talk<span className="text-gradient">is</span>cheap
            <span className="text-muted-foreground">.io</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <div className="relative group">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80"
                )
              }
            >
              Features <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="glass-strong rounded-xl p-2 w-72 shadow-2xl shadow-black/50">
                {FEATURES.map((f) => (
                  <Link
                    key={f.slug}
                    to={`/features/${f.slug}`}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <f.icon className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>
                      <span className="block text-sm font-medium">{f.name}</span>
                      <span className="block text-xs text-muted-foreground line-clamp-1">{f.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80"
                )
              }
            >
              Industries <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </NavLink>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="glass-strong rounded-xl p-2 w-64 shadow-2xl shadow-black/50">
                {INDUSTRIES.map((i) => (
                  <Link
                    key={i.slug}
                    to={`/industries/${i.slug}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <i.icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">{i.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Talk to us
          </Link>
          <Link
            to="/pricing"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background hover:opacity-90 transition-opacity glow-cyan"
          >
            Get started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container py-4 space-y-1">
            <Link to="/features" className="block px-3 py-2.5 rounded-lg font-medium hover:bg-white/5">
              All features
            </Link>
            {FEATURES.map((f) => (
              <Link
                key={f.slug}
                to={`/features/${f.slug}`}
                className="flex items-center gap-3 px-3 py-2 pl-6 rounded-lg text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                <f.icon className="w-4 h-4 text-primary" /> {f.name}
              </Link>
            ))}
            <Link to="/industries" className="block px-3 py-2.5 rounded-lg font-medium hover:bg-white/5">
              Industries
            </Link>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="block px-3 py-2.5 rounded-lg font-medium hover:bg-white/5">
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="block px-3 py-2.5 rounded-lg font-medium hover:bg-white/5">
              Contact
            </Link>
            <Link
              to="/pricing"
              className="block mt-3 px-5 py-3 rounded-xl text-center font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-background"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
