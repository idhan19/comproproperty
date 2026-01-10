"use client";
import React from 'react';
import { PlusCircle } from 'lucide-react';

const PropertyComparison = () => {
    return (
        <section className="bg-zinc-50 dark:bg-zinc-950 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-3">
                        Bandingkan <span className="text-amber-500">Properti</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
                        Pilih hingga 3 properti untuk membandingkan fasilitas, harga, dan fitur lainnya.
                    </p>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((slot) => (
                            <div key={slot} className="border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-emerald-500 hover:bg-emerald-50/50 transition-all cursor-pointer group h-64">
                                <PlusCircle size={48} className="text-zinc-300 group-hover:text-emerald-500 transition-colors mb-4" />
                                <span className="font-medium text-zinc-400 group-hover:text-emerald-600">Pilih Properti {slot}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button className="bg-emerald-900 text-white/50 cursor-not-allowed px-8 py-3 rounded-full font-medium">
                            Bandingkan Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyComparison;
