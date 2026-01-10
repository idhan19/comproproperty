"use client";
import React from 'react';
import { Building2, AppWindow, Anchor, LandPlot } from 'lucide-react';

const Partners = () => {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-serif text-emerald-950 dark:text-emerald-50 mb-10">
                    Mitra <span className="text-amber-500 italic">Terpercaya</span> Kami
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2"><Building2 size={32} /><span className="text-xl font-bold">BuildCo</span></div>
                    <div className="flex items-center gap-2"><AppWindow size={32} /><span className="text-xl font-bold">GlassTech</span></div>
                    <div className="flex items-center gap-2"><Anchor size={32} /><span className="text-xl font-bold">SecureHome</span></div>
                    <div className="flex items-center gap-2"><LandPlot size={32} /><span className="text-xl font-bold">GreenLand</span></div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
