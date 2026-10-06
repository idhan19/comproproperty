// Sumber konten tunggal website PT Ponco Munaro Utama.
// Semua teks, kontak, layanan, proyek, direksi, klien, legalitas, dan statistik
// diubah dari file ini saja. Komponen hanya membaca data dari sini.
//
// Placeholder "[KONFIRMASI KLIEN: ...]" menandai data yang menunggu konfirmasi
// klien. Daftar lengkapnya ada di CHANGES.md.

export const SITE_URL = "https://www.ptponcoutama.com";

export const company = {
  name: "PT Ponco Munaro Utama",
  shortName: "PMU",
  region: "Kabupaten Bogor, Jawa Barat",
  address:
    "Jl. Jampang Hambulu, Kp. Tegal, Desa Tegal, Kec. Kemang, Kab. Bogor, Jawa Barat 16310",
  phone: "082120369004",
  email: "poncomunaroutama@gmail.com",
  logo: "/logo-navbar.png",
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ponco_munaroutama?igsh=MWNyNm4waWxkbndpdg==",
    },
    { name: "TikTok", href: "https://www.tiktok.com/@pmu.group?_r=1&_t=ZS-93doxd0RGuz" },
    { name: "Facebook", href: "https://www.facebook.com/share/14PBa7pUUCp/" },
  ],
};

// Pakai "/#..." agar anchor tetap berfungsi dari halaman selain beranda.
export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/#services" },
  { label: "Proyek", href: "/#projects" },
  { label: "Tentang Kami", href: "/#about" },
  { label: "Kontak", href: "/#kontak" },
];

export const whatsapp = {
  number: "6282120369004",
  messages: {
    umum: "Halo PT Ponco Munaro Utama, saya tertarik berkonsultasi mengenai layanan [Konstruksi/Listrik/Sumur Bor/Material & Logistik]. Mohon informasi prosedur dan estimasi biayanya. Terima kasih.",
    material:
      "Halo PT Ponco Munaro Utama, saya tertarik dengan layanan Tracking Armada & Supplier Material. Mohon informasi ketersediaan material, prosedur, dan estimasi biayanya. Terima kasih.",
  },
};

/** Membuat tautan wa.me dengan pesan yang sudah terisi. */
export function waLink(message = whatsapp.messages.umum) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const seo = {
  title:
    "PT Ponco Munaro Utama | Kontraktor Konstruksi, Mekanikal Elektrikal & Supplier Material",
  description:
    "PT Ponco Munaro Utama adalah perusahaan jasa konstruksi di Kabupaten Bogor yang melayani pembangunan perumahan, instalasi mekanikal elektrikal, infrastruktur air bersih, tower telekomunikasi, pekerjaan tanah, serta tracking armada dan supplier material.",
  ogImageAlt: "PT Ponco Munaro Utama, kontraktor konstruksi, mekanikal elektrikal, dan supplier material",
};

export const hero = {
  // Foto proyek nyata: pemasangan gardu trafo & panel, Alun-Alun Kota Depok.
  image: "/Trafo3.jpeg",
  imageAlt: "Tim PT Ponco Munaro Utama memasang gardu trafo dan panel listrik",
  headline: "Mitra Konstruksi dan Infrastruktur untuk Proyek Anda",
  subheadline:
    "Dari pembangunan perumahan, jaringan listrik, sumur bor, hingga pasokan material dan logistik proyek, semuanya kami kerjakan dalam satu atap.",
};

export const about = {
  // Teks resmi visi dari company profile, hanya ejaan yang dirapikan.
  visi: "Menjadi perusahaan properti dan jasa konstruksi terkemuka dan bermanfaat bagi umat manusia, yang mampu memberikan kepuasan kepada pelanggan melalui produk serta pelayanan yang berkualitas dan inovatif untuk membangun negeri.",
  misi: [
    "Memenuhi kebutuhan masyarakat dan institusi akan perumahan yang modern, berkualitas, dan ekonomis.",
    "Memberikan lingkungan kerja yang aman dan nyaman, meningkatkan kesejahteraan, serta memberikan kesempatan berkembang kepada karyawan.",
    "Menciptakan hubungan kerja sama yang kuat dengan pelanggan dan mitra kerja.",
  ],
};

// Selama /company-profile-pmu.pdf belum ada di folder public, URL ini
// diarahkan ke file lama lewat redirect di next.config.mjs.
export const companyProfilePdf = "/company-profile-pmu.pdf";

export const servicesIntro =
  "Layanan kami mencakup konstruksi, mekanikal elektrikal, infrastruktur, hingga pasokan material untuk pengembang perumahan, industri, dan instansi.";

