import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Icon from '@/components/Icon';
import WithPlaceholders from '@/components/WithPlaceholders';
import { categoryIcon } from '@/data/site';

/** Area foto proyek. Tanpa foto, tampilkan ikon kategori (bukan gambar stok). */
export function ProjectMedia({ project, sizes, priority = false, className = '' }) {
    if (project.foto) {
        return (
            <Image
                src={project.foto}
                alt={`Dokumentasi proyek ${project.judul}`}
                fill
                sizes={sizes}
                priority={priority}
                className={`object-cover ${className}`}
            />
        );
    }
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-800 to-navy-950 text-white/70">
            <Icon name={categoryIcon(project.kategori)} size={44} strokeWidth={1.5} />
            <span className="text-xs">Dokumentasi menyusul</span>
        </div>
    );
}

export default function ProjectCard({ project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectMedia
                    project={project}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
                    {project.kategori}
                </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold leading-snug text-navy">{project.judul}</h3>
                    <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-navy/40 transition group-hover:text-brand-600"
                    />
                </div>
                <p className="mb-5 text-sm leading-relaxed text-navy/70">
                    <WithPlaceholders text={project.deskripsi} />
                </p>
                {project.lokasi && (
                    <p className="mt-auto flex items-start gap-2 text-sm text-navy/80">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                        {project.lokasi}
                    </p>
                )}
            </div>
        </Link>
    );
}
