import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { logos } from "@/components/site/brand";
import heroKunafa from "@/assets/hero-kunafa.jpg";
import labanDrink from "@/assets/laban-drink.jpg";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands | Kunafa Story & Laban Story" },
      {
        name: "description",
        content:
          "Kunafa Story is the parent dessert house; Laban Story is its chilled sub-brand. Explore the family of brands and what each one stands for.",
      },
      { property: "og:title", content: "Kunafa Story & Laban Story" },
      {
        property: "og:description",
        content: "One dessert house, two identities: Kunafa Story and Laban Story.",
      },
    ],
  }),
  component: BrandsPage,
});

const brands = [
  {
    name: "Kunafa Story",
    role: "Parent brand",
    tagline: "Unrevealed stories of kunafa",
    logo: logos.kunafa,
    image: heroKunafa,
    body: "The house brand: slow-baked kunafa, molten centres and heritage syrups served in navy-and-gold boutiques.",
    points: ["Signature kunafa trays", "Boutique dessert bars", "Catering & gifting"],
    dark: true,
  },
  {
    name: "Laban Story",
    role: "Sub brand",
    tagline: "Chilled, cultured, calm",
    logo: logos.laban,
    image: labanDrink,
    body: "The chilled counterpart: cultured laban, rose and pistachio pours designed to sit beside every warm tray.",
    points: ["Cold laban pours", "Grab-and-go counters", "Seasonal flavour drops"],
    dark: false,
  },
];

function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="One house, two stories"
        intro="Kunafa Story leads the family as the parent dessert brand, while Laban Story pours the chilled chapter."
        image={heroKunafa}
      />

      <Section>
        <SectionHeading
          eyebrow="Brand architecture"
          title="Kunafa Story & Laban Story"
          intro="Placeholder positioning copy for each brand. Update tone of voice, product lines and imagery later."
        />

        <div className="mt-16 space-y-10">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 100}>
              <article
                className={`grid overflow-hidden rounded-3xl border border-border lg:grid-cols-2 ${
                  brand.dark ? "surface-navy" : "bg-card"
                }`}
              >
                <div className="order-2 p-8 md:p-12 lg:order-1">
                  <div className="flex items-center gap-4">
                    <div
                      className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${
                        brand.dark ? "bg-primary-foreground/10" : "bg-primary"
                      }`}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className={`eyebrow ${brand.dark ? "text-accent" : "text-primary/60"}`}>
                        {brand.role}
                      </p>
                      <h3
                        className={`truncate text-2xl ${brand.dark ? "text-primary-foreground" : ""}`}
                      >
                        {brand.name}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`mt-6 font-display text-2xl ${
                      brand.dark ? "text-gilded" : "text-primary"
                    }`}
                  >
                    {brand.tagline}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed sm:text-base ${
                      brand.dark ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {brand.body}
                  </p>
                  <ul className="mt-7 space-y-2">
                    {brand.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-center gap-3 text-sm ${
                          brand.dark ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/menu"
                    className={`mt-9 inline-flex rounded-full px-6 py-3 text-xs tracking-[0.2em] uppercase transition-colors ${
                      brand.dark
                        ? "border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    View menu
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-64 w-full object-cover lg:h-full"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
