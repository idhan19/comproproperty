export default function robots() {
  const baseUrl = 'https://www.ptponcoutama.com'; // ganti dengan domain kamu

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [], // Tidak ada halaman yang diblokir
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
