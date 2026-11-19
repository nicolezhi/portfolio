import { CaseStudyList } from "@/components/case-studies";
import { Container } from "@/components/ui";

export function FeaturedWork() {
  return (
    <section className="pb-section" aria-labelledby="featured-work-heading">
      <Container>
        <div className="mx-auto w-full max-w-work">
          <h2 id="featured-work-heading" className="mb-8 font-bootzy text-title tracking-normal">
            Work
          </h2>
          <CaseStudyList />
        </div>
      </Container>
    </section>
  );
}