// `title` juga dipakai sebagai nama kategori proyek (lihat `projects`).
// `icon` adalah nama ikon lucide-react, dipetakan di src/components/Icon.js.
export const services = [
  {
    slug: "konstruksi-bangunan",
    icon: "Building2",
    title: "Konstruksi Bangunan",
    description:
      "Pembangunan perumahan subsidi dan komersil serta bangunan usaha seperti kafe dan food court.",
    points: ["Rumah subsidi & komersil", "Bangunan komersial", "Pekerjaan struktur & finishing"],
  },
  {
    slug: "mekanikal-elektrikal",
    icon: "Zap",
    title: "Mekanikal & Elektrikal",
    description:
      "Pengadaan jaringan listrik perumahan, pemasangan gardu trafo, panel, dan kubikel untuk kebutuhan hunian maupun industri.",
    points: [
      "Jaringan listrik jalur udara",
      "Gardu trafo & panel (hingga 1 MW)",
      "Pemasangan kubikel",
    ],
  },
  {
    slug: "infrastruktur-air-bersih",
    icon: "Droplets",
    title: "Infrastruktur Air Bersih",
    description:
      "Pembuatan sumur bor dan pengadaan jaringan air PDAM untuk kawasan perumahan dan fasilitas publik.",
    points: ["Sumur bor", "Jaringan air PDAM", "Instalasi pompa"],
  },
  {
    slug: "telekomunikasi",
    icon: "RadioTower",
    title: "Telekomunikasi",
    description: "Pembangunan tower BTS tipe SST untuk mendukung jaringan telekomunikasi.",
    points: ["Tower BTS SST-42, SST-52, SST-62", "Pekerjaan pondasi tower", "Erection tower"],
  },
  {
    slug: "pekerjaan-tanah",
    icon: "Shovel",
    title: "Pekerjaan Tanah & Pengembangan Lahan",
    description:
      "Pekerjaan cut and fill, pengadaan lahan, dan pendampingan perizinan untuk pengembang perumahan.",
    points: ["Cut and fill", "Pengadaan lahan", "Pengurusan perizinan perumahan"],
  },
  {
    slug: "material-logistik",
    icon: "Truck",
    title: "Tracking Armada & Supplier Material",
    description:
      "Pengadaan material dan pemantauan armada pengiriman dari sumber material sampai lokasi proyek.",
    points: ["Tracking armada", "Supplier material", "Jasa pengurugan"],
    badge: "Baru",
    href: "/layanan/material-logistik",
  },
];

