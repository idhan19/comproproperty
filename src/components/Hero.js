"use client";
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { hero, waLink } from '@/data/site';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden">
            {/* Industrial Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a20_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-4xl">
                    {/* Certifications Badge */}


                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight font-sans">
                        {hero.headline}
                    </h1>

                    <div className="flex items-start gap-4 mb-10 border-l-4 border-red-600 pl-6">
                        <p className="text-zinc-300 text-lg md:text-2xl leading-relaxed max-w-3xl font-light">
                            {hero.subheadline}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 border border-red-600"
                        >
                            Konsultasi via WhatsApp
                            <MessageCircle size={20} />
                        </a>
                        <Link href="#projects" className="bg-transparent text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2 border border-blue-700/50 hover:border-blue-500">
                            Lihat Proyek
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Technical Stats Strip */}

            </div>
        </div>
    );
};

export default Hero;
