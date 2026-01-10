"use client";
import React from 'react';
import Image from 'next/image';
import { MapPin, BedDouble, Bath, Square, ArrowRight } from 'lucide-react';

const properties = [
    {
        id: 1,
        title: "Villa Harmoni",
        price: "Rp 3.5 M",
        type: "Disewa",
        location: "Kuta, Bali",
        beds: 4,
        baths: 3,
        area: "350m²",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Griya Sejahtera",
        price: "Rp 1.2 M",
        type: "Dijual",
        location: "Surabaya",
        beds: 3,
        baths: 2,
        area: "120m²",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36db2?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Apartemen Elegan",
        price: "Rp 850 Jt",
        type: "Dijual",
        location: "Jakarta Pusat",
        beds: 2,
        baths: 1,
        area: "75m²",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
    }
];

const FeaturedProperties = () => {
    return (
        <section id="properti" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-4">
                        Properti <span className="text-emerald-600">Unggulan</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Pilihan terbaik kami untuk Anda. Setiap properti dipilih dengan cermat untuk memastikan kenyamanan dan nilai investasi terbaik.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div key={property.id} className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group border border-zinc-100 dark:border-zinc-800">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-amber-400/90 backdrop-blur-sm text-amber-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                    {property.type}
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-emerald-700 font-bold px-3 py-1.5 rounded-full shadow-lg">
                                    {property.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 font-serif">{property.title}</h3>
                                <div className="flex items-center text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                                    <MapPin size={16} className="mr-1.5 text-emerald-500" />
                                    {property.location}
                                </div>

                                <div className="flex justify-between items-center py-4 border-t border-zinc-100 dark:border-zinc-800 mb-6">
                                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                                        <BedDouble size={18} className="text-emerald-500" />
                                        <span className="text-sm font-medium">{property.beds} <span className="hidden xl:inline">Kamar</span></span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                                        <Bath size={18} className="text-emerald-500" />
                                        <span className="text-sm font-medium">{property.baths} <span className="hidden xl:inline">Kamar Mandi</span></span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                                        <Square size={18} className="text-emerald-500" />
                                        <span className="text-sm font-medium">{property.area}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                                    Hubungi Sekarang
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center justify-center bg-zinc-900 hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-all dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        Lihat Semua Properti
                        <ArrowRight size={18} className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
