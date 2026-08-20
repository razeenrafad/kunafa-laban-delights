import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { logos, navLinks } from "./brand";

export function SiteFooter() {
  return (
    <footer className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ backgroundImage: `url(${logos.pattern})`, backgroundSize: "cover" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={logos.kunafa}
              alt="Kunafa Story"
              width={96}
              height={96}
              loading="lazy"
              className="h-20 w-20 object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Kunafa Story crafts slow-baked kunafa in small batches — a modern house of Middle
              Eastern dessert, with Laban Story pouring its chilled counterpart.
            </p>
            <a
              href="https://instagram.com"
              className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-accent"
            >
              <Instagram className="h-4 w-4" /> @kunafastory
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-accent">Explore</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-accent">Reach us</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Flagship Store, Placeholder Address, City
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                +000 000 0000
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                hello@kunafastory.com
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kunafa Story. All rights reserved.</p>
          <p>Kunafa Story · Laban Story — placeholder content</p>
        </div>
      </div>
    </footer>
  );
}
