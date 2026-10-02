import Link from 'next/link';
import { ArrowDown, Camera, Check, ChevronRight, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import WithPlaceholders from '@/components/WithPlaceholders';
import { SITE_URL, materialLogistik as page, waLink, whatsapp } from '@/data/site';

const url = `${SITE_URL}${page.slug}`;

export const metadata = {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: url },
    openGraph: { title: page.meta.title, description: page.meta.description, url },
};

const waMaterial = waLink(whatsapp.messages.material);

function WhatsAppButton({ className = '' }) {
    return (
        <a
            href={waMaterial}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-700 ${className}`}
        >
            <MessageCircle size={20} aria-hidden="true" />
            Konsultasi Material via WhatsApp
        </a>
    );
}

export default function MaterialLogistikPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <header className="relative overflow-hidden bg-navy pt-36 pb-20 text-white md:pb-28">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-brand" aria-hidden="true" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-navy-100">
                        <ol className="flex flex-wrap items-center gap-1.5">
                            <li><Link href="/" className="hover:text-white">Beranda</Link></li>
                            <li aria-hidden="true"><ChevronRight size={14} /></li>
                            <li><Link href="/#services" className="hover:text-white">Layanan</Link></li>
                            <li aria-hidden="true"><ChevronRight size={14} /></li>
                            <li aria-current="page" className="text-white">Material &amp; Logistik</li>
                        </ol>
                    </nav>
                    <span className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy">Layanan Baru</span>
                    <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">{page.title}</h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 md:text-xl">{page.subtitle}</p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <WhatsAppButton />
                        <a
                            href="#layanan-material"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Lihat Layanan
                            <ArrowDown size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Pengantar */}
            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                    <p className="text-lg leading-relaxed text-navy/80 md:text-xl">{page.intro}</p>
                    {/* Slot foto: ganti dengan foto armada/material milik klien (next/image). */}
                    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-navy/20 bg-surface p-6 text-center">
                        <Camera size={36} className="text-navy/40" aria-hidden="true" />
                        <WithPlaceholders text={page.imagePlaceholder} />
                    </div>
                </div>
            </section>

            {/* Layanan Kami */}
            <section id="layanan-material" className="bg-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading eyebrow="Material & Logistik" title="Layanan Kami" />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {page.items.map((item) => (
                            <article
                                key={item.title}
                                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                    <Icon name={item.icon} size={24} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-navy">{item.title}</h3>
                                <p className="leading-relaxed text-navy/70">
                                    <WithPlaceholders text={item.description} />
                                </p>
                                {item.list && (
                                    <ul className="mt-5 space-y-2.5">
                                        {item.list.map((point) => (
                                            <li key={point} className="flex items-start gap-2.5 text-sm text-navy/80">
                                                <Check size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Keunggulan Layanan */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading eyebrow="Mengapa Kami" title="Keunggulan Layanan" />
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {page.advantages.map((item) => (
                            <li key={item.text} className="flex items-start gap-4 rounded-2xl border border-navy-100 p-6">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                                    <Icon name={item.icon} size={20} />
                                </div>
                                <p className="pt-1.5 font-medium leading-snug text-navy">{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Komitmen Kami */}
            <section aria-labelledby="komitmen" className="bg-brand-600 py-10 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
                    <h2 id="komitmen" className="text-sm font-semibold uppercase tracking-wider text-white/80">Komitmen Kami</h2>
                    <ul className="flex flex-col items-center gap-y-2 text-lg font-bold md:flex-row md:flex-wrap md:justify-center md:gap-x-3 md:text-xl">
                        {page.commitments.map((item, index) => (
                            <li key={item} className="flex items-center gap-3">
                                {index > 0 && <span aria-hidden="true" className="hidden text-accent md:inline">&bull;</span>}
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA penutup */}
            <section className="py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-2xl font-bold leading-snug text-navy md:text-3xl">{page.closing}</p>
                    <WhatsAppButton className="mt-10" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
