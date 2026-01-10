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
    },
    {
        id: 4,
        title: "Rumah Minimalis",
        price: "Rp 2.1 M",
        type: "Dijual",
        location: "Bandung",
        beds: 3,
        baths: 2,
        area: "150m²",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Townhouse Modern",
        price: "Rp 4.2 M",
        type: "Dijual",
        location: "Jakarta Selatan",
        beds: 4,
        baths: 3,
        area: "200m²",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Villa Mountain View",
        price: "Rp 7.5 M",
        type: "Dijual",
        location: "Puncak, Bogor",
        beds: 6,
        baths: 5,
        area: "600m²",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Rumah Kebun Asri",
        price: "Rp 950 Jt",
        type: "Dijual",
        location: "Malang",
        beds: 2,
        baths: 1,
        area: "90m²",
        image: "https://images.unsplash.com/photo-1625834330556-6602280d23f8?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Apartemen Studio",
        price: "Rp 450 Jt",
        type: "Disewa",
        location: "Tangerang",
        beds: 1,
        baths: 1,
        area: "35m²",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "Rumah Mewah",
        price: "Rp 12 M",
        type: "Dijual",
        location: "Pondok Indah",
        beds: 5,
        baths: 6,
        area: "800m²",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
    }
];

const PropertyGrid = () => {
    return (
        <section className="bg-zinc-50 dark:bg-zinc-950 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold font-serif text-emerald-950 dark:text-emerald-50">
                        Properti <span className="text-emerald-600">Tersedia</span>
                    </h2>
                    <div className="text-sm text-zinc-500">Menampilkan 9 dari 45 properti</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div key={property.id} className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group border border-zinc-100 dark:border-zinc-800 flex flex-col">
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

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 font-serif line-clamp-1">{property.title}</h3>
                                <div className="flex items-center text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                                    <MapPin size={16} className="mr-1.5 text-emerald-500" />
                                    {property.location}
                                </div>

                                <div className="flex justify-between items-center py-4 border-t border-zinc-100 dark:border-zinc-800 mb-6 mt-auto">
                                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                                        <BedDouble size={18} className="text-emerald-500" />
                                        <span className="text-sm font-medium">{property.beds}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                                        <Bath size={18} className="text-emerald-500" />
                                        <span className="text-sm font-medium">{property.baths}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                                        <Square size={18} className="text-emerald-500" />
                                        <span className="text-sm font-medium">{property.area}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="w-full bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 py-2.5 rounded-xl font-medium transition-colors text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                        Lihat Detail
                                    </button>
                                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                                        Whatsapp
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-emerald-900/20">
                        Muat Lebih Banyak Properti
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PropertyGrid;
