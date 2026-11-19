import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article>
      <Link href={`/work/${study.slug}`} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
          {study.image ? (
            <Image
              src={study.image.src}
              alt={study.image.alt}
              fill
              sizes="(min-width: 768px) 27rem, 100vw"
              className="object-cover"
            />
          ) : null}
        </div>
        <h3 className="mt-3 text-body font-medium leading-tight">{study.title}</h3>
        <p className="mt-0.5 text-meta leading-snug text-muted">{study.summary}</p>
      </Link>
    </article>
  );
}
