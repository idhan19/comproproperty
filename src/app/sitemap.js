import { SITE_URL, materialLogistik, publishedProjects } from '@/data/site';

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}${materialLogistik.slug}`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    ...publishedProjects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
    { url: `${SITE_URL}/profile`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
