import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { logos } from "@/components/site/brand";
import heroKunafa from "@/assets/hero-kunafa.jpg";
import menuSpread from "@/assets/menu-spread.jpg";
import labanDrink from "@/assets/laban-drink.jpg";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kunafa Story | Premium Kunafa & Laban Story Desserts" },
      {
        name: "description",
        content:
          "Kunafa Story is a premium dessert house serving small-batch molten kunafa, with Laban Story pouring chilled cultured drinks. Explore the menu, stores and franchise.",
      },
      { property: "og:title", content: "Kunafa Story | Premium Dessert House" },
      {
        property: "og:description",
        content:
          "Small-batch molten kunafa and chilled Laban Story pours — a premium dessert experience.",
      },
    ],
  }),
  component: HomePage,
});

const signatures = [
  {
    name: "Classic Pistachio",
    note: "Hand-pulled kataifi, molten cheese, single-origin pistachio.",
    image: heroKunafa,
  },
  {
    name: "Dark Chocolate",
    note: "70% couverture centre with a salted pastry crumb.",
    image: menuSpread,
  },
  {
    name: "Signature Laban",
    note: "Chilled cultured laban with mint and a whisper of salt.",
    image: labanDrink,
  },
];

const pillars = [
  { title: "Baked to order", note: "Nothing sits. Every tray leaves the oven for one table." },
  { title: "Heritage recipes", note: "Levantine technique, unhurried syrups, honest butter." },
  { title: "Designed rooms", note: "Navy, brass and marble spaces made for sharing." },
];

const marquee = [
  "Unrevealed stories of kunafa",
  "Small batch",
  "Molten centres",
  "Laban Story",
  "Since 2019",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="surface-navy relative isolate overflow-hidden">
        <img
          src={heroKunafa}
          alt="Molten pistachio kunafa"
          width={1600}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20"
          style={{ backgroundImage: `url(${logos.pattern})`, backgroundSize: "cover" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-44">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-accent">Parent brand · Kunafa Story</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.02] text-primary-foreground sm:text-6xl md:text-7xl">
              The dessert that <span className="text-gilded">tells its own story</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              Small-batch kunafa, pulled by hand and baked to order. Beside it, Laban Story pours
              the chilled chapter. Placeholder copy — replace with your final brand narrative.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-xs tracking-[0.22em] uppercase text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore the menu
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-7 py-4 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Find a store
              </Link>
            </div>
          </Reveal>
          <img
            src={logos.kunafa}
            alt=""
            aria-hidden
            className="float-slow pointer-events-none absolute right-6 top-24 hidden w-56 opacity-30 lg:block xl:w-72"
          />
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden border-y border-primary-foreground/10 py-4">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
            {[...marquee, ...marquee, ...marquee, ...marquee].map((text, i) => (
              <span key={`${text}-${i}`} className="eyebrow text-primary-foreground/50">
                {text} <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-primary/60">The house</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
              A premium dessert house built around texture and temperature
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Placeholder introduction to the brand. Talk about the kitchen, the sourcing and why
              every tray waits for its table.
            </p>
            <Link
              to="/about"
              className="story-link mt-8 inline-flex text-xs tracking-[0.22em] uppercase text-primary"
            >
              Read our story
            </Link>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal as="li" key={pillar.title} delay={i * 100} className="card-luxe p-7">
                <span className="font-display text-3xl text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Signatures */}
      <Section className="bg-secondary/60">
        <SectionHeading
          eyebrow="Signatures"
          title="Three to start with"
          intro="Placeholder product selection with sample descriptions."
        />
        <ul className="mt-14 grid gap-7 md:grid-cols-3">
          {signatures.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 110} className="card-luxe overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200} className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex rounded-full bg-primary px-8 py-4 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Full menu
          </Link>
        </Reveal>
      </Section>

      {/* Brand family */}
      <Section className="surface-navy">
        <SectionHeading
          tone="dark"
          eyebrow="Brand family"
          title="Kunafa Story & Laban Story"
          intro="One parent house, one chilled sub-brand — designed to be served together."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            { logo: logos.kunafa, name: "Kunafa Story", role: "Parent brand", image: heroKunafa },
            { logo: logos.laban, name: "Laban Story", role: "Sub brand", image: labanDrink },
          ].map((brand, i) => (
            <Reveal
              key={brand.name}
              delay={i * 120}
              className="group relative overflow-hidden rounded-3xl border border-primary-foreground/15"
            >
              <img
                src={brand.image}
                alt={brand.name}
                width={1200}
                height={800}
                loading="lazy"
                className="h-72 w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105 md:h-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <img
                  src={brand.logo}
                  alt=""
                  aria-hidden
                  className="h-20 w-20 object-contain"
                  style={brand.name === "Laban Story" ? { filter: "invert(1) brightness(2)" } : {}}
                />
                <p className="eyebrow text-accent">{brand.role}</p>
                <h3 className="text-2xl text-primary-foreground">{brand.name}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220} className="mt-12 text-center">
          <Link
            to="/brands"
            className="inline-flex rounded-full border border-accent/60 px-8 py-4 text-xs tracking-[0.22em] uppercase text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Meet the brands
          </Link>
        </Reveal>
      </Section>

      {/* Franchise CTA */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={storeInterior}
              alt="Kunafa Story boutique"
              width={1600}
              height={1000}
              loading="lazy"
              className="shadow-luxe w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-primary/60">Franchise</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
              Open a Kunafa Story in your city
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Placeholder franchise pitch — formats from flagship boutiques to Laban Story kiosks,
              with training, supply chain and launch support.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/franchise"
                className="inline-flex rounded-full bg-primary px-7 py-4 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Franchise details
              </Link>
              <Link
                to="/contact"
                className="inline-flex rounded-full border border-border px-7 py-4 text-xs tracking-[0.22em] uppercase text-primary transition-colors hover:border-primary"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
