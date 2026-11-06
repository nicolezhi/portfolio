import { CaseStudyList } from "@/components/case-studies";
import { Container } from "@/components/ui";

export function FeaturedWork() {
  return (
    <section className="pb-section" aria-labelledby="featured-work-heading">
      <Container>
        <h2 id="featured-work-heading" className="mb-8 text-title">
          Work
        </h2>
        <CaseStudyList />
      </Container>
    </section>
  );
}
