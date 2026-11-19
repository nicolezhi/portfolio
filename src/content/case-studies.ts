import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    slug: "project-01",
    title: "Project title",
    summary: "One or two lines about the problem, your role, and the outcome.",
    tags: ["Product design", "Research"],
  },
  {
    slug: "project-02",
    title: "Project title",
    summary: "One or two lines about the problem, your role, and the outcome.",
    tags: ["Interaction", "Prototype"],
  },
  {
    slug: "project-03",
    title: "Project title",
    summary: "One or two lines about the problem, your role, and the outcome.",
    tags: ["Systems", "Desktop"],
  },
  {
    slug: "project-04",
    title: "Project title",
    summary: "One or two lines about the problem, your role, and the outcome.",
    tags: ["Mobile", "Concept"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
