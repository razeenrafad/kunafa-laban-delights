import kunafaLogo from "@/assets/kunafa-logo.png.asset.json";
import labanLogo from "@/assets/laban-logo.png.asset.json";
import brandPattern from "@/assets/brand-pattern.png.asset.json";

export const logos = {
  kunafa: kunafaLogo.url,
  laban: labanLogo.url,
  pattern: brandPattern.url,
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/brands", label: "Brands" },
  { to: "/locations", label: "Locations" },
  { to: "/franchise", label: "Franchise" },
  { to: "/contact", label: "Contact" },
] as const;
