import Image from 'next/image';
import { Download } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';
import WithPlaceholders, { stripPlaceholders } from '@/components/WithPlaceholders';
import { about, company, companyProfilePdf, directors, management, seo } from '@/data/site';

export default function About() {
    return (
        <section id="about" className="bg-gradient-to-b from-surface to-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profil, visi, misi */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <SectionHeading eyebrow="Tentang Kami" title="Membangun Negeri Bersama Mitra" align="left" />
                        <Reveal animation="fade-right" delay={150}>
                            <p className="-mt-4 text-lg leading-relaxed text-navy/80">{seo.description}</p>
                            <a
                                href={companyProfilePdf}
                                download
                                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-800"
                            >
                                <Download size={18} aria-hidden="true" className="transition-transform group-hover:translate-y-0.5" />
                                Unduh Company Profile
                            </a>
                        </Reveal>
                    </div>
                    <div className="space-y-6">
                        <Reveal animation="zoom-in">
                            <figure className="rounded-2xl bg-gradient-to-br from-navy to-navy-950 p-8 text-white shadow-xl shadow-navy/20 md:p-10">
                                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Visi</p>
                                <blockquote className="text-xl leading-relaxed md:text-2xl">&ldquo;{about.visi}&rdquo;</blockquote>
                            </figure>
                        </Reveal>
                        <Reveal animation="fade-up" delay={150}>
                            <div className="rounded-2xl border border-navy-100 bg-white p-8 md:p-10">
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
                        </Reveal>
                    </div>
                </div>

                {/* Direksi & Komisaris */}
                <div className="mt-24">
                    <SectionHeading eyebrow="Struktur Organisasi" title="Direksi dan Komisaris" />
                    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {directors.map((person, index) => (
                            <Reveal key={person.name} as="article" animation="flip-in-y" delay={index * 140}>
                                <div className="group overflow-hidden rounded-2xl border border-navy/40 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-navy hover:shadow-xl hover:shadow-navy/15">
                                    <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                                        <Image
                                            src={person.photo}
                                            alt={`Foto ${stripPlaceholders(person.name)}, ${person.role} ${company.name}`}
                                            fill
                                            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/40 to-transparent" aria-hidden="true" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-lg font-bold text-navy">
                                            <WithPlaceholders text={person.name} />
                                        </h3>
                                        <p className="mt-1 text-sm font-semibold text-brand-600">{person.role}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Tim Manajemen */}
                <div className="mt-20">
                    <Reveal as="h3" animation="fade-up" className="mb-8 text-center text-xl font-bold text-navy">
                        Tim Manajemen
                    </Reveal>
                    <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {management.map((person, index) => (
                            <Reveal
                                key={person.name}
                                as="li"
                                animation="fade-up"
                                delay={index * 100}
                            >
                                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 text-center transition hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-md">
                                    <p className="font-bold text-navy">{person.name}</p>
                                    <p className="mt-1 text-sm text-navy/70">{person.role}</p>
                                </div>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