export const materialLogistik = {
  slug: "/layanan/material-logistik",
  meta: {
    title: "Jasa Tracking Armada & Supplier Material",
    description:
      "Layanan tracking armada dan supplier material PT Ponco Munaro Utama: pasir silika, tanah clay, limestone, batu bara, dan jasa pengurugan dengan pengiriman terpantau ke lokasi proyek.",
  },
  title: "Jasa Tracking & Supplier Material",
  subtitle: "Solusi Terintegrasi untuk Kebutuhan Material dan Logistik Proyek",
  intro:
    "Kami menyediakan layanan tracking armada dan pengadaan material untuk mendukung kebutuhan proyek konstruksi, industri, pertambangan, infrastruktur, dan pengurugan. Dengan dukungan jaringan supplier dan armada yang terkoordinasi, kami berkomitmen menyediakan material sesuai kebutuhan, kuantitas, kualitas, lokasi, dan jadwal pengiriman.",
  image: {
    src: "/dokumentasi/material/armada-material-1.jpg",
    alt: "Deretan dump truck bermuatan material di lokasi sumber material",
  },
  // Dokumentasi lapangan. Keterangan lokasi/tanggal diambil dari cap pada foto/video.
  videos: [
    {
      src: "/video/muat-material-1.mp4",
      poster: "/video/muat-material-1-poster.jpg",
      keterangan: "Pemuatan material ke dump truck dengan ekskavator",
    },
    {
      src: "/video/muat-material-2.mp4",
      poster: "/video/muat-material-2-poster.jpg",
      keterangan: "Aktivitas armada di lokasi sumber material, Kec. Bayah, Kab. Lebak, Banten",
    },
  ],
  dokumentasi: [
    { src: "/dokumentasi/material/armada-material-2.jpg", keterangan: "Armada dump truck bermuatan material" },
    { src: "/dokumentasi/material/sumber-material-bayah-1.jpg", keterangan: "Lokasi sumber material, Kec. Bayah, Kab. Lebak, Banten (12 Agustus 2026)" },
    { src: "/dokumentasi/material/sumber-material-bayah-2.jpg", keterangan: "Lokasi sumber material, Kec. Bayah, Kab. Lebak, Banten (12 Agustus 2026)" },
    { src: "/dokumentasi/material/sumber-material-bayah-3.jpg", keterangan: "Lokasi sumber material, Kec. Bayah, Kab. Lebak, Banten (12 Agustus 2026)" },
    { src: "/dokumentasi/material/sumber-material-bayah-4.jpg", keterangan: "Lokasi sumber material, Kec. Bayah, Kab. Lebak, Banten (12 Agustus 2026)" },
    { src: "/dokumentasi/material/sampel-material-lebak.jpg", keterangan: "Sampel material, Kabupaten Lebak (1 September 2026)" },
    { src: "/dokumentasi/material/sumber-clay-silika-4.jpg", keterangan: "Tim kami di lokasi sumber tanah clay dan pasir silika" },
    { src: "/dokumentasi/material/sumber-clay-silika-2.jpg", keterangan: "Ekskavator di lokasi sumber tanah clay dan pasir silika" },
    { src: "/dokumentasi/material/sumber-clay-silika-1.jpg", keterangan: "Lokasi sumber tanah clay dan pasir silika" },
    { src: "/dokumentasi/material/sumber-clay-silika-3.jpg", keterangan: "Lokasi sumber tanah clay dan pasir silika" },
    { src: "/dokumentasi/material/sumber-clay-silika-5.jpg", keterangan: "Peninjauan lokasi sumber tanah clay dan pasir silika" },
  ],
  items: [
    {
      icon: "MapPinned",
      title: "Jasa Tracking Armada",
      description:
        "Pemantauan armada secara real-time untuk memastikan pengiriman material berjalan aman, terpantau, dan tepat waktu.",
      list: [
        "Monitoring posisi armada",
        "Pemantauan rute perjalanan",
        "Monitoring proses loading dan unloading",
        "Monitoring perjalanan dari quarry atau sumber material ke lokasi proyek",
        "Rekap dan laporan perjalanan armada",
      ],
    },
    {
      icon: "Gem",
      title: "Supplier Pasir Silika",
      description:
        "Pasir silika untuk berbagai kebutuhan industri dan proyek dengan spesifikasi yang dapat disesuaikan dengan kebutuhan pelanggan.",
    },
    {
      icon: "Layers",
      title: "Supplier Tanah Clay",
      description:
        "Tanah clay untuk kebutuhan industri, konstruksi, pengolahan material, dan proyek lainnya dengan volume dan spesifikasi sesuai permintaan.",
    },
    {
      icon: "Mountain",
      title: "Supplier Limestone",
      description:
        "Limestone atau batu kapur untuk kebutuhan konstruksi, industri, pengurugan, maupun pengolahan material.",
    },
    {
      icon: "Boxes",
      title: "Supplier Batu Bara",
      description:
        "Batu bara untuk kebutuhan industri dan pengguna akhir sesuai spesifikasi, kualitas, kuantitas, dan kebutuhan pelanggan. [KONFIRMASI KLIEN: legalitas perdagangan batu bara sebelum tayang]",
    },
    {
      icon: "Truck",
      title: "Jasa Pengurugan",
      description:
        "Pengurugan lahan untuk pembangunan, kawasan industri, jalan, fasilitas proyek, dan pekerjaan cut and fill, termasuk penyediaan material serta dukungan armada angkutan.",
    },
  ],
  advantages: [
    { icon: "PackageCheck", text: "Material dan volume menyesuaikan kebutuhan proyek" },
    { icon: "Route", text: "Pengiriman terkoordinasi dari sumber material ke lokasi" },
    { icon: "MapPinned", text: "Monitoring armada dan pengiriman" },
    { icon: "Building2", text: "Mendukung proyek skala kecil maupun besar" },
    { icon: "ClipboardList", text: "Pengadaan material dan logistik dalam satu layanan" },
    { icon: "Handshake", text: "Harga kompetitif dan proses kerja profesional" },
  ],
  commitments: ["Material Tepat", "Pengiriman Tepat Waktu", "Armada Terpantau", "Layanan Profesional"],
  closing:
    "Kami siap menjadi mitra pengadaan material dan logistik untuk mendukung kelancaran proyek Anda.",
};

// Nama kategori proyek = judul layanan.
const K = {
  konstruksi: "Konstruksi Bangunan",
  me: "Mekanikal & Elektrikal",
  air: "Infrastruktur Air Bersih",
  telko: "Telekomunikasi",
  tanah: "Pekerjaan Tanah & Pengembangan Lahan",
};

