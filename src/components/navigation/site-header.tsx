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
    <header className="bg-background">
      <Container>
        <div className="mx-auto flex h-header w-full max-w-work items-center justify-between gap-gutter">
        <Link
          href="/"
          className="font-melodrame text-title font-normal leading-none tracking-normal"
          onClick={() => setOpen(false)}
        >
          {site.mark}
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
        </div>
      </Container>
      {open ? (
        <Container id="mobile-navigation" className="pb-gutter md:hidden">
          <div className="mx-auto w-full max-w-work">
          <SiteNav
            items={primaryNav}
            className="flex-col items-start gap-4"
            onNavigate={() => setOpen(false)}
          />
          </div>
        </Container>
      ) : null}
    </header>
  );
}
