"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative py-32 bg-emerald-900 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582268611958-ebfd161ef2cf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-900/80"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif leading-tight">
                    Siap Menemukan <br /><span className="text-emerald-200">Rumah Impian Anda?</span>
                </h2>
                <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    Hubungi kami sekarang dan biarkan tim profesional kami membantu Anda menemukan properti yang sempurna untuk keluarga Anda.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20">
                        Konsultasi Gratis
                    </button>
                    <button className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-emerald-900 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl cursor-pointer">
                        Jelajahi Properti
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
