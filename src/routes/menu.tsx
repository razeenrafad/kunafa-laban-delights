import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import menuSpread from "@/assets/menu-spread.jpg";
import heroKunafa from "@/assets/hero-kunafa.jpg";
import labanDrink from "@/assets/laban-drink.jpg";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Kunafa Story Signature Desserts & Laban Drinks" },
      {
        name: "description",
        content:
          "Explore the Kunafa Story menu — signature kunafa, molten pistachio trays, seasonal specials and chilled Laban Story drinks.",
      },
      { property: "og:title", content: "Kunafa Story Menu" },
      {
        property: "og:description",
        content: "Signature kunafa, seasonal specials and chilled Laban Story drinks.",
      },
    ],
  }),
  component: MenuPage,
});

const categories = ["Signature Kunafa", "Molten Series", "Cold Laban", "Seasonal"] as const;

const items: {
  name: string;
  category: (typeof categories)[number];
  price: string;
  note: string;
  image: string;
}[] = [
  {
    name: "Classic Pistachio Kunafa",
    category: "Signature Kunafa",
    price: "AED 32",
    note: "Hand-pulled kataifi, house cheese blend, single-origin pistachio.",
    image: heroKunafa,
  },
  {
    name: "Cheese Pull Tray",
    category: "Signature Kunafa",
    price: "AED 38",
    note: "Baked to order for the slow, molten stretch.",
    image: menuSpread,
  },
  {
    name: "Dark Chocolate Kunafa",
    category: "Molten Series",
    price: "AED 36",
    note: "70% couverture centre with a salted crumb.",
    image: menuSpread,
  },
  {
    name: "Lotus Cream Kunafa",
    category: "Molten Series",
    price: "AED 34",
    note: "Caramel biscuit cream, brûléed pastry top.",
    image: heroKunafa,
  },
  {
    name: "Signature Laban",
    category: "Cold Laban",
    price: "AED 18",
    note: "Chilled cultured laban, mint, a whisper of salt.",
    image: labanDrink,
  },
  {
    name: "Rose Pistachio Laban",
    category: "Cold Laban",
    price: "AED 22",
    note: "Rose water, crushed pistachio, served over crushed ice.",
    image: labanDrink,
  },
  {
    name: "Saffron Kunafa Cake",
    category: "Seasonal",
    price: "AED 46",
    note: "Limited winter tray with saffron syrup.",
    image: storeInterior,
  },
  {
    name: "Sharing Platter",
    category: "Seasonal",
    price: "AED 120",
    note: "Six pieces across the full range, for the table.",
    image: menuSpread,
  },
];

function MenuPage() {
  const [active, setActive] = useState<(typeof categories)[number] | "All">("All");
  const visible = active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="Golden pastry, molten centres, chilled pours"
        intro="Placeholder menu with sample pricing. Swap in your final items, allergens and photography later."
        image={menuSpread}
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 text-xs tracking-[0.16em] uppercase transition-all duration-300 ${
                active === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 70} className="card-luxe overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                width={800}
                height={600}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                  <h3 className="truncate text-xl">{item.name}</h3>
                  <span className="shrink-0 font-display text-lg text-primary">{item.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                <p className="eyebrow mt-4 text-accent-foreground/60">{item.category}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="surface-navy">
        <SectionHeading
          tone="dark"
          eyebrow="Order & catering"
          title="Trays for gatherings"
          intro="Placeholder note about catering trays, corporate gifting and Ramadan boxes. Add a real ordering link when ready."
        />
      </Section>
    </>
  );
}
