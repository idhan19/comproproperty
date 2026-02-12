"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, CheckCircle, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectDetail() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-white dark:bg-zinc-950 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px]">
                <div className="absolute inset-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                        <motion.button
                            onClick={() => router.back()}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-white/80 hover:text-white flex items-center gap-2 mb-6 group transition-colors"
                        >
                            <div className="p-2 border border-white/20 rounded-full group-hover:bg-white/10 transition-colors">
                                <ArrowLeft size={20} />
                            </div>
                            <span className="font-medium">Back to Projects</span>
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm mb-4 inline-block">
                                {project.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 text-zinc-300">
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} className="text-red-500" />
                                    <span>{project.location}</span>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-950 dark:text-blue-50 mb-4">Project Overview</h3>
                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                                    {project.detailedDescription || project.description}
                                </p>
                            </div>

                            <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-blue-600 p-6 rounded-r-xl">
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Project Highlights</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>High-quality materials compliant with industry standards.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Completed on time and within budget.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Full safety compliance (K3) implementation.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-blue-950 text-white p-8 rounded-2xl sticky top-24">
                                <h3 className="text-xl font-bold mb-6">Project Info</h3>
                                <div className="space-y-6">
                                    <div>
                                        <span className="block text-blue-300 text-sm mb-1 uppercase tracking-wider">Client</span>
                                        <span className="font-semibold block text-lg">Industrial Partner</span>
                                    </div>
                                    <div className="h-px bg-white/10"></div>
                                    <div>
                                        <span className="block text-blue-300 text-sm mb-1 uppercase tracking-wider">Scope</span>
                                        <span className="font-semibold block text-lg">{project.category}</span>
                                    </div>
                                    <div className="h-px bg-white/10"></div>
                                    <div>
                                        <span className="block text-blue-300 text-sm mb-1 uppercase tracking-wider">Status</span>
                                        <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-bold">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                            Completed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-blue-950 dark:text-blue-50 mb-12 text-center">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.gallery && project.gallery.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-video rounded-xl overflow-hidden shadow-lg group"
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
