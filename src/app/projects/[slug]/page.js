import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import WithPlaceholders from '@/components/WithPlaceholders';
import ProjectCard, { ProjectMedia } from '@/components/projects/ProjectCard';
import { SITE_URL, getProject, publishedProjects, waLink } from '@/data/site';

// Hanya slug proyek yang tayang; slug lain (termasuk yang disembunyikan) menjadi 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return publishedProjects.map((project) => ({ slug: project.slug }));
}

/** Deskripsi untuk meta tag, tanpa placeholder konfirmasi. */
function metaDescription(project) {
    return project.deskripsi.replace(/\s*\[KONFIRMASI KLIEN:[^\]]*\]/g, '');
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return {};

    const url = `${SITE_URL}/projects/${project.slug}`;
    const description = metaDescription(project);
    return {
        title: project.judul,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: project.judul,
            description,
            url,
            ...(project.foto && { images: [{ url: project.foto, alt: `Dokumentasi proyek ${project.judul}` }] }),
        },
    };
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const info = [
        { label: 'Kategori', value: project.kategori },
        { label: 'Lokasi', value: project.lokasi },
        { label: 'Mitra', value: project.mitra },
        { label: 'Tahun', value: project.tahun },
    ].filter((item) => item.value);

    const related = publishedProjects
        .filter((other) => other.kategori === project.kategori && other.slug !== project.slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader
                eyebrow={project.kategori}
                title={project.judul}
                crumbs={[
                    { label: 'Beranda', href: '/' },
                    { label: 'Proyek', href: '/projects' },
                    { label: project.judul },
                ]}
            />

            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
                    <div className="lg:col-span-2">
                        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
                            <ProjectMedia project={project} sizes="(min-width: 1024px) 66vw, 100vw" priority />
                        </div>
                        <h2 className="mb-4 text-2xl font-bold text-navy">Ringkasan Proyek</h2>
                        <p className="text-lg leading-relaxed text-navy/80">
                            <WithPlaceholders text={project.deskripsi} />
                        </p>
                    </div>

                    <aside className="lg:col-span-1">
                        <div className="rounded-2xl bg-navy p-8 text-white lg:sticky lg:top-28">
                            <h2 className="mb-6 text-lg font-bold">Informasi Proyek</h2>
                            <dl className="space-y-5">
                                {info.map((item) => (
                                    <div key={item.label} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                                        <dt className="mb-1 text-xs uppercase tracking-wider text-navy-100">{item.label}</dt>
                                        <dd className="font-semibold">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold transition-colors hover:bg-brand-700"
                            >
                                <MessageCircle size={18} aria-hidden="true" />
                                Konsultasi Proyek Serupa
                            </a>
                        </div>
                    </aside>
                </div>
            </section>

            {project.galeri?.length > 0 && (
                <section className="bg-surface py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-10 text-2xl font-bold text-navy md:text-3xl">Dokumentasi Proyek</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {project.galeri.map((src, index) => (
                                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                    <Image
                                        src={src}
                                        alt={`Dokumentasi proyek ${project.judul}, foto ${index + 1}`}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {related.length > 0 && (
                <section className="py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-10 text-2xl font-bold text-navy md:text-3xl">Proyek {project.kategori} Lainnya</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((other) => (
                                <ProjectCard key={other.slug} project={other} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
                <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-navy hover:text-brand-600">
                    <ArrowLeft size={18} aria-hidden="true" />
                    Kembali ke Semua Proyek
                </Link>
            </div>

            <Footer />
        </main>
    );
}
