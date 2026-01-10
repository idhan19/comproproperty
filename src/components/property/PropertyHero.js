"use client";
import React from 'react';

const PropertyHero = () => {
    return (
        <div className="bg-zinc-50 dark:bg-zinc-950 pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-6 leading-tight">
                    Temukan <span className="text-amber-500">Rumah Impian</span> <br />
                    Anda
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
                    Jelajahi koleksi properti terbaik dari kami. Dari hunian nyaman untuk keluarga hingga investasi properti yang menguntungkan.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        { value: "500+", label: "Properti Tersedia" },
                        { value: "25+", label: "Kota Pilihan" },
                        { value: "15+", label: "Tahun Pengalaman" },
                        { value: "5000+", label: "Klien Bahagia" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 font-serif">{stat.value}</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyHero;
