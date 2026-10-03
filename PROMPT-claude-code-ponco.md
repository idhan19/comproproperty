# Brief untuk Claude Code: Update Konten & UI Website PT Ponco Munaro Utama

Simpan file ini di root project sebagai `BRIEF.md`, lalu di Claude Code ketik:
"Baca BRIEF.md dan kerjakan sesuai aturan kerja di dalamnya. Mulai dari Fase 0."

---

## Konteks

Website company profile PT Ponco Munaro Utama (ptponcoutama.com). Dibangun dengan Next.js, di-deploy ke Vercel lewat GitHub.
Tugas kita: memperbarui konten (positioning, layanan, proyek, legalitas) dan UI (mengadopsi gaya visual project Arthaloka dengan warna brand PMU), serta menambahkan layanan baru "Tracking Armada & Supplier Material".

## Aturan kerja (wajib)

1. Sebelum mengedit apa pun, pelajari struktur project lalu laporkan: versi Next.js, App Router atau Pages Router, cara styling (Tailwind, CSS Module, dll), lokasi konten (hardcode di komponen atau file data), daftar route, dan isi folder `public`.
2. Susun rencana perubahan per fase dan tunggu persetujuan saya sebelum mulai menulis kode.
3. Kerjakan di branch baru `update-konten-ui`. Jangan push ke `main` dan jangan menjalankan deploy.
4. Jangan mengarang data apa pun (angka, tahun, nama klien, sertifikat, foto). Jika butuh data yang belum tersedia, tulis placeholder `[KONFIRMASI KLIEN: ...]` lalu catat di `CHANGES.md`.
5. Setiap fase selesai, jalankan `npm run build` dan `npm run lint`, pastikan tanpa error, lalu commit dengan pesan yang jelas.
6. Semua teks website memakai Bahasa Indonesia baku. Jangan pakai em dash.
7. Jangan pernah menampilkan KTP, NIK, NPWP pribadi, atau isi akta notaris di website.

---

## Fase 0: Rapikan sumber konten

Pindahkan semua konten (layanan, proyek, direksi, klien, legalitas, kontak, statistik) ke satu file data bertipe TypeScript, misalnya `src/data/site.ts` (sesuaikan dengan struktur project). Komponen cukup membaca dari file ini supaya update berikutnya hanya edit satu tempat.

## Fase 1: Positioning & SEO

- Title: `PT Ponco Munaro Utama | Kontraktor Konstruksi, Mekanikal Elektrikal & Supplier Material`
- Meta description: `PT Ponco Munaro Utama adalah perusahaan jasa konstruksi di Kabupaten Bogor yang melayani pembangunan perumahan, instalasi mekanikal elektrikal, infrastruktur air bersih, tower telekomunikasi, pekerjaan tanah, serta tracking armada dan supplier material.`
- Hero headline: `Mitra Konstruksi dan Infrastruktur untuk Proyek Anda`
- Hero subheadline: `Dari pembangunan perumahan, jaringan listrik, sumur bor, hingga pasokan material dan logistik proyek, semuanya kami kerjakan dalam satu atap.`
- Tombol hero: "Konsultasi via WhatsApp" dan "Lihat Proyek".
- Kalimat visi dipindah dari hero ke section Tentang Kami.
- Pesan WhatsApp prefilled diganti menjadi: `Halo PT Ponco Munaro Utama, saya tertarik berkonsultasi mengenai layanan [Konstruksi/Listrik/Sumur Bor/Material & Logistik]. Mohon informasi prosedur dan estimasi biayanya. Terima kasih.`
- Tambahkan `og:image` ukuran 1200x630 (buat dari logo dan warna brand) dan ubah twitter card menjadi `summary_large_image`.
- Ganti nama file `public/logo navbar.png` menjadi `public/logo-navbar.png` dan perbarui semua referensinya.
- Halaman `/profile` harus berisi konten teks yang di-render di server (bukan hanya tombol PDF) agar terbaca mesin pencari.
- Tambahkan `sitemap.xml` dan `robots.txt` bila belum ada.

## Fase 2: Section Layanan (6 kategori)

Ganti isi layanan lama dengan enam kategori di bawah. Hapus klaim yang tidak didukung data perusahaan: Roads & Bridges, Drainage Systems, Steel Structure Assembly, Factory Foundation, Warehouse Systems, Site Acquisition, Maintenance Services, High Voltage Installation, dan frasa "across Java".

1. **Konstruksi Bangunan**
   Pembangunan perumahan subsidi dan komersil serta bangunan usaha seperti kafe dan food court.
   Poin: Rumah subsidi & komersil, Bangunan komersial, Pekerjaan struktur & finishing.
