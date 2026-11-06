"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui";
import { primaryNav } from "@/lib/navigation";
import { site } from "@/lib/site";
import { SiteNav } from "./site-nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <Container className="flex h-header items-center justify-between gap-gutter">
        <Link href="/" className="text-body font-medium" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <div className="hidden md:block">
          <SiteNav items={primaryNav} />
        </div>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </Container>
      {open ? (
        <Container id="mobile-navigation" className="pb-gutter md:hidden">
          <SiteNav
            items={primaryNav}
            className="flex-col items-start gap-4"
            onNavigate={() => setOpen(false)}
          />
        </Container>
      ) : null}
    </header>
  );
}
