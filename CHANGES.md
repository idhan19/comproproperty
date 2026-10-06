# Catatan Perubahan: Update Konten & UI

Branch: `update-konten-ui`

## Fase 0: Sumber konten tunggal

- Semua konten (kontak, WhatsApp, SEO, hero, visi, layanan, proyek, direksi, klien) dipindah ke `src/data/site.js`. Komponen hanya membaca dari file ini.
- Project memakai JavaScript, sehingga file data dibuat `.js` (bukan `.ts`) agar tidak perlu migrasi TypeScript.
- `src/data/projects.js` dihapus, isinya pindah ke `site.js` dengan nama field berbahasa Indonesia (`slug`, `judul`, `kategori`, `lokasi`, `deskripsi`, `foto`, `galeri`).
- Nomor dan pesan WhatsApp yang sebelumnya diduplikasi di 3 tempat sekarang dibuat lewat satu helper `waLink()`.
- Error lint lama (tanda kutip tanpa escape di Hero dan Footer, `<img>` di Navbar) diperbaiki.
- `turbopack.root` diset di `next.config.mjs` untuk menghilangkan warning lockfile ganda di folder induk.

## Fase 1: Positioning & SEO

- Title, meta description, headline, dan subheadline hero diganti sesuai brief. Tombol hero: "Konsultasi via WhatsApp" dan "Lihat Proyek".
- Metadata global di `layout.js`: `metadataBase`, template judul `%s | PT Ponco Munaro Utama`, `og:locale id_ID`, twitter card `summary_large_image`.
- `og:image` dan `twitter:image` 1200x630 dibuat otomatis saat build (`src/lib/og.js`) dari logo dan warna brand.
- Pesan WhatsApp prefilled diganti sesuai brief.
- Visi dipindah dari hero ke section Tentang Kami (`#about`). Footer kini memakai deskripsi perusahaan, bukan visi.
- `public/logo navbar.png` diganti nama menjadi `public/logo-navbar.png`.
- `/profile` kini halaman teks yang dirender di server (visi, misi, layanan, direksi, klien, kontak) dengan tombol unduh PDF.
- `sitemap.xml` diperbarui (sebelumnya mencantumkan `/projects` yang belum ada). `robots.txt` sudah ada.
- Token warna brand ditambahkan di `globals.css`. Merah logo diambil langsung dari file logo: `#FE0000` (bukan `#E1262D`). Karena kontrasnya terhadap putih hanya 4,0:1, tombol dan teks kecil memakai `#D10000` (5,7:1). Logo tidak memuat navy, jadi navy `#262A45` dan kuning `#FDDF6B` diambil dari brief.
- Font Geist Mono dan Playfair Display yang tidak terpakai dihapus.

## Fase 2: Section Layanan

- Empat layanan lama berbahasa Inggris diganti dengan enam kategori sesuai brief. `title` setiap layanan juga menjadi nama kategori proyek.
- Klaim yang tidak didukung data dihapus: Roads & Bridges, Drainage Systems, Steel Structure Assembly, Factory Foundation, Warehouse Systems, Site Acquisition, Maintenance Services, High Voltage Installation, dan "across Java".
- Kartu "Tracking Armada & Supplier Material" diberi label "Baru" dan menautkan ke `/layanan/material-logistik`.
- Subjudul section diganti sesuai brief.
- Komponen baru: `Services`, `SectionHeading`, dan `Icon` (pemetaan nama ikon di data ke lucide-react). `TechnicalCapabilities` dihapus.

## Fase 3: Halaman `/layanan/material-logistik`

- Halaman baru: hero, paragraf pengantar, 6 kartu "Layanan Kami", 6 "Keunggulan Layanan", strip "Komitmen Kami", dan CTA penutup. Semua teks diambil dari `materialLogistik` di `site.js`.
- Ikon memakai lucide-react. Tidak ada gambar stok. Slot foto diisi placeholder bergaris putus-putus.
- Tombol WhatsApp di halaman ini (termasuk tombol melayang) memakai pesan prefilled khusus material.
- Metadata title, description, canonical, dan Open Graph khusus halaman ini. Halaman ditambahkan ke sitemap.
- Komponen `WithPlaceholders` menyorot teks `[KONFIRMASI KLIEN: ...]` dengan latar kuning agar mudah ditemukan saat review preview.

## Fase 4: Data Proyek

