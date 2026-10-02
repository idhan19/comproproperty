import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ProjectFilter from '@/components/projects/ProjectFilter';
import { SITE_URL, publishedProjects, services } from '@/data/site';

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
            <Footer />
        </main>
    );
}
