import { FadeIn } from "@/components/animations";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export function HomeIntro() {
  return (
    <section className="grid min-h-[calc(100dvh-var(--spacing-header))] [grid-template-rows:1.2fr_auto_0.8fr]">
      <div />
      <Container>
        <FadeIn>
          <h1 className="mx-auto w-full max-w-work font-melodrame text-title font-normal leading-tight tracking-normal">
            {site.description}
          </h1>
        </FadeIn>
      </Container>
      <div />
    </section>
  );
}
