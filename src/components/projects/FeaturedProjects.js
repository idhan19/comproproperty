import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionBackdrop from '@/components/SectionBackdrop';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import { featuredProjects } from '@/data/site';

export default function FeaturedProjects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy to-navy-800 py-20 md:py-28"
        >
            <SectionBackdrop
                pattern="dots"
                glows={['-right-32 -top-32 h-[28rem] w-[28rem] bg-brand/25', '-left-40 bottom-0 h-96 w-96 bg-accent/10']}
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tone="dark"
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
                        className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-navy"
                    >
                        Lihat Semua Proyek
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