2. **Mekanikal & Elektrikal**
   Pengadaan jaringan listrik perumahan, pemasangan gardu trafo, panel, dan kubikel untuk kebutuhan hunian maupun industri.
   Poin: Jaringan listrik jalur udara, Gardu trafo & panel (hingga 1 MW), Pemasangan kubikel.
3. **Infrastruktur Air Bersih**
   Pembuatan sumur bor dan pengadaan jaringan air PDAM untuk kawasan perumahan dan fasilitas publik.
   Poin: Sumur bor, Jaringan air PDAM, Instalasi pompa.
4. **Telekomunikasi**
   Pembangunan tower BTS tipe SST untuk mendukung jaringan telekomunikasi.
   Poin: Tower BTS SST-42, SST-52, SST-62, Pekerjaan pondasi tower, Erection tower.
5. **Pekerjaan Tanah & Pengembangan Lahan**
   Pekerjaan cut and fill, pengadaan lahan, dan pendampingan perizinan untuk pengembang perumahan.
   Poin: Cut and fill, Pengadaan lahan, Pengurusan perizinan perumahan.
6. **Tracking Armada & Supplier Material** (BARU, beri label "Baru")
   Pengadaan material dan pemantauan armada pengiriman dari sumber material sampai lokasi proyek.
   Poin: Tracking armada, Supplier material, Jasa pengurugan.
   Kartu ini menautkan ke halaman `/layanan/material-logistik`.

Ganti subjudul section menjadi: `Layanan kami mencakup konstruksi, mekanikal elektrikal, infrastruktur, hingga pasokan material untuk pengembang perumahan, industri, dan instansi.`

## Fase 3: Halaman baru `/layanan/material-logistik`

Struktur halaman:
1. Hero: judul `Jasa Tracking & Supplier Material`, subjudul `Solusi Terintegrasi untuk Kebutuhan Material dan Logistik Proyek`.
2. Paragraf pengantar:
   `Kami menyediakan layanan tracking armada dan pengadaan material untuk mendukung kebutuhan proyek konstruksi, industri, pertambangan, infrastruktur, dan pengurugan. Dengan dukungan jaringan supplier dan armada yang terkoordinasi, kami berkomitmen menyediakan material sesuai kebutuhan, kuantitas, kualitas, lokasi, dan jadwal pengiriman.`
3. Grid "Layanan Kami" berisi 6 kartu (ikon + judul + deskripsi):
   - **Jasa Tracking Armada**: Pemantauan armada secara real-time untuk memastikan pengiriman material berjalan aman, terpantau, dan tepat waktu. Sertakan daftar: Monitoring posisi armada, Pemantauan rute perjalanan, Monitoring proses loading dan unloading, Monitoring perjalanan dari quarry atau sumber material ke lokasi proyek, Rekap dan laporan perjalanan armada.
   - **Supplier Pasir Silika**: Pasir silika untuk berbagai kebutuhan industri dan proyek dengan spesifikasi yang dapat disesuaikan dengan kebutuhan pelanggan.
   - **Supplier Tanah Clay**: Tanah clay untuk kebutuhan industri, konstruksi, pengolahan material, dan proyek lainnya dengan volume dan spesifikasi sesuai permintaan.
   - **Supplier Limestone**: Limestone atau batu kapur untuk kebutuhan konstruksi, industri, pengurugan, maupun pengolahan material.
   - **Supplier Batu Bara**: Batu bara untuk kebutuhan industri dan pengguna akhir sesuai spesifikasi, kualitas, kuantitas, dan kebutuhan pelanggan. `[KONFIRMASI KLIEN: legalitas perdagangan batu bara sebelum tayang]`
   - **Jasa Pengurugan**: Pengurugan lahan untuk pembangunan, kawasan industri, jalan, fasilitas proyek, dan pekerjaan cut and fill, termasuk penyediaan material serta dukungan armada angkutan.
4. Section "Keunggulan Layanan" (grid 6 item): Material dan volume menyesuaikan kebutuhan proyek, Pengiriman terkoordinasi dari sumber material ke lokasi, Monitoring armada dan pengiriman, Mendukung proyek skala kecil maupun besar, Pengadaan material dan logistik dalam satu layanan, Harga kompetitif dan proses kerja profesional.
5. Strip "Komitmen Kami": `Material Tepat • Pengiriman Tepat Waktu • Armada Terpantau • Layanan Profesional`
6. CTA penutup: `Kami siap menjadi mitra pengadaan material dan logistik untuk mendukung kelancaran proyek Anda.` dengan tombol WhatsApp berpesan prefilled khusus material.
7. Gunakan ikon (lucide-react jika sudah terpasang, atau inline SVG). Jangan memakai gambar stok dari internet. Sediakan slot gambar dengan placeholder `[KONFIRMASI KLIEN: foto armada/material]`.
8. Tambahkan metadata title & description khusus halaman ini.

