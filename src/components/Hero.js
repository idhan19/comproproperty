import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { company, hero, stats, waLink } from '@/data/site';

export default function Hero() {
    return (
        <>
            <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-navy-950 pt-28 pb-32 md:pb-40">
                <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-brand-700/20" aria-hidden="true" />
                <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                            {company.region}
                        </p>
                        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                            {hero.headline}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 md:text-xl">{hero.subheadline}</p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-700"
                            >
                                <MessageCircle size={20} aria-hidden="true" />
                                Konsultasi via WhatsApp
                            </a>
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
                            >
                                Lihat Proyek
                                <ArrowRight size={20} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strip statistik */}
            <section aria-label="Ringkasan perusahaan" className="relative z-10 -mt-20 bg-[linear-gradient(to_bottom,transparent_50%,#eef0f7_50%)] px-4 sm:px-6 lg:px-8 md:-mt-24">
                <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 shadow-xl shadow-navy/10 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col-reverse justify-center bg-white p-5 text-center sm:p-7">
                            <dt className="mt-1 text-sm text-navy/70 sm:text-base">
                                {stat.label}
                                {stat.detail && <span className="sr-only">: {stat.detail}</span>}
                            </dt>
                            <dd className="text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl" title={stat.detail}>
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>
        </>
    );
}
