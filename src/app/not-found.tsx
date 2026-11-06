import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-section">
      <h1 className="text-title">Page not found</h1>
      <p className="mt-3 text-body text-muted">That page is not available.</p>
      <Link href="/" className="mt-6 inline-block text-body">
        Back home
      </Link>
    </Container>
  );
}
