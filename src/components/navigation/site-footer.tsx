import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex h-header items-center">
        <p className="text-meta text-muted">{site.name}</p>
      </Container>
    </footer>
  );
}
