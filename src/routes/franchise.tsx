import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise | Partner with Kunafa Story" },
      {
        name: "description",
        content:
          "Open a Kunafa Story or Laban Story outlet. Placeholder franchise model, investment range, support and application steps.",
      },
      { property: "og:title", content: "Kunafa Story Franchise" },
      {
        property: "og:description",
        content: "Bring the Kunafa Story dessert house to your city — franchise opportunities.",
      },
    ],
  }),
  component: FranchisePage,
});

const formats = [
  { name: "Flagship Boutique", size: "1,200 – 1,800 sq ft", note: "Full dessert bar and seating." },
  { name: "Express Counter", size: "350 – 600 sq ft", note: "Mall and high-street footfall model." },
  { name: "Laban Kiosk", size: "120 – 250 sq ft", note: "Chilled sub-brand, grab-and-go." },
];

const support = [
  "Site selection & fit-out guidelines",
  "Recipe training and kitchen setup",
  "Supply chain and ingredient sourcing",
  "Brand, packaging and launch marketing",
  "Ongoing operations audits",
  "Menu innovation calendar",
];

const steps = [
  { step: "Enquire", text: "Submit the placeholder form with your city and format interest." },
  { step: "Discovery", text: "Discovery call on investment, timelines and territory." },
  { step: "Approve", text: "Site review, agreement and franchise onboarding." },
  { step: "Launch", text: "Fit-out, training and a supported opening week." },
];

function FranchisePage() {
  return (
    <>
      <PageHero
        eyebrow="Franchise"
        title="Bring the story to your city"
        intro="Placeholder franchise overview covering formats, investment and support. Replace with your real commercial terms."
        image={storeInterior}
      />

      <Section>
        <SectionHeading
          eyebrow="Formats"
          title="Three ways to open"
          intro="Indicative footprints — final figures to be confirmed."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {formats.map((format, i) => (
            <Reveal as="li" key={format.name} delay={i * 90} className="card-luxe p-8">
              <h3 className="text-xl">{format.name}</h3>
              <p className="mt-3 font-display text-2xl text-primary">{format.size}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{format.note}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="surface-navy">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="What you get"
              title="A partnership, not a licence"
              intro="Placeholder list of the support package included with every territory."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {support.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 60}
                  className="flex gap-3 text-sm text-primary-foreground/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={140} className="rounded-3xl border border-primary-foreground/15 p-8">
            <p className="eyebrow text-accent">Indicative investment</p>
            <p className="mt-4 font-display text-5xl text-gilded">$XX,000+</p>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Placeholder range covering fit-out, equipment and opening stock. Franchise fee and
              royalty structure to be confirmed per territory.
            </p>
            <div className="hairline my-7" />
            <ol className="space-y-5">
              {steps.map((item, i) => (
                <li key={item.step} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/50 text-xs text-accent">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-sm text-primary-foreground">{item.step}</span>
                    <span className="mt-1 block text-xs text-primary-foreground/60">
                      {item.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