// `tahun`: null berarti belum dikonfirmasi klien dan tidak ditampilkan.
// `foto`: null berarti belum ada dokumentasi; kartu memakai ikon kategori.
// Atribusi foto mengikuti cap lokasi/isi foto (lihat CHANGES.md, Fase 6).
// `unggulan`: tampil di beranda. `published: false`: disembunyikan dari website.
// Slug lama (pdam-network, electric-pole, transformer-installation,
// cubicle-installation) dipertahankan agar link lama tetap jalan. Slug lama yang
// proyeknya diganti dialihkan lewat src/app/projects/<slug-lama>/page.js.
export const projects = [
  // Proyek unggulan (beranda)
  {
    slug: "trafo-1mw-smelting-karawang",
    kategori: K.me,
    judul: "Pemasangan Trafo 1 MW & Panel",
    lokasi: "Pabrik Smelting, Karawang",
    deskripsi:
      'Pemasangan transformator berkapasitas 1 MW beserta panel distribusi untuk kebutuhan daya fasilitas produksi pabrik smelting.',
    tahun: null,
    foto: null,
    unggulan: true,
  },
  {
    slug: "cubicle-installation",
    kategori: K.me,
    judul: "Pemasangan Kubikel",
    lokasi: "Pabrik Smelting, Karawang",
    deskripsi: "Pemasangan kubikel untuk sistem distribusi daya listrik di area pabrik smelting.",
    tahun: null,
    foto: "/kubikel.jpeg",
    galeri: ["/kubikel2.jpeg", "/kubikel3.jpeg"],
    unggulan: true,
  },
  {
    slug: "transformer-installation",
    kategori: K.me,
    judul: "Pemasangan Gardu Trafo & Panel",
    lokasi: "Alun-Alun Kota Depok",
    deskripsi:
      "Pemasangan gardu trafo dan panel listrik untuk kebutuhan kelistrikan kawasan Alun-Alun Kota Depok.",
    tahun: null,
    foto: "/trafopanel.jpeg",
    galeri: ["/Trafo3.jpeg"],
    unggulan: true,
  },
  {
    slug: "tower-bts-sst",
    kategori: K.telko,
    judul: "Pembangunan Tower BTS SST",
    lokasi: "Jawa Tengah & Jawa Timur",
    mitra: "PT Helgalara Arutala Indonesia",
    deskripsi:
      "Pembangunan tower BTS tipe SST-42, SST-52, dan SST-62 bersama PT Helgalara Arutala Indonesia.",
    tahun: null,
    foto: "/INSLISTRIK3.jpeg",
    unggulan: true,
  },
  {
    slug: "sumur-bor-rs-brawijaya-saharjo",
    kategori: K.air,
    judul: "Pembuatan Sumur Bor",
    lokasi: "RS Brawijaya Saharjo, Jakarta Selatan",
    deskripsi: "Pembuatan sumur bor untuk mendukung pasokan air bersih rumah sakit.",
    tahun: null,
    foto: null,
    unggulan: true,
  },
  {
    slug: "pdam-network",
    kategori: K.air,
    judul: "Pengadaan Jaringan Air PDAM",
    lokasi: "Perumahan Puri Griasadi Ciseeng, Bogor",
    deskripsi: "Pengadaan jaringan air PDAM untuk kawasan perumahan.",
    tahun: null,
    foto: "/PDAMProject2.jpeg",
    galeri: [
      "/PDAMProject1.jpeg",
      "/PDAMProject3.jpeg",
      // Dokumentasi Agustus 2024 (kegiatan yang sama dengan foto PDAMProject).
      "/dokumentasi/pdam/pdam-ciseeng-1.jpg",
      "/dokumentasi/pdam/pdam-ciseeng-2.jpg",
      "/dokumentasi/pdam/pdam-ciseeng-3.jpg",
      "/dokumentasi/pdam/pdam-ciseeng-4.jpg",
      "/dokumentasi/pdam/pdam-ciseeng-5.jpg",
      "/dokumentasi/pdam/pdam-ciseeng-6.jpg",
      "/dokumentasi/pdam/pdam-ciseeng-7.jpg",
      "/tianglistrik.jpeg",
      // Dikonfirmasi klien: pengerjaan PDAM Puri Griasadi Ciseeng.
      "/tiang1.jpeg",
    ],
    unggulan: true,
  },

  // Mekanikal & Elektrikal: jaringan listrik jalur udara
  {
    slug: "jaringan-listrik-bumi-griasadi-ciseeng",
    kategori: K.me,
    judul: "Jaringan Listrik Jalur Udara Perumahan Bumi Griasadi Ciseeng",
    lokasi: "Perumahan Bumi Griasadi Ciseeng, Bogor",
    deskripsi: "Pengadaan jaringan listrik jalur udara untuk kawasan Perumahan Bumi Griasadi Ciseeng.",
    tahun: null,
    foto: null,
  },
  {
    slug: "jaringan-listrik-bumi-griasadi-cihoe",
    kategori: K.me,
    judul: "Jaringan Listrik Jalur Udara Perumahan Bumi Griasadi Cihoe",
    lokasi: "Perumahan Bumi Griasadi Cihoe",
    deskripsi: "Pengadaan jaringan listrik jalur udara untuk kawasan Perumahan Bumi Griasadi Cihoe.",
    tahun: null,
    foto: null,
  },
  {
    slug: "jaringan-listrik-puri-griasadi-ciseeng",
    kategori: K.me,
    judul: "Jaringan Listrik Jalur Udara Perumahan Puri Griasadi Ciseeng",
    lokasi: "Perumahan Puri Griasadi Ciseeng, Bogor",
    deskripsi: "Pengadaan jaringan listrik jalur udara untuk kawasan Perumahan Puri Griasadi Ciseeng.",
    tahun: null,
    foto: null,
  },
  {
    slug: "jaringan-listrik-puri-griasadi-3-cijeruk",
    kategori: K.me,
    judul: "Jaringan Listrik Jalur Udara Perumahan Puri Griasadi 3 Cijeruk",
    lokasi: "Perumahan Puri Griasadi 3 Cijeruk",
    deskripsi: "Pengadaan jaringan listrik jalur udara untuk kawasan Perumahan Puri Griasadi 3 Cijeruk.",
    tahun: null,
    foto: "/INSLISTRIK2.jpeg",
  },
  {
    slug: "electric-pole",
    kategori: K.me,
    judul: "Jaringan Listrik Jalur Udara Perumahan Hawtha Inat Tajur Halang",
    lokasi: "Perumahan Hawtha Inat Tajur Halang, Bogor",
    deskripsi: "Pengadaan jaringan listrik jalur udara untuk kawasan Perumahan Hawtha Inat Tajur Halang.",
    tahun: null,
    // tianglistrik.jpeg dan tiang1.jpeg dipindah ke proyek PDAM Puri Griasadi Ciseeng
    // (dikonfirmasi klien). Sampul memakai ilustrasi sampai ada foto asli.
    foto: null,
    galeri: ["/tiang3.jpeg"],
  },
  {
    // Menggantikan proyek lama (slug "electrical-installation", dialihkan ke slug ini).
    slug: "pemasangan-listrik-jalur-udara-puri-griasadi-cikande",
    kategori: K.me,
    judul: "Pemasangan Listrik Jalur Udara Perumahan Puri Griasadi Cikande",
    lokasi: "Perumahan Puri Griasadi Cikande, Banten",
    deskripsi:
      "Pemasangan jaringan listrik jalur udara untuk kawasan Perumahan Puri Griasadi Cikande, mulai dari pendirian tiang, pemasangan gardu trafo dan panel, hingga penyambungan kWh meter ke rumah.",
    tahun: null,
    foto: "/dokumentasi/listrik/cikande-jaringan-udara.jpg",
    galeri: [
      "/dokumentasi/listrik/cikande-pendirian-tiang.jpg",
      "/dokumentasi/listrik/cikande-gardu-trafo.jpg",
      "/dokumentasi/listrik/cikande-kwh-meter.jpg",
    ],
  },
  {
    slug: "jaringan-listrik-puri-griasadi-tamansari",
    kategori: K.me,
    judul: "Jaringan Listrik Jalur Udara Perumahan Puri Griasadi Tamansari",
    // Kab. Bogor: dari cap lokasi foto (Kec. Tamansari, Kabupaten Bogor).
    lokasi: "Perumahan Puri Griasadi Tamansari, Bogor",
    deskripsi: "Pengadaan jaringan listrik jalur udara untuk kawasan Perumahan Puri Griasadi Tamansari.",
    tahun: null,
    foto: "/Trafo1.jpeg",
    galeri: ["/dokumentasi/listrik/tamansari-tiang.jpg", "/dokumentasi/listrik/tamansari-kwh-meter.jpg"],
  },
  {
    slug: "pemasangan-listrik-puri-permata-ciampea",
    kategori: K.me,
    judul: "Pemasangan Listrik Perumahan Puri Permata Ciampea",
    lokasi: "Perumahan Puri Permata Ciampea",
    deskripsi:
      "Pemasangan jaringan listrik untuk kawasan Perumahan Puri Permata Ciampea, meliputi pendirian tiang dan penarikan kabel ke bangunan.",
    tahun: null,
    foto: "/dokumentasi/listrik/ciampea-jaringan-listrik.jpg",
    galeri: [
      "/dokumentasi/listrik/ciampea-penarikan-kabel.jpg",
      "/dokumentasi/listrik/ciampea-penyambungan.jpg",
    ],
  },

  // Konstruksi Bangunan
  {
    slug: "rumah-subsidi-bumi-griasadi-ciseeng",
    kategori: K.konstruksi,
    judul: "Pembangunan Rumah Subsidi Perumahan Bumi Griasadi Ciseeng",
    lokasi: "Perumahan Bumi Griasadi Ciseeng, Bogor",
    deskripsi: "Pembangunan rumah subsidi di kawasan Perumahan Bumi Griasadi Ciseeng.",
    tahun: null,
    // Dari folder klien "Rumah Subsidi Bogor"; lokasi persis menunggu konfirmasi.
    foto: "/dokumentasi/konstruksi/rumah-subsidi-bogor-1.jpg",
  },
  {
    slug: "kafe-food-court-tempat-nongkrong",
    kategori: K.konstruksi,
    judul: "Pembangunan Kafe & Food Court Tempat Nongkrong",
    lokasi: "Ciputat, Tangerang Selatan",
    deskripsi: "Pembangunan bangunan usaha kafe dan food court Tempat Nongkrong.",
    tahun: null,
    foto: null,
    // Disembunyikan atas permintaan klien.
    published: false,
  },

  // Infrastruktur Air Bersih
  {
    slug: "sumur-bor-puri-permata-ciampea",
    kategori: K.air,
    judul: "Sumur Bor Perumahan Puri Permata Ciampea",
    lokasi: "Perumahan Puri Permata Ciampea",
    deskripsi: "Pembuatan sumur bor untuk pasokan air bersih kawasan Perumahan Puri Permata Ciampea.",
    tahun: null,
    foto: null,
  },
  {
    slug: "sumur-bor-puri-griasadi-tamansari",
    kategori: K.air,
    judul: "Sumur Bor Perumahan Puri Griasadi Tamansari",
    lokasi: "Perumahan Puri Griasadi Tamansari",
    deskripsi: "Pembuatan sumur bor untuk pasokan air bersih kawasan Perumahan Puri Griasadi Tamansari.",
    tahun: null,
    foto: null,
  },

  // Pekerjaan Tanah & Pengembangan Lahan
  {
    slug: "cut-and-fill-puri-griasadi-3-cijeruk",
    kategori: K.tanah,
    judul: "Cut and Fill Perumahan Puri Griasadi 3 Cijeruk",
    lokasi: "Perumahan Puri Griasadi 3 Cijeruk",
    deskripsi: "Pekerjaan cut and fill untuk pematangan lahan Perumahan Puri Griasadi 3 Cijeruk.",
    tahun: null,
    // Dari folder klien "Cut And Fill"; lokasi persis menunggu konfirmasi.
    foto: "/dokumentasi/tanah/cut-and-fill-1.jpg",
    galeri: [
      "/dokumentasi/tanah/cut-and-fill-2.jpg",
      "/dokumentasi/tanah/cut-and-fill-3.jpg",
      "/dokumentasi/tanah/cut-and-fill-4.jpg",
    ],
  },
  {
    slug: "pengadaan-lahan-puri-angkasa-permata",
    kategori: K.tanah,
    judul: "Pengadaan Lahan untuk PT Puri Angkasa Permata",
    lokasi: null,
    mitra: "PT Puri Angkasa Permata",
    deskripsi: "Pengadaan lahan untuk kebutuhan pengembangan perumahan PT Puri Angkasa Permata.",
    tahun: null,
    foto: null,
  },
  {
    slug: "perizinan-perumahan-bogor",
    kategori: K.tanah,
    judul: "Pengurusan Perizinan Perumahan Subsidi & Komersil",
    lokasi: "Bogor",
    deskripsi: "Pendampingan pengurusan perizinan untuk proyek perumahan subsidi dan komersil di Bogor.",
    tahun: null,
    foto: null,
  },

  // Disembunyikan sampai klien mengonfirmasi lokasi dan dokumentasinya.
  {
    slug: "genset-procurement",
    kategori: K.me,
    judul: "Pengadaan Genset",
    lokasi: "Data Center & Rumah Sakit",
    deskripsi: "Pengadaan genset untuk kebutuhan data center dan rumah sakit.",
    tahun: null,
    foto: "/Genset.jpeg",
    galeri: ["/Genset1.jpeg", "/Genset2.jpeg", "/Genset3.jpeg"],
    published: false,
  },
];

