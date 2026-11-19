import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Play",
};

export default function PlayPage() {
  return (
    <section className="py-section">
      <Container>
        <div className="mx-auto w-full max-w-work">
          <h1 className="font-bootzy text-display tracking-normal">Play</h1>
        </div>
      </Container>
    </section>
  );
}
