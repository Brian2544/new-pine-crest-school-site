import { createMetadata } from "@/lib/seo";
import { GalleryShowcase } from "./GalleryShowcase";

export const metadata = createMetadata({
  title: "Gallery",
  description:
    "Explore Pine Crest School Ruiru through photos of academics, sports, cultural activities, modern facilities, events, and everyday school life.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryShowcase />;
}
