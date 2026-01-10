"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
    {
        q: "Bagaimana cara menghubungi tim PropertyVista?",
        a: "Anda dapat menghubungi kami melalui formulir kontak di halaman ini, chat WhatsApp, telepon langsung, atau mengirim email. Tim kami siap membantu Anda setiap hari kerja."
    },
    {
        q: "Apakah konsultasi properti gratis?",
        a: "Ya, konsultasi awal dengan agen properti kami sepenuhnya gratis. Kami akan membantu Anda memahami kebutuhan dan memberikan rekomendasi properti yang sesuai."
    },
    {
        q: "Bagaimana cara menjadwalkan kunjungan ke properti?",
        a: "Anda bisa menghubungi kami via WhatsApp atau menggunakan tombol 'Jadwalkan Kunjungan' pada halaman detail properti. Tim kami akan mengatur waktu yang tepat untuk Anda."
    },
    {
        q: "Apakah PropertyVista melayani pembelian KPR?",
        a: "Tentu saja. Kami bekerja sama dengan berbagai bank terkemuka untuk membantu proses pengajuan KPR Anda agar lebih mudah dan cepat."
    },
    {
        q: "Apakah ada layanan untuk investor properti?",
        a: "Kami memiliki divisi khusus untuk investor yang menyediakan analisis pasar, perhitungan ROI, dan rekomendasi portofolio investasi properti yang menguntungkan."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white dark:bg-zinc-950">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-3">
                        Pertanyaan <span className="text-amber-500">Umum</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Temukan jawaban untuk pertanyaan yang sering diajukan oleh klien kami.
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? 'border-emerald-500 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-500/50'
                                    : 'border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-emerald-200'
                                }`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-emerald-700 dark:text-emerald-400' : 'text-zinc-800 dark:text-zinc-200'}`}>
                                    {item.q}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="text-emerald-500 flex-shrink-0 ml-4" />
                                ) : (
                                    <Plus className="text-zinc-400 flex-shrink-0 ml-4" />
                                )}
                            </button>

                            <div
                                className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
