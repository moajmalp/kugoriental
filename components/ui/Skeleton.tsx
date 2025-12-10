'use client'

import { ReactNode } from 'react'

interface SkeletonProps {
    className?: string
    children?: ReactNode
}

export default function Skeleton({ className = '', children }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse bg-gray-200 dark:bg-slate-700 rounded-xl ${className}`}
            aria-hidden="true"
        >
            {children}
        </div>
    )
}

// Pre-built skeleton components for common patterns
export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
    return (
        <div className={`space-y-3 ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
                />
            ))}
        </div>
    )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
    return (
        <div className={`rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 overflow-hidden ${className}`}>
            <Skeleton className="h-40 w-full rounded-none" />
            <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <SkeletonText lines={2} />
                <Skeleton className="h-10 w-32 rounded-xl" />
            </div>
        </div>
    )
}

export function SkeletonImage({ className = '' }: { className?: string }) {
    return <Skeleton className={`w-full aspect-video ${className}`} />
}

export function SkeletonAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-20 w-20',
    }
    return <Skeleton className={`${sizeClasses[size]} rounded-full`} />
}

export function SkeletonButton({ className = '' }: { className?: string }) {
    return <Skeleton className={`h-12 w-32 rounded-xl ${className}`} />
}

// Hero section skeleton
export function SkeletonHero() {
    return (
        <div className="container-custom py-16 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
                <Skeleton className="h-8 w-48 rounded-full" />
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-14 w-3/4" />
                <SkeletonText lines={3} />
                <div className="flex gap-4">
                    <SkeletonButton />
                    <SkeletonButton />
                </div>
            </div>
            <SkeletonImage className="rounded-3xl h-80" />
        </div>
    )
}

// Stats skeleton
export function SkeletonStats() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 p-6 text-center">
                    <Skeleton className="h-12 w-20 mx-auto mb-3" />
                    <Skeleton className="h-4 w-32 mx-auto" />
                </div>
            ))}
        </div>
    )
}

// FAQ skeleton
export function SkeletonFAQ() {
    return (
        <div className="max-w-2xl mx-auto space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 p-6">
                    <Skeleton className="h-6 w-3/4" />
                </div>
            ))}
        </div>
    )
}

// Cards grid skeleton
export function SkeletonCardsGrid({ count = 3 }: { count?: number }) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    )
}

// Testimonials skeleton
export function SkeletonTestimonials() {
    return (
        <div className="flex gap-6 overflow-hidden">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-80 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <SkeletonAvatar size="md" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-3 w-32" />
                        </div>
                    </div>
                    <SkeletonText lines={3} />
                </div>
            ))}
        </div>
    )
}
