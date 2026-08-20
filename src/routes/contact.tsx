import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import menuSpread from "@/assets/menu-spread.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kunafa Story | Enquiries, Catering & Partnerships" },
      {
        name: "description",
        content:
          "Get in touch with Kunafa Story for catering, gifting, franchise and partnership enquiries. Placeholder contact details and form.",
      },
      { property: "og:title", content: "Contact Kunafa Story" },
      {
        property: "og:description",
        content: "Catering, gifting, franchise and partnership enquiries.",
      },
    ],
  }),
  component: ContactPage,
});

const topics = ["General", "Catering", "Franchise", "Partnership", "Careers"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello to Kunafa Story"
        intro="Placeholder contact page. The form is front-end only for now — we can wire it to real email or a database later."
        image={menuSpread}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Details</h2>
            <ul className="mt-8 space-y-6 text-sm text-muted-foreground">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-foreground">Head office</span>
                  Placeholder Address, Business Bay, City
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-foreground">Phone</span>+000 000 0000
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-foreground">Email</span>hello@kunafastory.com
                </span>
              </li>
              <li className="flex gap-4">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-foreground">Social</span>@kunafastory · @labanstory
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="card-luxe p-7 md:p-10">
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="eyebrow text-muted-foreground">Topic</span>
                <select
                  name="topic"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  {topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="eyebrow text-muted-foreground">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Tell us about your enquiry"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-8 py-4 text-xs tracking-[0.22em] uppercase text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                Send enquiry
              </button>
              {sent ? (
                <p className="text-center text-sm text-primary">
                  Thanks — this is a placeholder form, nothing was sent yet.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