- Data proyek ditulis ulang dengan field `slug`, `kategori`, `judul`, `lokasi`, `mitra` (opsional), `deskripsi`, `tahun`, `foto`, `galeri`, `unggulan`, `published`. Kategori sama persis dengan nama layanan Fase 2.
- 6 proyek unggulan tampil di beranda. Total 20 proyek tayang di halaman baru `/projects` (Semua Proyek) dengan filter kategori.
- Slug lama dipertahankan sehingga redirect tidak diperlukan: `pdam-network`, `electric-pole`, `transformer-installation`, `cubicle-installation`, `electrical-installation`.
- Pemetaan foto lama: kubikel ke Pemasangan Kubikel (Smelting Karawang); trafo ke Gardu Trafo & Panel (Alun-Alun Depok); PDAM ke Jaringan Air PDAM; tiang listrik ke jaringan listrik Hawtha Inat Tajur Halang; instalasi listrik ke jaringan listrik Puri Griasadi Cikande. Proyek baru tanpa dokumentasi menampilkan ikon kategori dengan teks "Dokumentasi menyusul".
- "Pengadaan Genset" disembunyikan (`published: false`). URL `/projects/genset-procurement` kini 404 sampai proyek ini ditampilkan lagi.
- `/projects/[slug]` kini server component dengan halaman statis (`generateStaticParams`) serta title, description, dan og:image per proyek.
- Dihapus karena tidak didukung data: deskripsi detail lama (survei hidrogeologi, standar PUIL/SLO, MVMDP 20kV, tiang TR/TM, dll.), serta teks "Completed on time and within budget", "High-quality materials", "Full safety compliance (K3)", "Industrial Partner", dan status "Completed".
- Lokasi hanya ditulis sebatas yang ada di brief atau data lama. Kabupaten/kota tidak ditambahkan bila tidak disebutkan (contoh: Cihoe, Cijeruk, Tamansari, Ciampea).

## Fase 5: Tentang Kami, Struktur, Legalitas, Klien

- Section Tentang Kami (`#about`) baru: deskripsi perusahaan, visi (ejaan dirapikan), 3 butir misi, tombol "Unduh Company Profile", Direksi & Komisaris (dengan foto), serta Tim Manajemen (nama dan jabatan, tanpa foto).
- Nama direksi diperbarui: "Sarah Nadia, S.H., M.Kn."; gelar M. Saoma Gofur ditandai untuk konfirmasi.
- Section baru "Legalitas dan Sertifikasi" (`#legalitas`). Yang tampil hanya kartu ISO 9001 (tanpa tahun versi standar). Kartu Badan Hukum, NIB, dan KBLI sudah ada di data tetapi `published: false`. Sudah diverifikasi: nomor AHU, NIB, dan KBLI tidak muncul di HTML.
- Klien & Mitra kini section tersendiri (`#klien`) berupa grid nama tanpa tautan. Sebelumnya nama klien di footer menautkan ke `#services`, `#projects`, dan `#about`. PT Helgalara Arutala Indonesia ditambahkan dengan tanda konfirmasi. Field `logo` sudah disiapkan bila logo klien tersedia.
- Tombol unduh company profile kini mengarah ke `/company-profile-pmu.pdf`. Logika redirect di `next.config.mjs`:
  - Selama file revisi belum ada, `/company-profile-pmu.pdf` diarahkan (307) ke `/profile-File.pdf`. Sudah dites.
  - Setelah `public/company-profile-pmu.pdf` ditambahkan dan di-build ulang, `/profile-File.pdf` otomatis diarahkan (308) ke file baru. File lama boleh dihapus setelah itu.
- Footer ditulis ulang dalam Bahasa Indonesia: profil singkat, navigasi, daftar layanan, dan kontak (telepon, email, WhatsApp bisa diklik).
- `public/file profile.pdf` (50 MB, tidak dipakai di mana pun) dihapus.
- `/profile` kini juga memuat Tim Manajemen dan Legalitas.

## Fase 6: UI