// Gambar sementara untuk proyek yang belum punya foto: ilustrasi vektor
// (bukan foto) di public/ilustrasi, ditampilkan dengan label "Ilustrasi".
// Begitu `foto` proyek diisi, ilustrasi otomatis tidak dipakai lagi.
const ILUSTRASI = {
  "trafo-1mw-smelting-karawang": "/ilustrasi/gardu-trafo.svg",
  "sumur-bor-rs-brawijaya-saharjo": "/ilustrasi/sumur-bor.svg",
  "sumur-bor-puri-permata-ciampea": "/ilustrasi/sumur-bor.svg",
  "sumur-bor-puri-griasadi-tamansari": "/ilustrasi/sumur-bor.svg",
  "jaringan-listrik-bumi-griasadi-ciseeng": "/ilustrasi/jaringan-listrik.svg",
  "jaringan-listrik-bumi-griasadi-cihoe": "/ilustrasi/jaringan-listrik.svg",
  "jaringan-listrik-puri-griasadi-ciseeng": "/ilustrasi/jaringan-listrik.svg",
  "electric-pole": "/ilustrasi/jaringan-listrik.svg",
  "kafe-food-court-tempat-nongkrong": "/ilustrasi/kafe.svg",
  "pengadaan-lahan-puri-angkasa-permata": "/ilustrasi/pengadaan-lahan.svg",
  "perizinan-perumahan-bogor": "/ilustrasi/perizinan.svg",
};
for (const project of projects) {
  if (!project.foto && ILUSTRASI[project.slug]) project.ilustrasi = ILUSTRASI[project.slug];
}

