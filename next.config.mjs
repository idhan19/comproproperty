import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Company profile PDF. Begitu file revisi `public/company-profile-pmu.pdf`
// ditambahkan, link lama /profile-File.pdf otomatis diarahkan ke file baru.
// Sebelum itu, /company-profile-pmu.pdf diarahkan ke file lama.
const NEW_PDF = '/company-profile-pmu.pdf';
const OLD_PDF = '/profile-File.pdf';
// process.cwd(): perintah next selalu dijalankan dari folder project. import.meta.dirname
// tidak bisa dipakai karena saat `next dev` bernilai folder lain.
const projectRoot = process.cwd();
const hasNewPdf = existsSync(join(projectRoot, 'public', NEW_PDF));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ada package-lock.json lain di folder induk; kunci root project ke folder ini.
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      hasNewPdf
        ? { source: OLD_PDF, destination: NEW_PDF, permanent: true }
        : { source: NEW_PDF, destination: OLD_PDF, permanent: false },
    ];
  },
};

export default nextConfig;
