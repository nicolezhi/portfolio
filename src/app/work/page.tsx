import type { Metadata } from "next";
import { CaseStudyList } from "@/components/case-studies";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <section className="py-section">
      <Container>
        <div className="mx-auto w-full max-w-work">
          <h1 className="font-bootzy text-display tracking-normal">Work</h1>
          <div className="mt-section">
            <CaseStudyList />
          </div>
        </div>
      </Container>
    </section>
  );
}
