import Link from "next/link";
import { caseStudies } from "@/content/case-studies";

export function CaseStudyList() {
  if (caseStudies.length === 0) {
    return <p className="text-meta text-muted">No case studies yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-8">
      {caseStudies.map((study) => {
        const meta = [study.year, study.role].filter(Boolean).join(" · ");

        return (
          <li key={study.slug}>
            <Link href={`/work/${study.slug}`} className="block">
              {meta ? <p className="text-meta text-muted">{meta}</p> : null}
              <h3 className="text-title">{study.title}</h3>
              <p className="mt-2 max-w-reading text-body text-muted">{study.summary}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
