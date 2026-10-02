import { SITE_URL, materialLogistik } from '@/data/site';

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}${materialLogistik.slug}`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/profile`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
