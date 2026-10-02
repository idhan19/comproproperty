import { SITE_URL } from '@/data/site';

export default function robots() {
  const baseUrl = SITE_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [], // Tidak ada halaman yang diblokir
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
