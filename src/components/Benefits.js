"use client";
import React from 'react';
import { Award, TrendingUp, ShieldCheck, HeartHandshake } from 'lucide-react';

const benefits = [
    {
        icon: <Award className="w-8 h-8 text-emerald-600" />,
        title: "Kualitas Terjamin",
        description: "Setiap properti telah melalui pemeriksaan ketat untuk memastikan standar kualitas premium."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-amber-600" />,
        title: "Layanan 24/7",
        description: "Tim support kami siap membantu Anda kapanpun Anda membutuhkan bantuan atau informasi."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        title: "Legalitas Aman",
        description: "Properti dijamin memiliki dokumen lengkap dan bebas sengketa hukum."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
        title: "Investasi Menguntungkan",
        description: "Potensi kenaikan nilai aset properti yang menjanjikan di masa depan."
    }
];

const Benefits = () => {
    return (
        <section id="tentang" className="py-24 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-on-scroll">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-4">
                        Mengapa Memilih <span className="text-amber-500">PropertyVista</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Kami berkomitmen memberikan pengalaman terbaik dalam mencari hunian impian Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-zinc-50 hover:bg-white border border-transparent hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:border-emerald-900/30">
                            <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-zinc-100 dark:border-zinc-700">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 font-serif">
                                {benefit.title}
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
