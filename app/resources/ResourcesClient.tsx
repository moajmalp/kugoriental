'use client'

import { motion } from 'framer-motion'
import { FileText, Download, BookOpen, GraduationCap, ShieldCheck, Microscope, HeartPulse, Globe, Leaf } from 'lucide-react'
import { Button, Card, CardContent } from '@/components/ui'

const brochures = [
    {
        title: 'KUG Main Brochure',
        file: '/brochures/kug-main-brochure.pdf',
        icon: Globe,
        color: 'text-primary-600',
        bg: 'bg-primary-50',
        category: 'Institution',
        description: 'General information about KUG Oriental Academy, vision, and facilities.'
    },
    {
        title: 'Acupuncture Course',
        file: '/brochures/acupuncture-course.pdf',
        icon: HeartPulse,
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        category: 'Acupuncture',
        description: 'Professional Diploma detailed curriculum and clinical training details.'
    },
    {
        title: 'Ayurveda Panchakarma',
        file: '/brochures/ayurveda-panchakarma.pdf',
        icon: Leaf,
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        category: 'Ayurveda',
        description: 'Deep dive into Panchakarma treatment and therapist training program.'
    },
    {
        title: 'Naturopathy & Yoga',
        file: '/brochures/naturopathy-and-yoga.pdf',
        icon: GraduationCap,
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        category: 'Wellness',
        description: 'Comprehensive guide to Naturopathy and Holistic health certifications.'
    },
    {
        title: 'Cupping Therapy',
        file: '/brochures/cupping-therapy-course.pdf',
        icon: ShieldCheck,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        category: 'Manual Therapy',
        description: 'Details on cupping techniques, safety protocols, and certification.'
    },
    {
        title: 'Medical Lab Technology',
        file: '/brochures/medical-laboratory-technology.pdf',
        icon: Microscope,
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        category: 'Clinical',
        description: 'Diagnostic science, pathology basics, and laboratory practice curriculum.'
    },
]

export default function ResourcesClient() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-accent-50/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-100/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container-custom section-padding pt-32 pb-20 space-y-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-bold uppercase tracking-wider mb-2">
                        <BookOpen className="w-4 h-4" />
                        Academic Hub
                    </div>
                    <h1 className="text-5xl font-black text-accent-900 tracking-tight leading-tight">
                        Download Our <span className="text-primary-600">Resources</span>
                    </h1>
                    <p className="text-accent-700 text-lg leading-relaxed">
                        Access our comprehensive library of course brochures, curriculum guides, and admission prospectuses to begin your journey in holistic medicine.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brochures.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Card className="overflow-hidden h-full flex flex-col border-none shadow-premium-lg hover:shadow-premium-xl transition-all duration-500 bg-white/80 backdrop-blur-md relative" variant="white">
                                <div className={`h-2 w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <CardContent className="p-8 flex flex-col flex-1 gap-6">
                                    <div className="flex items-start justify-between">
                                        <div className={`p-4 rounded-2xl ${item.bg} ${item.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm ring-1 ring-white/50`}>
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-accent-400 bg-accent-50 px-2 py-1 rounded">
                                            PDF • Brochure
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <span className={`text-[11px] font-bold uppercase tracking-tighter ${item.color} opacity-80`}>
                                            {item.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-accent-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-accent-600 text-sm leading-relaxed line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-accent-100/50 flex flex-col gap-3">
                                        <Button
                                            as="link"
                                            href={item.file}
                                            variant="primary"
                                            target="_blank"
                                            className="w-full justify-between group/btn"
                                        >
                                            View Online
                                            <Globe className="w-4 h-4 opacity-70 group-hover/btn:rotate-12 transition-transform" />
                                        </Button>
                                        <Button
                                            as="link"
                                            href={item.file}
                                            download
                                            variant="outline"
                                            className="w-full justify-between"
                                        >
                                            Download
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-accent-900 rounded-3xl p-10 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="space-y-2 max-w-xl">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Need assistance?</h3>
                            <p className="text-white/70 text-lg">
                                If you cannot find the resource you are looking for or have specific admission queries, our academic coordinators are here to help.
                            </p>
                        </div>
                        <Button as="link" href="/contact" variant="primary" className="bg-white !text-primary-700 hover:bg-white/90 border-none px-8 py-4 text-lg">
                            Contact Admissions
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
