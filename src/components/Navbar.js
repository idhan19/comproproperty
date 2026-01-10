"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm dark:bg-zinc-900/90 transaction-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="bg-emerald-600 p-1.5 rounded-lg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-emerald-950 dark:text-emerald-50">PropertyVista</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors dark:text-zinc-300 dark:hover:text-emerald-400">Beranda</Link>
                        <Link href="/property" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors dark:text-zinc-300 dark:hover:text-emerald-400">Properti</Link>
                        <Link href="/about-us" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors dark:text-zinc-300 dark:hover:text-emerald-400">Tentang Kami</Link>
                        <Link href="/contact" className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors dark:text-zinc-300 dark:hover:text-emerald-400">Kontak</Link>
                    </div>

                    <div className="hidden md:flex items-center">
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30">
                            Hubungi Kami
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-emerald-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Beranda</Link>
                        <Link href="#properti" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-emerald-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Properti</Link>
                        <Link href="#tentang" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-emerald-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Tentang Kami</Link>
                        <Link href="#kontak" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-emerald-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Kontak</Link>
                        <div className="pt-4 pb-2">
                            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
