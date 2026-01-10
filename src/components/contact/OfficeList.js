"use client";
import React from 'react';
import { MapPin, Clock, ArrowUpRight, Calendar } from 'lucide-react';

const offices = [
    {
        city: "Jakarta Pusat (Headquarters)",
        address: "Jl. Jendral Sudirman No. 123, SCBD, Jakarta Selatan, DKI Jakarta 12190",
        hours: {
            weekdays: "Senin - Jumat: 08:30 - 17:30 WIB",
            weekend: "Sabtu - Minggu: 09:00 - 15:00 WIB"
        }
    },
    {
        city: "Tangerang Selatan",
        address: "Jl. Boulevard Raya Blok Gading Serpong No. 8A, Tangerang Selatan, Banten 15810",
        hours: {
            weekdays: "Senin - Jumat: 09:00 - 18:00 WIB",
            weekend: "Sabtu: 09:00 - 14:00 WIB"
        }
    },
    {
        city: "Bekasi",
        address: "Jl. Ahmad Yani No. 99, Summarecon Bekasi, Bekasi, Jawa Barat 17142",
        hours: {
            weekdays: "Senin - Jumat: 09:00 - 17:00 WIB",
            weekend: "Sabtu - Minggu: Tutup"
        }
    }
];

const OfficeList = () => {
    return (
        <div className="h-full">
            <div className="mb-10">
                <h2 className="text-3xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-3">
                    Kantor <span className="text-amber-500">Kami</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Kunjungi kami di lokasi terdekat Anda untuk konsultasi langsung.
                </p>
            </div>

            <div className="space-y-6">
                {offices.map((office, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow group">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-emerald-50 dark:bg-zinc-800 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                                <span className="font-bold">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-50 mb-2">{office.city}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 leading-relaxed">{office.address}</p>

                                <div className="space-y-2 mb-6 text-sm text-zinc-600 dark:text-zinc-300">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-amber-500" />
                                        <span>{office.hours.weekdays}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-amber-500" />
                                        <span>{office.hours.weekend}</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2">
                                        Petunjuk Arah
                                        <ArrowUpRight size={16} />
                                    </button>
                                    <button className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20">
                                        Jadwalkan Kunjungan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfficeList;