- Folder project Arthaloka tidak tersedia (path di brief masih placeholder), sehingga desain mengikuti arahan brief.
- Navbar glass: melayang, latar putih semi transparan dengan `backdrop-filter: blur`, mengecil saat scroll. Menu mobile berupa drawer dari kanan (kunci scroll, tutup dengan Escape/klik latar, fokus dikelola, `aria-expanded`).
- Hero: foto proyek nyata (`Trafo3.jpeg`, gardu trafo Alun-Alun Depok) via `next/image` dengan overlay navy gelap; tipografi besar. Foto stok Unsplash dihapus (beserta `remotePatterns` di `next.config.mjs`).
- Strip statistik di bawah hero: Proyek Tercatat, 5 Provinsi, ISO 9001, 6 Lini Layanan.
  - **Catatan:** brief menulis "18 Proyek Tercatat", tetapi daftar proyek di brief berjumlah 20 proyek tayang (21 dengan genset). Angka sekarang dihitung otomatis dari data (`publishedProjects.length` = 20) agar tidak bertentangan dengan halaman Semua Proyek. Lihat daftar konfirmasi.
- Kartu layanan dan proyek: sudut membulat, border tipis, hover naik halus. Section berselang-seling putih/abu-abu muda.
- Semua komponen kecuali Navbar, filter proyek, dan tombol WhatsApp melayang kini server component (framer-motion tidak dipakai lagi).
- Aksesibilitas: alt text deskriptif di semua gambar, `focus-visible` outline merah, `prefers-reduced-motion`, breadcrumb dengan `aria-current`, filter proyek dengan `aria-pressed`. Teks putih di atas tombol memakai `#D10000` (kontras 5,7:1).
- Halaman 404 kustom berbahasa Indonesia (`src/app/not-found.js`).
- Dicek dengan screenshot di lebar 375, 768, dan 1280 px: beranda, `/projects`, detail proyek, dan `/layanan/material-logistik`. Tidak ada scroll horizontal.
- **Atribusi foto proyek diperbaiki berdasarkan cap lokasi dan isi foto:**
  - `Trafo1.jpeg` (= `instalasilistrik.jpeg`) bercap "Puri Griasadi, Kec. Tamansari, Kab. Bogor, 31 Jul 2025". Foto ini dipindah dari Gardu Trafo Depok dan Jaringan Listrik Cikande ke **Jaringan Listrik Puri Griasadi Tamansari**.
  - `INSLISTRIK2.jpeg` bercap "Kecamatan Cijeruk". Dipindah dari Cikande ke **Jaringan Listrik Puri Griasadi 3 Cijeruk**.
  - `INSLISTRIK3.jpeg` menampilkan erection tower BTS SST. Dipindah dari Cikande ke **Pembangunan Tower BTS SST**.
  - `PDAM1.jpeg` menampilkan mesin bor sumur, bukan jaringan PDAM. Sampul proyek PDAM diganti `PDAMProject2.jpeg`. `PDAM1.jpeg` kini tidak dipakai.
  - Jaringan Listrik Cikande kini tanpa foto. `INSLISTRIK1.jpeg` (instalasi conduit dalam gedung) tidak dipakai karena tidak jelas proyeknya.
  - Duplikat dihapus dari galeri: `Trafo2` (= `trafopanel`), `kubikel1` (= `kubikel`), `tiang2` (= `tianglistrik`).
  - Foto "Genset" (proyek disembunyikan) berisi panel/MCB, bukan unit genset.

## Revisi: Latar bergradasi per bagian

Atas masukan bahwa latar putih terlalu polos, setiap bagian beranda kini memakai gradasi warna brand dan berselang-seling gelap/terang seperti desain lama:

| Bagian | Latar |
|---|---|
| Beranda (hero) | Foto proyek + overlay navy dengan rona merah |
| Layanan | Gradasi navy muda ke merah muda, pola grid halus |
| Proyek | Gradasi navy gelap, pola titik, cahaya merah |
| Tentang Kami | Gradasi hangat merah muda, krem, navy muda |
| Legalitas | Gradasi navy, cahaya merah |
| Klien | Gradasi navy muda ke merah muda, pola grid |
| Kontak (footer) | Gradasi navy gelap, garis aksen merah ke kuning di atas |

- Komponen baru `SectionBackdrop` untuk pola dan cahaya dekoratif (`aria-hidden`).
- Kartu tetap putih agar teks terbaca. Placeholder foto proyek memakai gradasi navy ke merah agar tidak tenggelam di latar navy.

## Revisi: Warna disederhanakan dan animasi

Atas masukan bahwa gradasi berwarna terlalu ramai, latar dikembalikan ke tone sebelumnya (putih, abu-abu muda `surface`, navy) dengan gradasi sederhana dua warna. Pola grid/titik, cahaya warna-warni, nuansa pink/krem, dan rona merah di hero dihapus (komponen `SectionBackdrop` dihapus).

