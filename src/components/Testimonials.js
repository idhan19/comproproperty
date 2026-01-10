"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Ahmad & Sarah",
        role: "Pasangan Muda",
        content: "Wow, perjalanan yang luar biasa bersama PropertyVista! Sangat merekomendasikan layanan mereka. Sekarang kami sangat bahagia dengan rumah baru!",
        image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop"
    },
    {
        name: "Budi Santoso",
        role: "Investor Properti",
        content: "Saya sangat puas dengan layanan profesional dari PropertyVista. Mereka sangat membantu dalam menemukan properti investasi yang tepat.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Keluarga Wijaya",
        role: "Upgrade Rumah",
        content: "Terima kasih PropertyVista telah membantu kami menemukan rumah impian yang lebih besar untuk keluarga kami yang tumbuh.",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-4">
                        Cerita <span className="text-amber-500">Keluarga Bahagia</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Dengar apa kata mereka yang telah menemukan hunian impiannya bersama kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 relative hover:transform hover:-translate-y-2 transition-all duration-300">
                            <Quote className="absolute top-8 right-8 text-emerald-100 dark:text-emerald-900/30 w-12 h-12" />
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300 mb-8 italic leading-relaxed relative z-10">"{item.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100">{item.name}</h4>
                                    <p className="text-sm text-emerald-600 font-medium">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
