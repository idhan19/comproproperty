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

export const companyProfilePdf = "/profile-File.pdf";

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
  imagePlaceholder: "[KONFIRMASI KLIEN: foto armada/material]",
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

export const projects = [
  {
    slug: "pdam-network",
    judul: "Pengadaan jaringan PDAM",
    kategori: "SUMUR BOR",
    foto: "/PDAM1.jpeg",
    deskripsi:
      "Pengeboran sumur dalam dan instalasi sistem pompa untuk menjamin ketersediaan air bersih yang stabil bagi kebutuhan industri dan domestik.",
    deskripsiLengkap:
      "Proyek pengadaan jaringan PDAM ini mencakup survei hidrogeologi, pengeboran sumur dalam hingga kedalaman optimal, instalasi casing dan screen berkualitas tinggi, serta pemasangan sistem pompa submersible yang efisien. Kami juga membangun sistem distribusi air yang terintegrasi untuk memastikan pasokan air bersih yang handal.",
    lokasi: "Perumahan Puri Griasadi Ciseeng Bogor",
    galeri: ["/PDAMProject1.jpeg", "/PDAMProject2.jpeg", "/PDAMProject3.jpeg"],
  },
  {
    slug: "electric-pole",
    judul: "Pengadaan Tiang Listrik",
    kategori: "Electrical Engineering",
    foto: "/tianglistrik.jpeg",
    deskripsi: "Pengadaan tiang listrik untuk kebutuhan industri dan domestik.",
    deskripsiLengkap:
      "Penyediaan tiang listrik beton dan besi berkualitas standar PLN untuk mendukung infrastruktur kelistrikan. Meliputi tiang tegangan rendah (TR) dan tegangan menengah (TM) dengan spesifikasi yang tahan terhadap kondisi cuaca ekstrem.",
    lokasi: "Perumahan Hawtha Inat Tajur Halang Bogor",
    galeri: ["/tiang1.jpeg", "/tiang2.jpeg", "/tiang3.jpeg"],
  },
  {
    slug: "transformer-installation",
    judul: "Pemasangan Trafo dan Panel",
    kategori: "Electrical Engineering",
    foto: "/trafopanel.jpeg",
    deskripsi: "Pemasangan trafo dan panel untuk kebutuhan industri dan domestik.",
    deskripsiLengkap:
      "Instalasi transformator distribusi dan panel distribusi tegangan rendah (LVMDP) serta panel kapasitor bank. Kami memastikan setiap instalasi memenuhi standar keamanan (PUIL) dan sertifikasi layak operasi (SLO).",
    lokasi: "Alun - Alun Kota Depok",
    galeri: ["/Trafo1.jpeg", "/Trafo2.jpeg", "/Trafo3.jpeg"],
  },
  {
    slug: "cubicle-installation",
    judul: "Pemasangan Kubikel",
    kategori: "Electrical Engineering",
    foto: "/kubikel.jpeg",
    deskripsi: "Pemasangan kubikel untuk kebutuhan industri dan domestik.",
    deskripsiLengkap:
      "Pemasangan kubikel tegangan menengah (MVMDP) 20kV untuk perlindungan dan switching jaringan distribusi listrik. Menggunakan komponen berkualitas dari merek terkemuka.",
    lokasi: "Pabrik Smelting Karawang",
    galeri: ["/kubikel1.jpeg", "/kubikel2.jpeg", "/kubikel3.jpeg"],
  },
  {
    slug: "electrical-installation",
    judul: "Pemasangan instalasi listrik",
    kategori: "Telecommunication Infrastructure",
    foto: "/instalasilistrik.jpeg",
    deskripsi: "Pemasangan instalasi listrik untuk kebutuhan industri dan domestik.",
    deskripsiLengkap:
      "Instalasi kelistrikan menyeluruh mulai dari penerangan, stop kontak, hingga sistem daya untuk mesin industri. Kami mengutamakan kerapian jalur kabel, keseimbangan beban, dan keamanan instalasi.",
    lokasi: "Perumahan Puri Griasadi Cikande Banten",
    galeri: ["/INSLISTRIK1.jpeg", "/INSLISTRIK2.jpeg", "/INSLISTRIK3.jpeg"],
  },
  {
    slug: "genset-procurement",
    judul: "Pengadaan Genset",
    kategori: "Telecommunication Infrastructure",
    foto: "/Genset.jpeg",
    deskripsi: "Pengadaan Genset untuk kebutuhan industri dan domestik.",
    deskripsiLengkap:
      "Penyediaan unit generator set (Genset) kapasitas besar (silent/open type) sebagai sumber daya cadangan. Termasuk instalasi sistem ATS/AMF (Automatic Transfer Switch/Automatic Main Failure) untuk perpindahan daya otomatis.",
    lokasi: "Data Center & Rumah Sakit",
    galeri: ["/Genset1.jpeg", "/Genset2.jpeg", "/Genset3.jpeg"],
  },
];

export const directors = [
  { name: "M.Saoma Gofur, Lc", role: "Direktur Utama", photo: "/gofur.jpeg" },
  { name: "Sarah Nadia, M.Kn", role: "Komisaris", photo: "/Sarah1.png" },
  { name: "Alex Herius", role: "Direktur", photo: "/Alex.jpeg" },
];

export const clients = [
  { name: "Rumaji Group" },
  { name: "PT. Puri Angkasa Permata Group" },
  { name: "PT.Saka" },
  { name: "PT. Anugerah Mulya Nusaindo" },
  { name: "Delta Group" },
  { name: "PT. Cijantung Anugerah Sukses Mandiri" },
  { name: "RS BRAWIJAYA Saharjo Tebet" },
];
