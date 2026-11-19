export type NavItem = {
  href: "/work" | "/about" | "/play" | "/resume";
  label: string;
};

export const primaryNav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/play", label: "Play" },
  { href: "/resume", label: "Resume" },
] as const satisfies readonly NavItem[];
