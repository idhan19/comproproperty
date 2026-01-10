"use client";
import React from 'react';
import Image from 'next/image';
import { ClipboardList, PenTool, Hammer, Key } from 'lucide-react';

const steps = [
    { icon: <ClipboardList size={24} />, title: "Perencanaan", desc: "Analisis kebutuhan dan studi kelayakan mendalam." },
    { icon: <PenTool size={24} />, title: "Desain", desc: "Perancangan arsitektur dan interior modern." },
    { icon: <Hammer size={24} />, title: "Konstruksi", desc: "Pembangunan dengan standar keamanan tinggi." },
    { icon: <Key size={24} />, title: "Serah Terima", desc: "Pemeriksaan akhir dan penyerahan kunci." }
];

const ConstructionProcess = () => {
    return (
        <section className="py-24 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-3">
                        Proses <span className="text-amber-500">Konstruksi</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Tahapan terstruktur untuk hasil yang sempurna.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                            <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">{step.title}</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Construction Site"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <p className="text-white text-lg font-medium italic">"Kami membangun lebih dari sekadar dinding, kami membangun kepercayaan."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionProcess;
