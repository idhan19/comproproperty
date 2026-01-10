"use client";
import React from 'react';

const AboutHero = () => {
    return (
        <div className="relative pt-32 pb-24 bg-emerald-900 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 to-emerald-900/80"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
                    Membangun <span className="text-amber-400">Masa Depan</span> <br />
                    Bersama
                </h1>
                <p className="text-emerald-100/90 max-w-2xl mx-auto mb-16 text-lg">
                    Sejak 2010, kami telah berkomitmen untuk menghadirkan hunian berkualitas tinggi dan solusi properti inovatif untuk masyarakat Indonesia.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">15+</div>
                        <div className="text-xs md:text-sm text-emerald-200 uppercase tracking-wider">Tahun Pengalaman</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">200+</div>
                        <div className="text-xs md:text-sm text-emerald-200 uppercase tracking-wider">Proyek Selesai</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">25+</div>
                        <div className="text-xs md:text-sm text-emerald-200 uppercase tracking-wider">Kota Dijangkau</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">100%</div>
                        <div className="text-xs md:text-sm text-emerald-200 uppercase tracking-wider">Kepuasan Klien</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
