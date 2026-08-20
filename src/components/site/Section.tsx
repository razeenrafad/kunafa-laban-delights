import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${tone === "dark" ? "text-accent" : "text-primary/60"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl ${
          tone === "dark" ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 md:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="surface-navy relative overflow-hidden">
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
        <Reveal>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-primary-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
