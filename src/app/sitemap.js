import { SITE_URL } from '@/data/site';

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/profile`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
