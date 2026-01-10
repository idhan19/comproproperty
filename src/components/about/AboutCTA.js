"use client";
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const AboutCTA = () => {
    return (
        <section className="relative py-28 bg-[#8B5E3C] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                    Ingin Tahu Lebih Lanjut?
                </h2>
                <p className="text-amber-100/90 text-lg mb-10 leading-relaxed">
                    Diskusikan rencana masa depan Anda bersama kami. Kami siap mendengarkan dan mewujudkan impian hunian Anda.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-white text-[#8B5E3C] hover:bg-zinc-100 px-8 py-3.5 rounded-md font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                        <Mail size={20} />
                        Hubungi Kami
                    </button>
                    <button className="w-full sm:w-auto bg-[#6F4E37] hover:bg-[#5D4037] text-white px-8 py-3.5 rounded-md font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 border border-white/20">
                        Lihat Proyek Kami
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
