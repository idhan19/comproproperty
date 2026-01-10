"use client";
import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';

const ContactHero = () => {
    return (
        <div className="relative pt-32 pb-32 bg-emerald-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 to-emerald-900/80"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
                    Mari <span className="text-amber-400">Berbicara</span> Tentang <br />
                    Rumah Impian Anda
                </h1>
                <p className="text-emerald-100/90 max-w-2xl mx-auto mb-16 text-lg">
                    Tim profesional kami siap membantu Anda 24/7. Hubungi kami melalui Whatsapp, kunjungi kantor kami, atau jadwalkan konsultasi gratis sekarang.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto relative z-10 -mb-48 md:-mb-40">
                    <div className="bg-[#25D366] p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white hover:bg-[#20bd5a] transition-colors cursor-pointer group">
                        <MessageSquare size={32} className="mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-xl mb-1">Chat WhatsApp</h3>
                        <p className="text-white/80 text-sm">Respon Cepat 24/7</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-zinc-800 hover:shadow-2xl transition-all cursor-pointer group">
                        <Phone size={32} className="mb-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-xl mb-1">Telepon Kami</h3>
                        <p className="text-zinc-500 text-sm">+62 123 456 7890</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-zinc-800 hover:shadow-2xl transition-all cursor-pointer group">
                        <Mail size={32} className="mb-4 text-amber-500 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-xl mb-1">Email Kami</h3>
                        <p className="text-zinc-500 text-sm">hello@propertyvista.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;
