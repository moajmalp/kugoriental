'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui';
import { BlogPost } from '@/lib/blogData';

interface BlogClientProps {
    initialPosts: BlogPost[];
}

const CATEGORIES = ['All', 'Academy', 'Medical', 'Wellness', 'Research'];

export default function BlogClient({ initialPosts }: BlogClientProps) {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'All') return initialPosts;
        return initialPosts.filter((post) => post.category === activeCategory);
    }, [activeCategory, initialPosts]);

    return (
        <div className="space-y-12">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-primary-600 text-white shadow-premium-md scale-105'
                                : 'bg-white dark:bg-slate-800 text-accent-600 dark:text-slate-300 hover:bg-accent-50 dark:hover:bg-slate-700 border border-accent-100 dark:border-slate-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Card className="group h-full flex flex-col overflow-hidden border-none shadow-premium-sm hover:shadow-premium-xl transition-all duration-500 bg-white dark:bg-slate-900/50 backdrop-blur-sm">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-primary-600 dark:text-primary-400 text-xs font-bold rounded-lg shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <CardHeader className="p-6 pb-2">
                                    <div className="flex items-center gap-3 mb-4 text-xs font-medium text-accent-500 dark:text-slate-400">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {post.date}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-accent-900 dark:text-white leading-tight group-hover:text-primary-600 transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                </CardHeader>

                                <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
                                    <p className="text-accent-600 dark:text-slate-300 text-sm line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-sm group/link"
                                    >
                                        Read Full Story
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-accent-500 dark:text-slate-400 text-lg italic">No articles found in this category yet.</p>
                </div>
            )}
        </div>
    );
}
