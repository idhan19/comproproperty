// process.cwd(): perintah next selalu dijalankan dari folder project. import.meta.dirname
// tidak bisa dipakai karena saat `next dev` bernilai folder lain.
const projectRoot = process.cwd();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ada package-lock.json lain di folder induk; kunci root project ke folder ini.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
