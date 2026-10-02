import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Check, ChevronRight, MessageCircle } from 'lucide-react';
import Gallery from '@/components/Gallery';
import VideoCard from '@/components/VideoCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';
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
                    <Reveal animation="fade-right">
                        <p className="text-lg leading-relaxed text-navy/80 md:text-xl">{page.intro}</p>
                    </Reveal>
                    <Reveal animation="zoom-in" className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy/10">
                        <Image
                            src={page.image.src}
                            alt={page.image.alt}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </Reveal>
                </div>
            </section>

            {/* Layanan Kami */}
            <section id="layanan-material" className="bg-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading eyebrow="Material & Logistik" title="Layanan Kami" />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {page.items.map((item, index) => (
                            <Reveal
                                as="article"
                                key={item.title}
                                animation="flip-in-y"
                                delay={(index % 3) * 120}
                                className="h-full"
                            >
                                <div className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
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
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dokumentasi lapangan: video dan foto dari lokasi sumber material */}
            <section className="bg-gradient-to-b from-white to-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Dokumentasi"
                        title="Dokumentasi Lapangan"
                        description="Aktivitas pemuatan dan pengangkutan material dari lokasi sumber material."
                    />
                    <div className="mx-auto mb-12 grid max-w-3xl gap-6 sm:grid-cols-2">
                        {page.videos.map((video, index) => (
                            <Reveal key={video.src} animation="fade-up" delay={index * 120}>
                                <VideoCard {...video} />
                            </Reveal>
                        ))}
                    </div>
                    <Gallery items={page.dokumentasi} altPrefix="Dokumentasi material dan logistik" />
                </div>
            </section>

            {/* Keunggulan Layanan */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading eyebrow="Mengapa Kami" title="Keunggulan Layanan" />
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {page.advantages.map((item, index) => (
                            <Reveal
                                as="li"
                                key={item.text}
                                animation="fade-up"
                                delay={(index % 3) * 100}
                            >
                                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-md">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                                    <Icon name={item.icon} size={20} />
                                </div>
                                <p className="pt-1.5 font-medium leading-snug text-navy">{item.text}</p>
                                </div>
                            </Reveal>
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
                    <Reveal as="p" animation="fade-up" className="text-2xl font-bold leading-snug text-navy md:text-3xl">{page.closing}</Reveal>
                    <WhatsAppButton className="mt-10" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
