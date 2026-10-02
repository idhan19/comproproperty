import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import CountUp from '@/components/motion/CountUp';
import Parallax from '@/components/motion/Parallax';
import Reveal from '@/components/motion/Reveal';
import { company, hero, stats, waLink } from '@/data/site';

/** Urutan masuk teks hero (ms). */
const delay = (ms) => ({ '--hero-delay': `${ms}ms` });

export default function Hero() {
    return (
        <>
            <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-navy-950 pt-28 pb-32 md:pb-40">
                {/* Foto: parallax saat scroll + zoom lambat saat dibuka. */}
                <Parallax speed={0.25} className="absolute inset-x-0 -top-[8%] h-[116%]">
                    <div className="ken-burns relative h-full w-full">
                        <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="100vw" className="object-cover" />
                    </div>
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" aria-hidden="true" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p
                            className="hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
                            style={delay(100)}
                        >
                            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                            {company.region}
                        </p>
                        <h1
                            className="hero-in text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                            style={delay(250)}
                        >
                            {hero.headline}
                        </h1>
                        <p className="hero-in mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 md:text-xl" style={delay(450)}>
                            {hero.subheadline}
                        </p>
                        <div className="hero-in mt-10 flex flex-col gap-4 sm:flex-row" style={delay(650)}>
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 font-semibold text-white shadow-lg shadow-brand-700/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
                            >
                                <MessageCircle size={20} aria-hidden="true" className="transition-transform group-hover:-rotate-12" />
                                Konsultasi via WhatsApp
                            </a>
                            <Link
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                            >
                                Lihat Proyek
                                <ArrowRight size={20} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strip statistik: angka menghitung naik saat terlihat. */}
            <section
                aria-label="Ringkasan perusahaan"
                className="relative z-10 -mt-20 bg-[linear-gradient(to_bottom,transparent_50%,#ffffff_50%)] px-4 sm:px-6 lg:px-8 md:-mt-24"
            >
                <Reveal animation="fade-up" delay={300}>
                    <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 shadow-xl shadow-navy/10 md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col-reverse justify-center bg-white p-5 text-center sm:p-7">
                                <dt className="mt-1 text-sm text-navy/70 sm:text-base">
                                    {stat.label}
                                    {stat.detail && <span className="sr-only">: {stat.detail}</span>}
                                </dt>
                                <dd className="text-2xl font-bold tracking-tight text-navy tabular-nums sm:text-3xl lg:text-4xl" title={stat.detail}>
                                    <CountUp value={stat.value} />
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </section>
        </>
    );
}
