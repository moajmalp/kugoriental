'use client';

import { useState, useEffect } from 'react';
import { Share2, MessageCircle, Facebook, Twitter, Link2, Check } from 'lucide-react';

interface BlogShareProps {
    title: string;
    url: string;
}

export default function BlogShare({ title, url }: BlogShareProps) {
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    url: shareUrl,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            handleCopy();
        }
    };

    return (
        <div className="mt-16 p-8 md:p-10 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-accent-100 dark:border-slate-800 shadow-premium-sm">
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/20">
                    <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-accent-950 dark:text-white">Share this article</h3>
            </div>

            <div className="flex flex-wrap gap-4">
                {/* WhatsApp */}
                <a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 font-bold text-sm hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors shadow-sm"
                >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </a>

                {/* Facebook */}
                <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 font-bold text-sm hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors shadow-sm"
                >
                    <Facebook className="w-5 h-5" />
                    Facebook
                </a>

                {/* Twitter */}
                <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20 font-bold text-sm hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors shadow-sm"
                >
                    <Twitter className="w-5 h-5" />
                    Twitter
                </a>

                {/* General Share / Copy */}
                <button
                    onClick={handleNativeShare}
                    className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-500/20 font-bold text-sm hover:bg-primary-100 dark:hover:bg-primary-500/20 transition-colors shadow-sm"
                >
                    {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                    {copied ? 'Copied Link' : 'Share'}
                </button>
            </div>
        </div>
    );
}
