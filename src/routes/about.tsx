import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import storeInterior from "@/assets/store-interior.jpg";
import heroKunafa from "@/assets/hero-kunafa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kunafa Story | Our Dessert Craft & Heritage" },
      {
        name: "description",
        content:
          "The story behind Kunafa Story — small-batch kunafa, heritage recipes and a modern dessert house with Laban Story as its sub-brand.",
      },
      { property: "og:title", content: "About Kunafa Story" },
      {
        property: "og:description",
        content: "Small-batch kunafa, heritage recipes, and a modern premium dessert house.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Heritage first",
    body: "Recipes traced through generations of Levantine dessert makers, kept honest and unhurried.",
  },
  {
    title: "Small batch only",
    body: "Every tray is baked to order so the pastry stays crisp and the filling stays molten.",
  },
  {
    title: "Ingredient obsession",
    body: "Single-origin pistachio, clarified butter, and cheese blends we blend in-house.",
  },
  {
    title: "Considered spaces",
    body: "Navy, brass and marble interiors designed for slow, shareable dessert moments.",
  },
];

const timeline = [
  { year: "2019", text: "First kitchen opens with a single kunafa tray and a family recipe." },
  { year: "2021", text: "Flagship store launches with the navy-and-gold house identity." },
  { year: "2023", text: "Laban Story is introduced as the chilled counterpart sub-brand." },
  { year: "2026", text: "Franchise programme opens across the region." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A dessert house built on one unrevealed story"
        intro="Placeholder narrative: Kunafa Story began as a family tray shared after dinner and grew into a premium dessert house obsessed with texture, temperature and time."
        image={heroKunafa}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={storeInterior}
              alt="Kunafa Story boutique interior"
              width={1600}
              height={1000}
              loading="lazy"
              className="shadow-luxe w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-primary/60">Our craft</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Baked in minutes, shaped over years</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Placeholder copy. Describe the kitchen process here — the hand-pulled kataifi, the
              slow-clarified butter, the syrup infused with orange blossom, and the exact eleven
              minutes that turn it golden.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Replace with the real brand story, founder note, and sourcing details when ready.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["12", "Signature recipes"],
                ["6", "Cities served"],
                ["100%", "Made to order"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl text-primary">{value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <SectionHeading
          eyebrow="What we stand for"
          title="Four house rules"
          intro="Placeholder values that guide every store, every tray and every pour."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal as="li" key={value.title} delay={i * 90} className="card-luxe p-7">
              <span className="font-display text-2xl text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-xl">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="surface-navy">
        <SectionHeading
          tone="dark"
          eyebrow="Milestones"
          title="The story so far"
          intro="Placeholder timeline — update with real dates and openings."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {timeline.map((item, i) => (
            <Reveal as="li" key={item.year} delay={i * 100}>
              <div className="hairline mb-5" />
              <p className="font-display text-4xl text-gilded">{item.year}</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