Animasi terinspirasi dari binanusa.co.id (tema Flatsome: `flipInY`, `blurIn`, `fadeInRight`, parallax, slider mitra), dibuat ulang tanpa library baru:

| Animasi | Dipakai di |
|---|---|
| Teks hero masuk bertahap (geser + blur) | Hero |
| Zoom lambat (Ken Burns) + parallax foto | Hero |
| Angka menghitung naik | Strip statistik |
| Judul section naik + garis aksen memanjang | Semua judul section |
| Kartu berputar masuk (flip-in-y), bergiliran | Layanan, Direksi, Legalitas, kartu layanan material |
| Kartu muncul dari blur (blur-in), bergiliran | Proyek unggulan, halaman Semua Proyek (diputar ulang saat filter diganti) |
| Marquee berjalan, berhenti saat hover | Klien dan Mitra |
| Hover: kartu naik, ikon berputar dan berganti warna, foto zoom | Kartu layanan, proyek, direksi, legalitas, tombol |
| Garis progres scroll di atas halaman | Semua halaman (browser yang mendukung) |

Catatan teknis:
- Komponen baru di `src/components/motion/`: `Reveal` (IntersectionObserver), `CountUp`, `Parallax`. Definisi animasi ada di `globals.css`.
- Elemen hanya disembunyikan sebelum animasi bila JavaScript aktif (kelas `js` di `<html>`). Tanpa JS, semua konten tetap tampil. Teks tetap ada di HTML (aman untuk SEO).
- Semua animasi dimatikan bila pengunjung mengaktifkan "kurangi gerakan" (`prefers-reduced-motion`). Marquee berubah menjadi daftar biasa.
- Diuji di Edge sungguhan (waktu nyata) di lebar 1280 dan 375 px: 34 dari 34 elemen animasi muncul setelah di-scroll, angka statistik berakhir di nilai yang benar.

## Revisi: Dokumentasi foto dan video dari klien

Sumber: folder unduhan Google Drive (Supplier Pasir Silika & Tanah Clay, video drive, Mechanical Electrical, Sumur Bor/PAM Mandiri/PDAM), 67 file. Pencocokan memakai cap lokasi/tanggal pada foto (GPS Map Camera, Timemark) dan kesamaan kegiatan dengan foto yang sudah ada. Data EXIF GPS kosong.

| Aset | Bukti | Dipasang di |
|---|---|---|
| 4 foto lokasi sumber material | Cap: Kec. Bayah, Kab. Lebak, Banten, 12 Agu 2026 | Galeri `/layanan/material-logistik` |
| 2 foto armada dump truck bermuatan material | Folder supplier | Foto utama dan galeri halaman material (menggantikan placeholder) |
| 1 foto sampel material | Cap: Kab. Lebak, 1 Sep 2026 | Galeri halaman material |
| 2 video pemuatan material (H.264, 7 dan 8 MB) | Cap video: Kec. Bayah, Kab. Lebak | Section Dokumentasi Lapangan halaman material |
| 5 foto inspeksi PDAM (Agu 2024) | Kegiatan dan orang yang sama dengan `PDAMProject1-3` (spanduk BTN, papan tulis) | Galeri proyek Jaringan Air PDAM Puri Griasadi Ciseeng |
| 2 foto tiang dan kWh meter | Cap: Jl. Tangkil, Sukaluyu, Kec. Tamansari, Kab. Bogor (Jun dan Sep 2026) | Galeri proyek Jaringan Listrik Puri Griasadi Tamansari; lokasi proyek dilengkapi "Bogor" |
| 12 foto lain | Lokasi dari cap, proyek belum jelas | Section baru "Dokumentasi Lapangan" di `/projects`, per kategori layanan |

- Foto diperkecil ke maks. 1600 px (JPEG kualitas 80, tanpa EXIF): dari 4-8 MB menjadi 100-550 KB. Total aset baru: foto 8,5 MB, video 15 MB.
- Keterangan foto hanya memuat lokasi dan tanggal dari cap. Nama proyek tidak ditebak.
- Komponen baru: `Gallery` (grid + lightbox, navigasi panah/keyboard, Esc untuk menutup) dan `VideoCard` (video dimuat saat diputar). Galeri halaman detail proyek kini juga memakai lightbox.
- Tidak dipakai: 2 video promosi jual mesin bor (berisi harga, produk di luar daftar layanan), video yang tampak tambang batu bara, video malam yang gelap, dan foto duplikat.
- Perbaikan: kelas kaca (`glass-dark`, `glass-light`) dipindah ke `@layer components` agar `absolute` dari Tailwind tidak tertimpa (sebelumnya tombol lightbox dan menu mobile salah posisi).
- Folder aset mentah ditambahkan ke `.gitignore`.

