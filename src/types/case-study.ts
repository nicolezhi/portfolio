export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  year?: string;
  role?: string;
  tags?: string[];
  image?: {
    src: string;
    alt: string;
  };
};