export const publishedProjects = projects.filter((project) => project.published !== false);
export const featuredProjects = publishedProjects.filter((project) => project.unggulan);

export function getProject(slug) {
  return publishedProjects.find((project) => project.slug === slug);
}

/** Ikon layanan untuk kategori proyek (dipakai saat proyek belum punya foto). */
export function categoryIcon(kategori) {
  return services.find((service) => service.title === kategori)?.icon ?? "Layers";
}

// Dokumentasi lapangan yang belum dipetakan ke proyek tertentu. Tampil di
// halaman /projects. Keterangan lokasi dan tanggal hanya diambil dari cap
// pada foto; nama proyek tidak ditebak. Pindahkan ke `galeri` proyek terkait
// setelah klien mengonfirmasi.
export const dokumentasi = [
  {
    src: "/dokumentasi/listrik/gardu-pabuaran-kemang-1.jpg",
    kategori: K.me,
    keterangan: "Gardu trafo dan panel, Jl. Raya Pabuaran, Kec. Kemang, Kab. Bogor (21 Agustus 2026)",
  },
  {
    src: "/dokumentasi/listrik/gardu-pabuaran-kemang-2.jpg",
    kategori: K.me,
    keterangan: "Panel gardu trafo, Jl. Raya Pabuaran, Kec. Kemang, Kab. Bogor (21 Agustus 2026)",
  },
  {
    src: "/dokumentasi/listrik/jaringan-kemang.jpg",
    kategori: K.me,
    keterangan: "Pekerjaan jaringan listrik, Kec. Kemang, Kab. Bogor (19 Mei 2026)",
  },
  {
    src: "/dokumentasi/listrik/tiang-ciseeng.jpg",
    kategori: K.me,
    keterangan: "Pengiriman tiang listrik, Jl. Cibeuteung Muara, Kec. Ciseeng, Kab. Bogor (1 Mei 2026)",
  },
  {
    src: "/dokumentasi/listrik/pemasangan-jaringan-1.jpg",
    kategori: K.me,
    keterangan: "Pemasangan jaringan listrik di kawasan perumahan",
  },
  {
    src: "/dokumentasi/listrik/pemasangan-jaringan-2.jpg",
    kategori: K.me,
    keterangan: "Pekerjaan jaringan listrik di kawasan perumahan",
  },
  {
    src: "/dokumentasi/konstruksi/rangka-baja-kemang.jpg",
    kategori: K.konstruksi,
    keterangan: "Pekerjaan rangka baja bangunan, Parakan Jaya, Kec. Kemang, Kab. Bogor (4 Juni 2025)",
  },
  {
    src: "/dokumentasi/air/jaringan-air-ciseeng.jpg",
    kategori: K.air,
    keterangan: "Pekerjaan jaringan air di kawasan perumahan, Kec. Ciseeng, Kab. Bogor (30 Juli 2025)",
  },
  { src: "/dokumentasi/air/sumur-bor-1.jpg", kategori: K.air, keterangan: "Pembuatan sumur bor" },
  { src: "/dokumentasi/air/sumur-bor-2.jpg", kategori: K.air, keterangan: "Pembuatan sumur bor" },
  { src: "/dokumentasi/air/sumur-bor-3.jpg", kategori: K.air, keterangan: "Mesin bor sumur di lokasi pekerjaan" },
  { src: "/dokumentasi/air/sumur-bor-4.jpg", kategori: K.air, keterangan: "Pembuatan sumur bor" },
  { src: "/dokumentasi/air/pam-pdam-1.jpg", kategori: K.air, keterangan: "Pengujian tekanan jaringan pipa air" },
  { src: "/dokumentasi/air/pam-pdam-2.jpg", kategori: K.air, keterangan: "Pengadaan jaringan PAM mandiri dan PDAM di kawasan perumahan" },
  { src: "/dokumentasi/air/pam-pdam-3.jpg", kategori: K.air, keterangan: "Pemasangan boks meter air di kawasan perumahan" },
];

