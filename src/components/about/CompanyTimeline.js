"use client";
import React from 'react';
import { Circle } from 'lucide-react';

const milestones = [
    { year: "2010", title: "Awal Mula", desc: "PropertyVista didirikan di Jakarta dengan tim beranggotakan 5 orang." },
    { year: "2012", title: "Proyek Pertama", desc: "Berhasil menyelesaikan pembangunan klaster perumahan pertama 'Green Garden' di Bekasi." },
    { year: "2015", title: "Ekspansi Regional", desc: "Membuka kantor cabang di Surabaya dan Bali untuk menjangkau pasar lebih luas." },
    { year: "2018", title: "Top Developer Award", desc: "Meraih penghargaan sebagai 'Rising Star Developer' oleh Property Awards Indonesia." },
    { year: "2023", title: "Visi Masa Depan", desc: "Meluncurkan konsep 'Smart Eco-Living' untuk semua proyek hunian masa depan." }
];

const CompanyTimeline = () => {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-2">
                        Jejak Perjalanan <span className="text-amber-500">Sukses</span>
                    </h2>
                    <p className="text-zinc-500">Mengukir prestasi langkah demi langkah.</p>
                </div>

                <div className="relative border-l-2 border-emerald-200 dark:border-emerald-900 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {milestones.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-1/2 -ml-3 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white dark:border-zinc-900 z-10"></div>
                            <div className="md:hidden absolute left-[-9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900 z-10"></div>

                            <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2"></div>
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                                        <span className="text-amber-500 font-bold text-lg block mb-1">{item.year}</span>
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyTimeline;
