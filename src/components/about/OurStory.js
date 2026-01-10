"use client";
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
    return (
        <section className="py-24 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-6">
                            Cerita <span className="text-amber-500">Kami</span>
                        </h2>
                        <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                            <p>
                                Bermula dari sebuah kantor kecil di Jakarta pada tahun 2010, PropertyVista lahir dengan visi sederhana: membuat proses kepemilikan rumah menjadi mudah, transparan, dan menyenangkan bagi setiap keluarga.
                            </p>
                            <p>
                                Kami percaya bahwa rumah bukan sekadar bangunan, melainkan tempat di mana kenangan indah diciptakan. Filosofi ini mendorong kami untuk selalu mengutamakan kualitas, kenyamanan, dan keberlanjutan dalam setiap proyek yang kami kembangkan.
                            </p>
                            <p>
                                Hingga hari ini, kami telah berkembang menjadi salah satu pengembang properti terpercaya di Indonesia, namun semangat kami tetap sama: membantu Anda menemukan tempat yang bisa Anda sebut "Rumah".
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                            alt="Kantor PropertyVista"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
