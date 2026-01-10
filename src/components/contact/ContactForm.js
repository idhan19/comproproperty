"use client";
import React from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ContactForm = () => {
    return (
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-10 shadow-sm border border-zinc-100 dark:border-zinc-800 h-full">
            <h2 className="text-3xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-2">
                Kirim <span className="text-amber-500">Pesan</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
            </p>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Nama Lengkap *</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-zinc-400"
                        placeholder="Masukkan nama lengkap Anda"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email *</label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-zinc-400"
                        placeholder="nama@email.com"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Nomor WhatsApp *</label>
                        <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-zinc-400"
                            placeholder="+62 812 3456 7890"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Topik Pertanyaan *</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer">
                            <option>Pilih Topik</option>
                            <option>Membeli Properti</option>
                            <option>Menjual Properti</option>
                            <option>Sewa Properti</option>
                            <option>Kerjasama</option>
                            <option>Lainnya</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Pesan *</label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-zinc-400 resize-none"
                        placeholder="Ceritakan kebutuhan properti Anda..."
                    ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button type="button" className="flex-1 bg-emerald-900 hover:bg-emerald-800 text-white py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                        <Send size={18} />
                        Kirim Pesan
                    </button>
                    <button type="button" className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10">
                        <MessageCircle size={18} />
                        Chat via WhatsApp
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
