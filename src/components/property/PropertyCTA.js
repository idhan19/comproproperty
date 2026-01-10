"use client";
import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

const PropertyCTA = () => {
    return (
        <section className="relative py-24 bg-amber-700 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/80"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                    Butuh Bantuan Memilih Properti?
                </h2>
                <p className="text-amber-100 text-lg mb-10 leading-relaxed">
                    Tim ahli kami siap membantu Anda menemukan properti yang paling sesuai dengan kebutuhan dan budget Anda. Konsultasi gratis sekarang juga!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                        <MessageCircle size={20} />
                        Chat WhatsApp
                    </button>
                    <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm">
                        <PhoneCall size={20} />
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PropertyCTA;
