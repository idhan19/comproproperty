"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="kontak" className="bg-emerald-950 text-emerald-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-emerald-500 p-1.5 rounded-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">PropertyVista</span>
                        </div>
                        <p className="text-emerald-200/80 mb-8 leading-relaxed">
                            Mitra terpercaya Anda dalam menemukan hunian impian dan investasi properti masa depan.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-emerald-900/50 p-2 rounded-lg hover:bg-emerald-800 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="bg-emerald-900/50 p-2 rounded-lg hover:bg-emerald-800 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="bg-emerald-900/50 p-2 rounded-lg hover:bg-emerald-800 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="bg-emerald-900/50 p-2 rounded-lg hover:bg-emerald-800 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Tautan Cepat</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
                            <li><a href="#properti" className="hover:text-white transition-colors">Properti</a></li>
                            <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                            <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Layanan</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">Jual Properti</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Beli Properti</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sewa Properti</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Konsultasi Investasi</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                                <span>Jl. Sudirman No. 123, Jakarta Selatan, 12190</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-emerald-500 flex-shrink-0" size={18} />
                                <span>+62 123 4567 890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-emerald-500 flex-shrink-0" size={18} />
                                <span>hello@propertyvista.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-emerald-900 pt-8 text-center text-sm text-emerald-400/60">
                    <p>&copy; {new Date().getFullYear()} PropertyVista. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
