"use client";
import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

const ContactBottomCTA = () => {
    return (
        <section className="relative py-28 bg-[#8B5E3C] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5E3C]/95 to-[#6F4E37]/90"></div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-left md:w-2/3">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">
                        Siap Memulai Perjalanan Anda?
                    </h2>
                    <p className="text-amber-100/90 text-lg leading-relaxed">
                        Jangan ragu untuk menghubungi kami. Tim ahli kami siap membantu mewujudkan impian properti Anda.
                    </p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 w-full md:w-auto">
                        <MessageCircle size={22} />
                        Chat Sekarang
                    </button>
                    <button className="bg-[#D4A373] hover:bg-[#C59265] text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 w-full md:w-auto border border-white/20">
                        <Calendar size={22} />
                        Buat Janji Temu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactBottomCTA;
