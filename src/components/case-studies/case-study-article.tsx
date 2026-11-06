import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyArticleProps = {
  study: CaseStudy;
  children?: ReactNode;
};

export function CaseStudyArticle({ study, children }: CaseStudyArticleProps) {
  const meta = [study.year, study.role].filter(Boolean).join(" · ");

  return (
    <article className="py-section">
      <Container className="max-w-reading">
        {meta ? <p className="text-meta text-muted">{meta}</p> : null}
        <h1 className="text-display">{study.title}</h1>
        <p className="mt-4 text-body text-muted">{study.summary}</p>
        {children ? <div className="mt-section">{children}</div> : null}
      </Container>
    </article>
  );
}
