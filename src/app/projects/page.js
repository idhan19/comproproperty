import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ProjectFilter from '@/components/projects/ProjectFilter';
import { SITE_URL, dokumentasi, publishedProjects, services } from '@/data/site';

// Dokumentasi lapangan dikelompokkan per kategori layanan (urutan mengikuti layanan).
const dokumentasiPerKategori = services
    .map((service) => ({ kategori: service.title, items: dokumentasi.filter((item) => item.kategori === service.title) }))
    .filter((group) => group.items.length > 0);

const description =
    'Daftar proyek PT Ponco Munaro Utama: konstruksi bangunan, mekanikal elektrikal, infrastruktur air bersih, telekomunikasi, dan pekerjaan tanah.';

export const metadata = {
    title: 'Semua Proyek',
    description,
    alternates: { canonical: `${SITE_URL}/projects` },
    openGraph: { title: 'Semua Proyek', description, url: `${SITE_URL}/projects` },
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader
                eyebrow="Portofolio"
                title="Semua Proyek"
                description={description}
                crumbs={[{ label: 'Beranda', href: '/' }, { label: 'Proyek' }]}
            />
            <section className="py-16 md:py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ProjectFilter
                        projects={publishedProjects}
                        categories={services.map((service) => service.title)}
                    />
                </div>
            </section>
            {dokumentasiPerKategori.length > 0 && (
                <section id="dokumentasi" className="bg-gradient-to-b from-white to-surface py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeading
                            eyebrow="Galeri"
                            title="Dokumentasi Lapangan"
                            description="Dokumentasi pekerjaan tim kami di lapangan. Keterangan lokasi dan tanggal mengikuti cap pada foto."
                        />
                        <div className="space-y-14">
                            {dokumentasiPerKategori.map((group) => (
                                <div key={group.kategori}>
                                    <h3 className="mb-6 text-xl font-bold text-navy">{group.kategori}</h3>
                                    <Gallery items={group.items} columns="sm:grid-cols-3 lg:grid-cols-4" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            <Footer />
        </main>
    );
}
