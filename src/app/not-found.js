import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Halaman Tidak Ditemukan',
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <section className="flex min-h-[70vh] items-center bg-navy pt-28 pb-20 text-white">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">404</p>
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Halaman tidak ditemukan</h1>
                    <p className="mt-6 text-lg text-navy-100">
                        Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
                    </p>
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold transition-colors hover:bg-brand-700"
                        >
                            <ArrowLeft size={18} aria-hidden="true" />
                            Kembali ke Beranda
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 font-semibold transition-colors hover:bg-white/10"
                        >
                            Lihat Semua Proyek
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
