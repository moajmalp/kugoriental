'use client'

import { useState, useEffect } from 'react'
import { PlayCircle, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react'

interface Lesson {
    title: string
    videoUrl: string
}

const lessons: Lesson[] = [
    { title: 'Anatomy & Physiology', videoUrl: 'https://www.youtube.com/embed/MTLKckQveWw' },
    { title: 'Cells & Tissue', videoUrl: 'https://www.youtube.com/embed/fkQSFMdQ7z0' },
    { title: 'Integumentary System Part 01', videoUrl: 'https://www.youtube.com/embed/WzZ3n0HUZnQ' },
    { title: 'Integumentary System Part 02', videoUrl: 'https://www.youtube.com/embed/18C-zu9aVDM' },
    { title: 'Musculoskeletal System Part 01', videoUrl: 'https://www.youtube.com/embed/f-rNYTm6P-s' },
    { title: 'Musculoskeletal System Part 02', videoUrl: 'https://www.youtube.com/embed/jVUvko6pfaw' },
    { title: 'Digestive System', videoUrl: 'https://www.youtube.com/embed/LI3VPP3AKu4' },
    { title: 'Respiratory System', videoUrl: 'https://www.youtube.com/embed/Tm8pcwmnL1M' },
    { title: 'Circulatory System Part 01', videoUrl: 'https://www.youtube.com/embed/dkbEvBRQJuU' },
    { title: 'Circulatory System Part 02', videoUrl: 'https://www.youtube.com/embed/nlW02yk5jug' },
    { title: 'Lymphatic System', videoUrl: 'https://www.youtube.com/embed/ix4v9-h_AS4' },
    { title: 'Nervous System Part 1', videoUrl: 'https://www.youtube.com/embed/LpPC4r3ZeF0' },
    { title: 'Nervous System Part 2', videoUrl: 'https://www.youtube.com/embed/t6cwwfN1aMI' },
    { title: 'Endocrine System', videoUrl: 'https://www.youtube.com/embed/S9DNDZ1hEaY' },
    { title: 'Excretory System', videoUrl: 'https://www.youtube.com/embed/v4HMhejt36M' },
    { title: 'Reproductive System Part 1 – Male', videoUrl: 'https://www.youtube.com/embed/Fw9NbeKwwhM' },
    { title: 'Reproductive System Part 2 – Female', videoUrl: 'https://www.youtube.com/embed/ZEH0_Be2EF8' },
    { title: 'Sense Organs Part 1 – Eye', videoUrl: 'https://www.youtube.com/embed/EFw6cf1fg4M' },
    { title: 'Sense Organ Part 2 – Ear', videoUrl: 'https://www.youtube.com/embed/Aa-1n0nlk9k' },
    { title: 'Sense Organ Part 03 – Nose, Tongue and Skin', videoUrl: 'https://www.youtube.com/embed/p5u6bQH8WbY' },
]

export function CoursePlayer() {
    const [activeLesson, setActiveLesson] = useState(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    // Handle initial state and responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false)
            } else {
                setIsSidebarOpen(true)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="flex flex-col lg:flex-row w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl min-h-[600px]">
            {/* Sidebar Toggle (Mobile) */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200">
                <span className="font-bold text-slate-900">Course Content</span>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`
                ${isSidebarOpen ? 'flex' : 'hidden md:flex'} 
                w-full lg:w-80 flex-col bg-white border-r border-slate-200 h-full max-h-[600px] overflow-hidden
            `}>
                <div className="p-6 border-b border-slate-200 bg-slate-50/50">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Anatomy</h3>
                    <p className="text-sm text-slate-500 mt-1">{lessons.length} Lessons</p>
                </div>

                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                    <div className="flex flex-col">
                        {lessons.map((lesson, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveLesson(index)}
                                className={`
                                    flex items-start gap-3 p-4 text-left transition-all duration-200 group
                                    ${activeLesson === index
                                        ? 'bg-primary-50 border-l-4 border-primary-600'
                                        : 'hover:bg-slate-50 border-l-4 border-transparent'}
                                `}
                            >
                                <div className={`
                                    mt-1 p-1 rounded-full flex-shrink-0
                                    ${activeLesson === index ? 'text-primary-600' : 'text-slate-400 group-hover:text-slate-500'}
                                `}>
                                    {activeLesson === index ? <PlayCircle size={18} /> : <div className="w-4.5 h-4.5 border-2 border-slate-200 rounded-full" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className={`
                                        block text-sm font-semibold truncate
                                        ${activeLesson === index ? 'text-primary-700' : 'text-slate-700'}
                                    `}>
                                        {index + 1}. {lesson.title}
                                    </span>
                                    <span className="text-xs text-slate-400 mt-0.5 block">00:00</span>
                                </div>
                                {activeLesson > index && (
                                    <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-black relative flex flex-col">
                {/* Video Player wrapper */}
                <div className="relative w-full aspect-video bg-black shadow-inner">
                    <iframe
                        key={lessons[activeLesson].videoUrl}
                        src={lessons[activeLesson].videoUrl}
                        title={lessons[activeLesson].title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Lesson Info */}
                <div className="p-8 bg-white border-t border-slate-200 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Active Lesson</span>
                            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                                {lessons[activeLesson].title}
                            </h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setActiveLesson(prev => Math.max(0, prev - 1))}
                                disabled={activeLesson === 0}
                                className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setActiveLesson(prev => Math.min(lessons.length - 1, prev + 1))}
                                disabled={activeLesson === lessons.length - 1}
                                className="px-8 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
                            >
                                Next Lesson <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 prose prose-slate">
                        <p className="text-slate-600 leading-relaxed">
                            Welcome to the lesson on <span className="font-semibold text-slate-900">{lessons[activeLesson].title}</span>.
                            This module covers key concepts and practical applications relevant to the {lessons[activeLesson].title} as part of the professional diploma curriculum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
