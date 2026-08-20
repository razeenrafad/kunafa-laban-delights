import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { logos, navLinks } from "./brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "surface-navy shadow-luxe" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-8 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logos.kunafa}
            alt="Kunafa Story"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 object-contain md:h-14 md:w-14"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-none text-primary-foreground md:text-lg">
              Kunafa Story
            </span>
            <span className="eyebrow block text-[0.55rem] text-accent">
              Unrevealed stories of kunafa
            </span>
          </span>
        </Link>

        <nav className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="story-link text-[0.8rem] font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-accent [&.active]:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/franchise"
            className="hidden rounded-full border border-accent/60 px-5 py-2 text-xs font-medium tracking-[0.18em] uppercase text-accent transition-colors hover:bg-accent hover:text-accent-foreground lg:inline-flex"
          >
            Franchise
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`surface-navy overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-6 pb-8 pt-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block border-b border-primary-foreground/10 py-3 font-display text-2xl text-primary-foreground/90 [&.active]:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