export const directors = [
  {
    name: "M. Saoma Gofur ",
    role: "Direktur Utama",
    photo: "/gofur.jpeg",
  },
  { name: "Sarah Nadia, S.H., M.Kn.", role: "Komisaris", photo: "/Sarah1.png" },
  { name: "Alex Herius", role: "Direktur", photo: "/Alex.jpeg" },
];

// Tim manajemen: nama dan jabatan saja, tanpa foto.
// Disembunyikan atas permintaan klien; ubah ke `true` untuk menampilkan lagi.
export const showManagement = false;
export const management = [
  { name: "Mukhlis Abdillah", role: "Manager Teknik" },
  { name: "Rohmatullah", role: "Manager Operasional" },
  { name: "Maryono", role: "Manager Marketing" },
  { name: "Syarah Anita", role: "Manager Keuangan" },
];

// Legalitas & sertifikasi: kartu ringkas tanpa foto dokumen.
// Jangan menampilkan KTP, NIK, NPWP pribadi, atau isi akta notaris.
// Jangan menulis klaim SBU atau sertifikat standar terverifikasi.
// Kartu `published: false` tidak ada di company profile publik dan baru
// ditampilkan setelah klien setuju.
export const legalitas = [
  {
    icon: "BadgeCheck",
    title: "ISO 9001",
    subtitle: "Sistem Manajemen Mutu",
    details: [
      "No. KSM/0077/QSM",
      "Ruang lingkup: Construction of Mechanical and Electrical Installations",
      "Berlaku hingga 17 Juni 2027",
    ],
    // Disembunyikan atas permintaan klien.
    published: false,
  },
  {
    icon: "Scale",
    title: "Badan Hukum",
    subtitle: "Pengesahan Kementerian Hukum dan HAM",
    details: ["SK Menkumham No. AHU-0016615.AH.01.01.Tahun 2024", "Tanggal 1 Maret 2024"],
    published: false,
  },
  {
    icon: "FileCheck",
    title: "Nomor Induk Berusaha",
    subtitle: "OSS RBA",
    details: ["NIB 0603240092835"],
    published: false,
  },
  {
    icon: "ClipboardList",
    title: "Bidang Usaha (KBLI)",
    subtitle: "Klasifikasi Baku Lapangan Usaha Indonesia",
    details: [
      "Konstruksi Gedung Hunian, Perkantoran, Industri, Penginapan, dan Gedung Lainnya",
      "Konstruksi Prapabrikasi",
      "Konstruksi Bangunan Sipil Elektrikal",
      "Instalasi Mekanikal",
      "Perdagangan Eceran",
      "Real Estat",
    ],
    published: false,
  },
];

