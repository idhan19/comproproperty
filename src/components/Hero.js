"use client";
import React from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center bg-zinc-900 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=2088&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
                <span className="text-emerald-400 font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">Selamat Datang di PropertyVista</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl font-serif">
                    Rumah Impian Anda <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500">Menanti</span>
                </h1>
                <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
                    Temukan properti premium berkwalitas tinggi yang sempurna untuk keluarga Anda. Investasi terbaik kehidupan masa depan dimulai dari sini.
                </p>

                {/* Search Box */}
                <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-3 rounded-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row gap-2">
                    <div className="flex-1 bg-white dark:bg-zinc-900 rounded-2xl md:rounded-l-2xl md:rounded-r-none px-6 py-4 flex items-center gap-3 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
                        <MapPin className="text-emerald-500" />
                        <div className="text-left w-full">
                            <label className="block text-xs text-zinc-500 font-medium mb-0.5">Lokasi</label>
                            <select className="w-full bg-transparent font-semibold text-zinc-800 dark:text-zinc-100 outline-none cursor-pointer appearance-none">
                                <option>Semua Lokasi</option>
                                <option>Jakarta Selatan</option>
                                <option>Bali</option>
                                <option>Surabaya</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex-1 bg-white dark:bg-zinc-900 px-6 py-4 flex items-center gap-3 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
                        <Home className="text-emerald-500" />
                        <div className="text-left w-full">
                            <label className="block text-xs text-zinc-500 font-medium mb-0.5">Tipe Properti</label>
                            <select className="w-full bg-transparent font-semibold text-zinc-800 dark:text-zinc-100 outline-none cursor-pointer appearance-none">
                                <option>Semua Tipe</option>
                                <option>Rumah</option>
                                <option>Apartemen</option>
                                <option>Villa</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex-1 bg-white dark:bg-zinc-900 px-6 py-4 flex items-center gap-3">
                        <DollarSign className="text-emerald-500" />
                        <div className="text-left w-full">
                            <label className="block text-xs text-zinc-500 font-medium mb-0.5">Harga</label>
                            <select className="w-full bg-transparent font-semibold text-zinc-800 dark:text-zinc-100 outline-none cursor-pointer appearance-none">
                                <option>Semua Harga</option>
                                <option>500jt - 1M</option>
                                <option>1M - 3M</option>
                                <option>&gt; 3M</option>
                            </select>
                        </div>
                    </div>

                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl px-8 py-4 md:py-0 font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25">
                        <Search size={20} />
                        Cari
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-white border-t border-white/10 pt-8 w-full max-w-3xl">
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">500+</div>
                        <div className="text-zinc-400 text-sm md:text-base">Properti Terjual</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">15+</div>
                        <div className="text-zinc-400 text-sm md:text-base">Tahun Pengalaman</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">5000+</div>
                        <div className="text-zinc-400 text-sm md:text-base">Klien Bahagia</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
