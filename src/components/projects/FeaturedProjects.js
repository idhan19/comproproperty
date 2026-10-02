import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import { featuredProjects } from '@/data/site';

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Proyek"
                    title="Proyek Unggulan"
                    description="Sebagian pekerjaan yang telah kami tangani untuk pengembang perumahan, industri, dan fasilitas publik."
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3.5 font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                    >
                        Lihat Semua Proyek
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
