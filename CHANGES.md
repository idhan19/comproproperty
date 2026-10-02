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

## Daftar [KONFIRMASI KLIEN]

Semua placeholder berada di `src/data/site.js`. Cari teks `KONFIRMASI KLIEN` untuk menemukannya.

| No | Lokasi | Yang perlu dikonfirmasi |
|---|---|---|
| 1 | `/layanan/material-logistik`, slot foto | Foto armada/material milik perusahaan |
| 2 | `/layanan/material-logistik`, kartu Supplier Batu Bara | Legalitas perdagangan batu bara sebelum tayang |
| 3 | Proyek "Pemasangan Trafo 1 MW & Panel" | Apakah "Ipmdp" di company profile maksudnya LVMDP? |
| 4 | Semua proyek, field `tahun` | Tahun pelaksanaan setiap proyek (sekarang `null`, tidak ditampilkan) |
| 5 | Proyek "Pengadaan Lahan untuk PT Puri Angkasa Permata" | Lokasi proyek (sekarang kosong) |
| 6 | Proyek "Pengadaan Genset" (`published: false`) | Lokasi dan dokumentasi sebelum ditampilkan |
| 7 | Proyek tanpa foto (14 dari 20) | Dokumentasi foto proyek |
