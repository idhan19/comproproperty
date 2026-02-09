"use client";
import React from 'react';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

const ProjectPortfolio = () => {
    return (
        <section id="projects" className="py-24 bg-blue-950 text-white overflow-hidden relative">
            {/* Subtle Background Pattern for "Premium" feel */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block font-mono">Featured Projects</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-sans">
                            Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Milestones</span>
                        </h2>
                    </motion.div>

                    <motion.a
                        href="/profile"
                        target='_blank'
                        className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-sm font-bold uppercase text-sm tracking-wider transition-all flex items-center gap-2 inline-flex"
                    >
                        View All Projects
                        <ArrowUpRight size={16} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-blue-900/40 border border-blue-800/50 hover:border-red-600/50 transition-all duration-500 overflow-hidden rounded-xl shadow-lg hover:shadow-red-900/20 relative"
                        >
                            <Link href={`/projects/${project.id}`} className="block h-full">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-md">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-white text-2xl font-bold leading-tight group-hover:text-blue-200 transition-colors">
                                            {project.title}
                                        </h3>
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 45 }}
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{
                                                rotate: { duration: 0.2 },
                                                scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                                            }}
                                            className="bg-red-600 p-2 rounded-full shadow-lg shadow-red-600/30 group-hover:bg-red-500 transition-colors"
                                        >
                                            <ArrowUpRight className="text-white" size={20} />
                                        </motion.div>
                                    </div>

                                    <p className="text-zinc-400 mb-6 text-sm leading-relaxed border-b border-white/10 pb-6">
                                        {project.description}
                                    </p>

                                    <div className="space-y-3">
                                        {project.location && (
                                            <div className="flex items-center text-sm text-zinc-300">
                                                <MapPin size={16} className="text-red-500 mr-3" />
                                                {project.location}
                                            </div>
                                        )}
                                        {project.year && (
                                            <div className="flex items-center text-sm text-zinc-300">
                                                <Calendar size={16} className="text-red-500 mr-3" />
                                                {project.year}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPortfolio;
