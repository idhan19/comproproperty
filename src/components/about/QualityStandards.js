"use client";
import React from 'react';
import { ShieldCheck, Lightbulb, Users, Heart, Leaf, Award } from 'lucide-react';

const values = [
    { icon: <ShieldCheck size={32} />, title: "Keamanan", desc: "Prioritas utama dalam setiap aspek konstruksi dan lingkungan." },
    { icon: <Lightbulb size={32} />, title: "Inovasi", desc: "Selalu mencari cara baru untuk meningkatkan kualitas hunian." },
    { icon: <Users size={32} />, title: "Kolaborasi", desc: "Bekerja sama dengan ahli terbaik di bidangnya." },
    { icon: <Leaf size={32} />, title: "Keberlanjutan", desc: "Ramah lingkungan dan hemat energi untuk masa depan." },
    { icon: <Heart size={32} />, title: "Integritas", desc: "Transparan dan jujur dalam setiap layanan kami." },
    { icon: <Award size={32} />, title: "Kualitas", desc: "Standar material dan pengerjaan premium tanpa kompromi." },
];

const QualityStandards = () => {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-3">
                        Standar <span className="text-amber-500">Kualitas</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Kami memegang teguh nilai-nilai ini dalam setiap proyek.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {values.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-zinc-100 dark:border-zinc-800 group">
                            <div className="w-14 h-14 bg-emerald-50 dark:bg-zinc-800 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{item.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-serif text-emerald-950 dark:text-emerald-50 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4 inline-block px-12">
                        Sertifikasi & Penghargaan
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder logos */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-2">
                                    <Award className="text-zinc-400" />
                                </div>
                                <span className="text-xs font-bold text-zinc-500">ISO 9001:2015</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityStandards;
