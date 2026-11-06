export type NavItem = {
  href: "/" | "/work";
  label: string;
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
] as const satisfies readonly NavItem[];
