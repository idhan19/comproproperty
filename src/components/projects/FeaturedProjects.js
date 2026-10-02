import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import Reveal from '@/components/motion/Reveal';
import { featuredProjects } from '@/data/site';

export default function FeaturedProjects() {
    return (
        <section id="projects" className="bg-gradient-to-b from-navy to-navy-950 py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tone="dark"
                    eyebrow="Proyek"
                    title="Proyek Unggulan"
                    description="Sebagian pekerjaan yang telah kami tangani untuk pengembang perumahan, industri, dan fasilitas publik."
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={project.slug} animation="blur-in" delay={(index % 3) * 130} className="h-full">
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
                <Reveal animation="fade-up" className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-navy"
                    >
                        Lihat Semua Proyek
                        <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
