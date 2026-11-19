import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <section className="py-section">
      <Container>
        <div className="mx-auto w-full max-w-work">
          <h1 className="font-bootzy text-display tracking-normal">Resume</h1>
        </div>
      </Container>
    </section>
  );
}