## Fase 4: Data Proyek

Setiap proyek memiliki field: `slug`, `kategori`, `judul`, `lokasi`, `mitra` (opsional), `deskripsi`, `tahun` (placeholder bila belum ada), `foto`.
Kategori yang dipakai harus sama dengan nama layanan di Fase 2. Pertahankan slug lama yang sudah ada (`pdam-network`, `electric-pole`, `transformer-installation`, `cubicle-installation`, `electrical-installation`) supaya link lama tidak rusak. Jika slug harus diganti, tambahkan redirect di `next.config`.

**Proyek unggulan (tampil di beranda, 6 kartu):**

| Judul | Kategori | Lokasi | Deskripsi |
|---|---|---|---|
| Pemasangan Trafo 1 MW & Panel | Mekanikal & Elektrikal | Pabrik Smelting, Karawang | Pemasangan transformator berkapasitas 1 MW beserta panel distribusi `[KONFIRMASI KLIEN: "Ipmdp" di profil maksudnya LVMDP?]` untuk kebutuhan daya fasilitas produksi pabrik smelting. |
| Pemasangan Kubikel | Mekanikal & Elektrikal | Pabrik Smelting, Karawang | Pemasangan kubikel untuk sistem distribusi daya listrik di area pabrik smelting. |
| Pemasangan Gardu Trafo & Panel | Mekanikal & Elektrikal | Alun-Alun Kota Depok | Pemasangan gardu trafo dan panel listrik untuk kebutuhan kelistrikan kawasan Alun-Alun Kota Depok. |
| Pembangunan Tower BTS SST | Telekomunikasi | Jawa Tengah & Jawa Timur | Pembangunan tower BTS tipe SST-42, SST-52, dan SST-62 bersama PT Helgalara Arutala Indonesia. |
| Pembuatan Sumur Bor | Infrastruktur Air Bersih | RS Brawijaya Saharjo, Jakarta Selatan | Pembuatan sumur bor untuk mendukung pasokan air bersih rumah sakit. |
| Pengadaan Jaringan Air PDAM | Infrastruktur Air Bersih | Perumahan Puri Griasadi Ciseeng, Bogor | Pengadaan jaringan air PDAM untuk kawasan perumahan. |

**Proyek lain (tampil di halaman Semua Proyek, dengan filter kategori):**
- Mekanikal & Elektrikal: Pengadaan jaringan listrik jalur udara di Perumahan Bumi Griasadi Ciseeng, Bumi Griasadi Cihoe, Puri Griasadi Ciseeng, Puri Griasadi 3 Cijeruk, Hawtha Inat Tajur Halang, Puri Griasadi Cikande (Banten), dan Puri Griasadi Tamansari.
- Konstruksi Bangunan: Pembangunan rumah subsidi Perumahan Bumi Griasadi Ciseeng, Bogor. Pembangunan kafe & food court Tempat Nongkrong, Ciputat, Tangerang Selatan.
- Infrastruktur Air Bersih: Sumur bor Perumahan Puri Permata Ciampea dan Perumahan Puri Griasadi Tamansari.
- Pekerjaan Tanah & Pengembangan Lahan: Cut and fill Perumahan Puri Griasadi 3 Cijeruk. Pengadaan lahan untuk PT Puri Angkasa Permata. Pengurusan perizinan perumahan subsidi & komersil di Bogor.

Proyek "Pengadaan Genset (Data Center & Rumah Sakit)" disembunyikan dulu (`published: false`) sampai klien mengonfirmasi lokasi dan dokumentasinya.

## Fase 5: Tentang Kami, Struktur, Legalitas, Klien

**Visi** (teks resmi, hanya ejaan dirapikan, tandai untuk konfirmasi):
`Menjadi perusahaan properti dan jasa konstruksi terkemuka dan bermanfaat bagi umat manusia, yang mampu memberikan kepuasan kepada pelanggan melalui produk serta pelayanan yang berkualitas dan inovatif untuk membangun negeri.`

**Misi:**
1. Memenuhi kebutuhan masyarakat dan institusi akan perumahan yang modern, berkualitas, dan ekonomis.
2. Memberikan lingkungan kerja yang aman dan nyaman, meningkatkan kesejahteraan, serta memberikan kesempatan berkembang kepada karyawan.
3. Menciptakan hubungan kerja sama yang kuat dengan pelanggan dan mitra kerja.

