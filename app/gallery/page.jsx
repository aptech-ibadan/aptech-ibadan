import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery",
  description:
    "A showcase of student moments, practical sessions, achievements and centre life at Aptech Ibadan.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Aptech Ibadan",
    description:
      "A showcase of student moments, practical sessions and campus life at Aptech Ibadan.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