## Revisi: Foto tambahan dari klien (folder per kategori)

- **Supplier Tanah Clay dan Pasir Silika:** 3 dari 8 foto adalah duplikat foto yang sudah terpasang (dicek dengan hash gambar). 5 foto baru masuk galeri halaman Material dengan keterangan sesuai label folder klien.
- **Pengadaan PAM Mandiri & PDAM:** 2 foto adalah jepretan lain dari inspeksi PDAM Agustus 2024 dan masuk galeri proyek PDAM Ciseeng. 3 foto baru (uji tekanan pipa, pemasangan boks meter) masuk Dokumentasi Lapangan. 1 foto identik dengan `tianglistrik.jpeg`, sehingga atribusi lama di proyek Hawtha Inat diperbaiki (lihat konfirmasi no. 23).
- **Cut And Fill:** 4 foto dipasang ke proyek Cut and Fill Puri Griasadi 3 Cijeruk (sampul + galeri).
- **Rumah Subsidi Bogor:** 1 foto lapangan dipasang ke proyek Rumah Subsidi Bumi Griasadi Ciseeng. 4 brosur pemasaran Rumaji (render, harga, QR) tidak dipakai karena merupakan materi iklan developer, bukan dokumentasi pekerjaan.
- Proyek tanpa foto berkurang dari 13 menjadi 11.

## Revisi: Ilustrasi sementara untuk proyek tanpa foto

- 6 ilustrasi vektor (SVG, warna brand) di `public/ilustrasi/`: jaringan listrik perumahan, sumur bor, gardu trafo dan panel industri, kafe dan food court, pengadaan lahan, perizinan.
- Dipasang ke 11 proyek tanpa foto lewat peta `ILUSTRASI` di `site.js`. Kartu menampilkan label "Ilustrasi" agar tidak dikira dokumentasi asli.
- Sengaja tidak memakai foto stok atau gambar AI realistis, karena bisa dikira foto proyek (melanggar aturan tidak mengarang data).
- Begitu `foto` proyek diisi, ilustrasinya otomatis tidak dipakai lagi.

## Revisi: Penghapusan atas permintaan klien

Data tetap disimpan di `site.js` agar mudah ditampilkan lagi.

- Kartu ISO 9001 disembunyikan (`published: false`). Karena tidak ada kartu legalitas lain yang tayang, section Legalitas dan Sertifikasi ikut hilang di beranda dan `/profile`. Angka "ISO 9001" di strip statistik juga dihapus dan diganti "Klien & Mitra" (dihitung otomatis dari daftar klien).
- Tim Manajemen disembunyikan dari beranda dan `/profile` lewat saklar `showManagement = false`.
- Proyek Kafe & Food Court Tempat Nongkrong disembunyikan (`published: false`). Halaman `/projects/kafe-food-court-tempat-nongkrong` kini 404 dan proyek ini keluar dari sitemap. Jumlah proyek di statistik otomatis menjadi 19.

## Fase 7: Pengecekan akhir

- `npm run build` dan `npm run lint` lolos tanpa error dan warning.
- Crawl otomatis di build produksi lokal:
  - 27 URL internal (beranda, layanan, semua proyek, 20 detail proyek, profile, PDF) seluruhnya 200. `/company-profile-pmu.pdf` 307 ke file lama sesuai rencana.
  - 409 rujukan anchor dicek. `#services`, `#projects`, `#about`, `#kontak` (serta `#legalitas`, `#klien`) tersedia di beranda. Navbar memakai `/#...` sehingga tetap berfungsi dari halaman lain.
  - Tidak ada em dash di teks website.
  - Teks berbahasa Inggris yang tersisa hanya istilah dari brief ("cut and fill", "tracking", "supplier", dll.) dan ruang lingkup sertifikat ISO ("Construction of Mechanical and Electrical Installations").
- `sitemap.xml` berisi 24 URL. `robots.txt` mengizinkan semua dan menunjuk ke sitemap.
- Dependensi `framer-motion` tidak dipakai lagi, tetapi belum dihapus dari `package.json` (opsional: `npm uninstall framer-motion`).

