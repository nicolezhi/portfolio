import { caseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "./case-study-card";

export function CaseStudyList() {
  if (caseStudies.length === 0) {
    return <p className="text-meta text-muted">No case studies yet.</p>;
  }

  return (
    <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
      {caseStudies.map((study) => (
        <li key={study.slug}>
          <CaseStudyCard study={study} />
        </li>
      ))}
    </ul>
  );
}
