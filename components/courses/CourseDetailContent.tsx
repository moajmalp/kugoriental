'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { CoursePlayer } from './CoursePlayer'
import { Course } from '@/lib/courses'
import { ArrowLeft, PlayCircle } from 'lucide-react'

interface CourseDetailContentProps {
    course: Course
}

export function CourseDetailContent({ course }: CourseDetailContentProps) {
    const [isLearning, setIsLearning] = useState(false)

    if (isLearning) {
        return (
            <div className="space-y-6">
                <button
                    onClick={() => setIsLearning(false)}
                    className="flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors mb-4 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Course Overview
                </button>
                <div className="animate-fade-up">
                    <CoursePlayer />
                </div>
            </div>
        )
    }

    return (
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-12">
                {/* A. Course Thumbnail Image */}
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl animate-fade-in group border border-gray-100">
                    <Image
                        src={course.img}
                        alt={`Professional ${course.name} course at KUG Oriental Academy, Kerala`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* B. Short About the Course */}
                <div className="space-y-6 animate-fade-up">
                    <h2 className="text-2xl font-bold text-gray-900">About Course</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {course.overview}
                    </p>
                </div>

                {/* C. What Will You Learn? */}
                <div className="space-y-6 animate-fade-up animation-delay-100">
                    <h2 className="text-2xl font-bold text-gray-900">What Will You Learn?</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {course.whatWillYouLearn.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                                <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* RIGHT SIDE (Sidebar) */}
            <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-premium p-8 border border-gray-100 sticky top-28 space-y-8 animate-fade-up animation-delay-200">

                    {/* 1. Buttons */}
                    <div className="space-y-4">
                        <Button
                            as="link"
                            href="/contact"
                            variant="primary"
                            className="w-full h-14 text-lg shadow-lg shadow-primary-500/25 btn-lift bg-gradient-to-r from-primary-600 to-primary-500"
                        >
                            Apply Now →
                        </Button>

                        {course.slug === 'professional-diploma-in-acupuncture' && (
                            <button
                                onClick={() => setIsLearning(true)}
                                className="w-full h-14 flex items-center justify-center gap-2 text-lg font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-xl border-2 border-primary-100 transition-all group"
                            >
                                <PlayCircle className="group-hover:scale-110 transition-transform" />
                                Start Learning
                            </button>
                        )}
                    </div>

                    {/* Course Info Grid */}
                    <div className="space-y-5">
                        {/* Level */}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                            <span className="text-gray-500 font-medium">Level</span>
                            <span className="font-semibold text-gray-900">{course.level}</span>
                        </div>

                        {/* Duration */}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                            <span className="text-gray-500 font-medium">Duration</span>
                            <span className="font-semibold text-gray-900">{course.details.duration}</span>
                        </div>

                        {/* Fee */}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                            <span className="text-gray-500 font-medium">Fee</span>
                            <span className="font-semibold text-primary-600 text-lg">{course.details.fee}</span>
                        </div>

                        {/* Eligibility */}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                            <span className="text-gray-500 font-medium">Eligibility</span>
                            <span className="font-semibold text-gray-900 text-right max-w-[60%]">{course.details.eligibility}</span>
                        </div>

                        {/* Medium */}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                            <span className="text-gray-500 font-medium">Medium</span>
                            <span className="font-semibold text-gray-900">{course.details.medium}</span>
                        </div>

                        {/* Mode */}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                            <span className="text-gray-500 font-medium">Program Code</span>
                            <span className="font-semibold text-gray-900">{course.details.programCode}</span>
                        </div>
                    </div>


                    {/* 4. Audience */}
                    <div className="space-y-3 pt-2">
                        <span className="text-gray-500 font-medium block">Who is this for?</span>
                        <ul className="space-y-2">
                            {course.audience.map((aud, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 text-sm">
                                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mr-2" />
                                    {aud}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exam Info */}
                    <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 space-y-2 border border-gray-100">
                        <div className="flex justify-between">
                            <span>Exams:</span>
                            <span className="font-medium text-gray-900">{course.details.examination}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Practical:</span>
                            <span className="font-medium text-gray-900">{course.details.practicalTraining}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
