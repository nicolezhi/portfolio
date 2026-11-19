import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <Container>
        <div className="mx-auto flex h-header w-full max-w-work items-center justify-end text-muted">
          <p className="flex items-center gap-2 text-body">
            <span>Say hello —</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">|</span>
            <a href={`mailto:${site.email}`} className="underline">
              Email
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
