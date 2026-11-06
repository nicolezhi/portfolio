import { FadeIn } from "@/components/animations";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export function HomeIntro() {
  return (
    <section className="py-section">
      <Container>
        <FadeIn>
          <h1 className="max-w-reading text-display">{site.name}</h1>
          <p className="mt-4 max-w-reading text-body text-muted">{site.description}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
