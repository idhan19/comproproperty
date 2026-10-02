"use client";
import { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import Reveal from '@/components/motion/Reveal';

const ALL = 'Semua';

export default function ProjectFilter({ projects, categories }) {
    const [active, setActive] = useState(ALL);
    const visible = active === ALL ? projects : projects.filter((project) => project.kategori === active);
    const options = [ALL, ...categories.filter((category) => projects.some((p) => p.kategori === category))];

    return (
        <>
            <div role="group" aria-label="Filter kategori proyek" className="mb-10 flex flex-wrap gap-2">
                {options.map((option) => {
                    const count = option === ALL ? projects.length : projects.filter((p) => p.kategori === option).length;
                    const selected = option === active;
                    return (
                        <button
                            key={option}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setActive(option)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${
                                selected
                                    ? 'border-navy bg-navy text-white'
                                    : 'border-navy-100 bg-white text-navy hover:border-navy/40'
                            }`}
                        >
                            {option} <span className={selected ? 'text-white/70' : 'text-navy/50'}>({count})</span>
                        </button>
                    );
                })}
            </div>
            <p className="sr-only" aria-live="polite">
                Menampilkan {visible.length} proyek
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* key memuat filter aktif agar animasi diputar ulang saat filter diganti. */}
                {visible.map((project, index) => (
                    <Reveal key={`${active}-${project.slug}`} animation="blur-in" delay={(index % 3) * 110} className="h-full">
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>
        </>
    );
}
