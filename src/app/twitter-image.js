import { ogSize, renderOgImage } from "@/lib/og";
import { seo } from "@/data/site";

export const alt = seo.ogImageAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
