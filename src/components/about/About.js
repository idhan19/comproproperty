import Image from 'next/image';
import { Download } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import WithPlaceholders, { stripPlaceholders } from '@/components/WithPlaceholders';
import { about, company, companyProfilePdf, directors, management, seo } from '@/data/site';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profil, visi, misi */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <SectionHeading eyebrow="Tentang Kami" title="Membangun Negeri Bersama Mitra" align="left" />
                        <p className="-mt-4 text-lg leading-relaxed text-navy/80">{seo.description}</p>
                        <a
                            href={companyProfilePdf}
                            download
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
                        >
                            <Download size={18} aria-hidden="true" />
                            Unduh Company Profile
                        </a>
                    </div>
                    <div className="space-y-6">
                        <figure className="rounded-2xl bg-navy p-8 text-white md:p-10">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Visi</p>
                            <blockquote className="text-xl leading-relaxed md:text-2xl">&ldquo;{about.visi}&rdquo;</blockquote>
                        </figure>
                        <div className="rounded-2xl border border-navy-100 p-8 md:p-10">
                            <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-600">Misi</p>
                            <ol className="space-y-4">
                                {about.misi.map((item, index) => (
                                    <li key={item} className="flex gap-4 text-navy/80 leading-relaxed">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                                            {index + 1}
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Direksi & Komisaris */}
                <div className="mt-24">
                    <SectionHeading eyebrow="Struktur Organisasi" title="Direksi dan Komisaris" />
                    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {directors.map((person) => (
                            <article key={person.name} className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
                                <div className="relative aspect-[4/5] bg-surface">
                                    <Image
                                        src={person.photo}
                                        alt={`Foto ${stripPlaceholders(person.name)}, ${person.role} ${company.name}`}
                                        fill
                                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-navy">
                                        <WithPlaceholders text={person.name} />
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-brand-600">{person.role}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Tim Manajemen */}
                <div className="mt-20">
                    <h3 className="mb-8 text-center text-xl font-bold text-navy">Tim Manajemen</h3>
                    <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {management.map((person) => (
                            <li key={person.name} className="rounded-2xl bg-surface p-6 text-center">
                                <p className="font-bold text-navy">{person.name}</p>
                                <p className="mt-1 text-sm text-navy/70">{person.role}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
