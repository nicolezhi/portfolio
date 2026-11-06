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
        <h1 className="text-display">Work</h1>
        <div className="mt-section">
          <CaseStudyList />
        </div>
      </Container>
    </section>
  );
}
