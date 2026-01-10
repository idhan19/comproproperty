"use client";
import React from 'react';
import { Search, MapPin, Home, DollarSign, Filter } from 'lucide-react';

const PropertyFilter = () => {
    return (
        <div className="bg-zinc-50 dark:bg-zinc-950 pb-16 sticky top-20 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 shadow-lg border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row gap-4 items-center">

                    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700">
                            <MapPin size={18} className="text-zinc-400" />
                            <select className="bg-transparent w-full outline-none text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <option>Semua Lokasi</option>
                                <option>Jakarta Selatan</option>
                                <option>Bali</option>
                                <option>Surabaya</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700">
                            <Home size={18} className="text-zinc-400" />
                            <select className="bg-transparent w-full outline-none text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <option>Semua Tipe</option>
                                <option>Rumah</option>
                                <option>Apartemen</option>
                                <option>Villa</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700">
                            <DollarSign size={18} className="text-zinc-400" />
                            <select className="bg-transparent w-full outline-none text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <option>Semua Harga</option>
                                <option>500jt - 1M</option>
                                <option>1M - 3M</option>
                                <option>&gt; 3M</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700">
                            <Filter size={18} className="text-zinc-400" />
                            <select className="bg-transparent w-full outline-none text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <option>Filter Lainnya</option>
                                <option>2+ Kamar Tidur</option>
                                <option>3+ Kamar Tidur</option>
                                <option>Kolam Renang</option>
                            </select>
                        </div>
                    </div>

                    <button className="w-full md:w-auto bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                        <Search size={18} />
                        Cari Properti
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PropertyFilter;
