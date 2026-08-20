import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | Find a Kunafa Story Store Near You" },
      {
        name: "description",
        content:
          "Visit Kunafa Story and Laban Story boutiques. Placeholder store list with addresses, hours and contact details.",
      },
      { property: "og:title", content: "Kunafa Story Locations" },
      {
        property: "og:description",
        content: "Find Kunafa Story and Laban Story dessert boutiques near you.",
      },
    ],
  }),
  component: LocationsPage,
});

const stores = [
  {
    city: "Flagship — City Centre",
    brand: "Kunafa Story",
    address: "Placeholder Street 12, Ground Floor, City Centre",
    hours: "10:00 — 01:00 daily",
    phone: "+000 000 0000",
  },
  {
    city: "Marina Boulevard",
    brand: "Kunafa Story",
    address: "Placeholder Tower, Marina Boulevard",
    hours: "12:00 — 02:00 daily",
    phone: "+000 000 0001",
  },
  {
    city: "Old Town Souk",
    brand: "Kunafa Story",
    address: "Souk Lane 4, Old Town",
    hours: "16:00 — 00:00 daily",
    phone: "+000 000 0002",
  },
  {
    city: "Riverside Kiosk",
    brand: "Laban Story",
    address: "Riverside Walk, Kiosk 3",
    hours: "09:00 — 23:00 daily",
    phone: "+000 000 0003",
  },
  {
    city: "Mall of Placeholder",
    brand: "Laban Story",
    address: "Level 2, Food Promenade",
    hours: "10:00 — 22:00 daily",
    phone: "+000 000 0004",
  },
  {
    city: "Airport Terminal 3",
    brand: "Laban Story",
    address: "Departures Concourse, Unit 21",
    hours: "24 hours",
    phone: "+000 000 0005",
  },
];

function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Find the nearest tray"
        intro="Placeholder store directory. Replace with live addresses, map links and opening hours."
        image={storeInterior}
      />

      <Section>
        <SectionHeading
          eyebrow="Store directory"
          title="Where to find us"
          intro="Six placeholder locations across the Kunafa Story and Laban Story network."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store, i) => (
            <Reveal as="li" key={store.city} delay={i * 80} className="card-luxe p-7">
              <p className="eyebrow text-accent-foreground/60">{store.brand}</p>
              <h3 className="mt-3 text-xl">{store.city}</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {store.address}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {store.hours}
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {store.phone}
                </li>
              </ul>
              <a
                href="https://maps.google.com"
                className="mt-6 inline-block text-xs tracking-[0.2em] uppercase text-primary underline-offset-4 hover:underline"
              >
                Get directions
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-secondary/60">
        <Reveal className="overflow-hidden rounded-3xl border border-border">
          <div className="grid h-64 place-items-center bg-muted text-center md:h-80">
            <p className="px-6 text-sm text-muted-foreground">
              Map placeholder — embed an interactive store map here later.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
