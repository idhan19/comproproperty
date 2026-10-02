"use client";
import { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';

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
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
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
                {visible.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </>
    );
}
