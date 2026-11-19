import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CaseStudyArticle } from "@/components/case-studies";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense
      fallback={
        <p className="px-gutter py-section text-meta text-muted">Loading case study…</p>
      }
    >
      <CaseStudyContent params={params} />
    </Suspense>
  );
}

async function CaseStudyContent({
  params,
}: Pick<PageProps<"/work/[slug]">, "params">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyArticle study={study} />;
}