export const publishedLegalitas = legalitas.filter((item) => item.published !== false);

// Klien & mitra: grid nama tanpa tautan. Tambahkan `logo` bila tersedia.
export const clients = [
  { name: "Rumaji Group" },
  { name: "PT Puri Angkasa Permata Group" },
  { name: "PT Saka" },
  { name: "PT Anugerah Mulya Nusaindo" },
  { name: "Delta Group" },
  { name: "PT Cijantung Anugerah Sukses Mandiri" },
  { name: "RS Brawijaya Saharjo Tebet" },
  { name: "PT Helgalara Arutala Indonesia" },
];

// Strip statistik di bawah hero. Angka dihitung dari data agar selalu sinkron
// dengan daftar proyek, layanan, dan klien di website. Jangan menggelembungkan
// angka: ganti dengan data volume pekerjaan dari klien bila sudah tersedia.

// Data volume pekerjaan dari klien. Isi dengan angka ASLI (jangan perkiraan
// tanpa dasar). Selama `null`, strip statistik memakai angka dari data proyek.
export const dataVolume = {
  // Total unit rumah yang jaringan listriknya dikerjakan PMU, mis. 2000.
  rumahTeraliriListrik: null,
};

// Kawasan perumahan unik dari lokasi proyek yang tayang.
const kawasanPerumahan = new Set(
  publishedProjects
    .map((project) => project.lokasi ?? "")
    .filter((lokasi) => lokasi.startsWith("Perumahan "))
    .map((lokasi) => lokasi.replace(/,.*$/, "")),
);

// Kabupaten/kota yang pasti dari data lokasi proyek. Proyek tower BTS di
// Jawa Tengah & Jawa Timur mencakup minimal satu kab/kota di tiap provinsi,
// sehingga ditampilkan sebagai "+" (batas bawah, bukan angka pasti).
const kabupatenKota = [
  "Kabupaten Bogor",
  "Kabupaten Karawang",
  "Kota Depok",
  "Kota Jakarta Selatan",
  "Kabupaten Serang (Cikande)",
];
const kabKotaMinimal = kabupatenKota.length + 2; // + Jawa Tengah, Jawa Timur

export const stats = [
  {
    value: String(publishedProjects.length),
    label: "Proyek Tercatat",
    detail: "Konstruksi, M&E, air bersih, telekomunikasi",
    href: "/projects",
  },
  dataVolume.rumahTeraliriListrik
    ? {
        // Contoh tampilan: "±2.000" Rumah Teraliri Listrik
        value: `±${dataVolume.rumahTeraliriListrik.toLocaleString("id-ID")}`,
        label: "Rumah Teraliri Listrik",
        detail: `Di ${kawasanPerumahan.size} kawasan perumahan`,
        href: "/projects",
      }
    : {
        value: String(kawasanPerumahan.size),
        label: "Kawasan Perumahan",
        detail: "Jaringan listrik, air bersih, dan konstruksi",
        href: "/projects",
      },
  {
    value: `${kabKotaMinimal}+`,
    label: "Kabupaten/Kota",
    detail: "Bogor, Depok, Karawang, Jakarta, dan lainnya",
    href: "/projects",
  },
  {
    value: "5",
    label: "Provinsi",
    detail: "Jawa Barat hingga Jawa Timur",
    href: "/projects",
  },
  {
    value: String(services.length),
    label: "Lini Layanan",
    detail: "Konstruksi hingga supplier material",
    href: "/#services",
  },
  {
    value: String(clients.length),
    label: "Klien & Mitra",
    detail: "Pengembang, rumah sakit, telekomunikasi",
    href: "/#klien",
  },
];
