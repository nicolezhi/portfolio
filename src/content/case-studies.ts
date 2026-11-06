import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