## Daftar [KONFIRMASI KLIEN]

Semua placeholder berada di `src/data/site.js`. Cari teks `KONFIRMASI KLIEN` untuk menemukannya.

| No | Lokasi | Yang perlu dikonfirmasi |
|---|---|---|
| 1 | ~~`/layanan/material-logistik`, slot foto~~ | Selesai: diisi foto armada dari dokumentasi klien |
| 2 | `/layanan/material-logistik`, kartu Supplier Batu Bara | Legalitas perdagangan batu bara sebelum tayang |
| 3 | Proyek "Pemasangan Trafo 1 MW & Panel" | Apakah "Ipmdp" di company profile maksudnya LVMDP? |
| 4 | Semua proyek, field `tahun` | Tahun pelaksanaan setiap proyek (sekarang `null`, tidak ditampilkan) |
| 5 | Proyek "Pengadaan Lahan untuk PT Puri Angkasa Permata" | Lokasi proyek (sekarang kosong) |
| 6 | Proyek "Pengadaan Genset" (`published: false`) | Lokasi dan dokumentasi sebelum ditampilkan |
| 7 | Proyek tanpa foto (14 dari 20) | Dokumentasi foto proyek |
| 8 | Visi (`about.visi`) | Teks resmi visi; hanya ejaan yang dirapikan dari company profile |
| 9 | Direksi: M. Saoma Gofur | Gelar yang benar: Lc atau S.Pd |
| 10 | Legalitas: ISO 9001 | Versi standar pada sertifikat (sekarang ditulis "ISO 9001" saja) |
| 11 | Legalitas: Badan Hukum, NIB, KBLI (`published: false`) | Izin klien untuk menampilkan data ini di website |
| 12 | Klien: PT Helgalara Arutala Indonesia | Izin menampilkan nama |
| 13 | `public/company-profile-pmu.pdf` | File company profile revisi (sementara memakai file lama lewat redirect) |
| 14 | Statistik "Proyek Tercatat" | Brief menulis 18, data proyek di brief berjumlah 20. Mana yang benar? |
| 15 | Atribusi foto proyek (lihat Fase 6) | Pemindahan foto berdasarkan cap lokasi: Tamansari, Cijeruk, Tower BTS, PDAM |
| 16 | `PDAM1.jpeg`, `INSLISTRIK1.jpeg` | Foto ini milik proyek mana? (sekarang tidak dipakai) |
| 17 | Proyek Genset | Foto yang ada berisi panel/MCB, bukan genset |
| 18 | Dokumentasi Lapangan di `/projects` | Proyek untuk: gardu trafo Jl. Raya Pabuaran Kemang (Agu 2026), rangka baja Parakan Jaya Kemang (Jun 2025), tiang listrik Cibeuteung Muara Ciseeng (Mei 2026), jaringan listrik Kemang (Mei 2026), jaringan air Ciseeng (Jul 2025), foto sumur bor dan pemasangan jaringan tanpa cap lokasi |
| 19 | Dokumentasi material | Jenis material pada foto sumber material Bayah dan sampel Lebak (pasir silika, tanah clay, atau limestone?) |
| 20 | Video tambang (drive `VID-20260911-WA0008`) | Tampak seperti tambang batu bara; tidak dipakai sampai legalitas perdagangan batu bara dikonfirmasi |
| 21 | Foto proyek Rumah Subsidi Bumi Griasadi Ciseeng | Foto dari folder "Rumah Subsidi Bogor" dipasang ke proyek ini (satu-satunya proyek rumah subsidi). Benar Bumi Griasadi Ciseeng, atau perumahan lain (brosur di folder menyebut Puri Griasadi Kemang dan Griasadi 6)? |
| 22 | Foto proyek Cut and Fill Puri Griasadi 3 Cijeruk | Foto dari folder "Cut And Fill" dipasang ke proyek ini (satu-satunya proyek cut and fill). Benar lokasinya Cijeruk? |
| 23 | Proyek Jaringan Listrik Hawtha Inat Tajur Halang | `tianglistrik.jpeg` (sampul lama) ternyata ada di folder PAM/PDAM klien dan isinya inspeksi berompi PDAM, jadi dipindah ke galeri PDAM Ciseeng. Sampul kini `tiang1.jpeg`. Apakah `tiang1` dan `tiang3` benar dari Hawtha Inat? |