**Direksi & Komisaris:**
- M. Saoma Gofur `[KONFIRMASI KLIEN: gelar Lc atau S.Pd]`, Direktur Utama
- Sarah Nadia, S.H., M.Kn., Komisaris
- Alex Herius, Direktur

**Tim Manajemen (opsional, tampilkan nama dan jabatan saja tanpa foto):**
Mukhlis Abdillah (Manager Teknik), Rohmatullah (Manager Operasional), Maryono (Manager Marketing), Syarah Anita (Manager Keuangan).

**Section baru "Legalitas & Sertifikasi"** (kartu ringkas, tanpa foto dokumen):
- ISO 9001 Sistem Manajemen Mutu: No. KSM/0077/QSM, ruang lingkup Construction of Mechanical and Electrical Installations, berlaku hingga 17 Juni 2027. Tulis sebagai "ISO 9001" saja, jangan "ISO 9001:2024". `[KONFIRMASI KLIEN: versi standar pada sertifikat]`
- Kartu berikut hanya ditampilkan jika klien setuju (data ini tidak ada di company profile publik), set `published: false` sampai dikonfirmasi:
  - Badan Hukum: SK Menkumham No. AHU-0016615.AH.01.01.Tahun 2024, tanggal 1 Maret 2024.
  - Nomor Induk Berusaha (OSS RBA): 0603240092835.
  - Bidang usaha (KBLI): Konstruksi Gedung Hunian, Perkantoran, Industri, Penginapan, Gedung Lainnya, Konstruksi Prapabrikasi, Konstruksi Bangunan Sipil Elektrikal, Instalasi Mekanikal, Perdagangan Eceran, dan Real Estat.
- Jangan menulis klaim SBU atau sertifikat standar terverifikasi.

**Klien & Mitra:**
Ubah menjadi grid nama (atau logo bila tersedia) tanpa link anchor. Daftar: Rumaji Group, PT Puri Angkasa Permata Group, PT Saka, PT Anugerah Mulya Nusaindo, Delta Group, PT Cijantung Anugerah Sukses Mandiri, RS Brawijaya Saharjo Tebet, PT Helgalara Arutala Indonesia `[KONFIRMASI KLIEN: izin menampilkan nama]`.

**Company Profile PDF:**
Tombol "Unduh Company Profile" diarahkan ke `/company-profile-pmu.pdf` (versi revisi akan saya taruh di `public`). Selama versi revisi belum ada, tetap pakai file yang sekarang. Pastikan link lama `/profile-File.pdf` tetap berfungsi lewat redirect di `next.config`.

## Fase 6: UI (adopsi gaya Arthaloka, warna brand PMU)

Arah desain:
- Navbar glass gaya iOS: sticky, latar semi transparan dengan `backdrop-filter: blur`, sedikit mengecil saat scroll, menu mobile berupa drawer.
- Hero bersih dengan tipografi besar, satu foto proyek terbaik sebagai latar dengan overlay gelap.
- Strip statistik di bawah hero (data faktual): `18 Proyek Tercatat`, `5 Provinsi` (Jawa Barat, Banten, DKI Jakarta, Jawa Tengah, Jawa Timur), `ISO 9001`, `6 Lini Layanan`.
- Kartu layanan dan proyek: sudut membulat, border tipis, efek hover naik halus, whitespace lega.
- Mobile first dan responsif penuh (cek di lebar 375px, 768px, 1280px).

Palet warna (ambil nilai pasti dari file logo, angka ini perkiraan dari company profile):
- Merah brand: sekitar `#E1262D`
- Navy: sekitar `#262A45`
- Aksen kuning: sekitar `#FDDF6B` (hemat, hanya untuk highlight)
- Netral: putih dan abu-abu muda untuk latar section.

Jika folder project Arthaloka tersedia di `[ISI PATH PROJECT ARTHALOKA]`, baca design token dan komponennya (project itu memakai Svelte) lalu terjemahkan polanya ke React. Jangan menyalin kode Svelte secara langsung. Jika tidak tersedia, ikuti arah desain di atas.

Aksesibilitas & performa: kontras warna cukup, semua gambar punya alt text deskriptif, focus state terlihat, gunakan `next/image`.

## Fase 7: Pengecekan akhir

1. `npm run build` dan `npm run lint` lolos.
2. Semua link navbar dan anchor (`#services`, `#projects`, `#about`, `#kontak`) berfungsi.
3. Tidak ada teks berbahasa Inggris yang tersisa di UI kecuali nama sertifikat.
4. `CHANGES.md` berisi ringkasan perubahan per fase dan daftar semua `[KONFIRMASI KLIEN]`.
5. Beri saya ringkasan akhir dan perintah untuk push branch agar muncul Preview Deployment di Vercel.
