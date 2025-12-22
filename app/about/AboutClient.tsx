'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, BookOpen, Users, FlaskConical, Globe, Star, Quote, Trophy, ShieldCheck } from 'lucide-react'
import { Button, Card, CardContent, CardHeader } from '@/components/ui'

const chooseUs = [
    {
        title: 'Accredited Excellence',
        desc: 'Government-recognized & ISO-certified academy with global standards.',
        icon: Award,
        color: 'bg-blue-500',
    },
    {
        title: 'Valid Certifications',
        desc: 'University-recognized certifications and international affiliations.',
        icon: BookOpen,
        color: 'bg-primary-500',
    },
    {
        title: 'Clinical Exposure',
        desc: 'Immersive clinical internships with top-tier partner hospitals.',
        icon: FlaskConical,
        color: 'bg-secondary-500',
    },
    {
        title: 'Expert Mentorship',
        desc: 'Led by multidisciplinary faculty with decades of clinical experience.',
        icon: Users,
        color: 'bg-emerald-500',
    },
    {
        title: 'Modern Facilities',
        desc: 'Advanced simulation labs and high-tech training environments.',
        icon: Globe,
        color: 'bg-purple-500',
    },
]

const academicCouncil = [
    {
        name: 'Dr. Bahja Janu CP',
        role: 'Academic Council Member',
        img: '/team/dr-bahja.jpg',
    },
    {
        name: 'Prof. M Haroon M',
        role: 'Academic Council Member',
        img: '/team/prof-haroon.jpg',
    },
    {
        name: 'U Keshav Dev',
        role: 'Academic Council Member',
        img: '/team/keshav-dev.jpg',
    },
    {
        name: 'Dr. Farseena E',
        role: 'Academic Council Member',
        img: '/team/dr-farseena.jpg',
    },
    {
        name: 'Dr Farha Noushad',
        role: 'Academic Council Member',
        img: '/team/44f3b67d-05fd-4344-9ac5-ba844bc82574.jfif',
    },
]

const examinationBoard = [
    {
        name: 'Dr. Khadeeja Nargees',
        role: 'Examination Board Member',
        img: '/team/dr-khadeeja.jpg',
    },
]

const administrationBoard = [
    {
        name: 'Aboo Thahir K',
        role: 'Administration Board Member',
        img: '/team/muhammed-thahir.jpg',
    },
    {
        name: 'Shabna',
        role: 'Administration Board Member',
        img: '/team/shabna.jpg',
    },
]

const achievements = [
    {
        title: 'ISO Certified Institution',
        desc: 'Quality systems aligned with global standards for healthcare education.',
        icon: ShieldCheck,
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        title: 'Government Recognition',
        desc: 'Approved programs with strict regulatory compliance and valid credentials.',
        icon: Globe,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50'
    },
    {
        title: 'Academic Excellence',
        desc: 'Multiple accolades for innovative curriculum and clinical training standards.',
        icon: Trophy,
        color: 'text-secondary-500',
        bg: 'bg-secondary-50'
    },
]

export default function AboutClient() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-accent-50 to-white overflow-hidden">
            {/* Hero/About intro */}
            <section className="section-padding pt-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary-100/20 pointer-events-none" />
                <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            <span>Our Legacy</span>
                        </div>
                        <h1 className="text-5xl font-extrabold text-accent-900 tracking-tight leading-tight">
                            Reviving Ancient Wisdom <br />
                            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                With Modern Science
                            </span>
                        </h1>
                        <p className="text-accent-700 text-lg leading-relaxed max-w-xl">
                            KUG Oriental Academy is a government-recognized and ISO-certified institution
                            dedicated to elevating alternative medicine education. We blend classical healing
                            wisdom with modern clinical science, ensuring learners graduate with confidence,
                            competence, and globally relevant credentials.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button as="link" href="/contact" variant="primary" className="h-12 px-8">
                                Apply Now
                            </Button>
                            <Button as="link" href="/courses" variant="outline" className="h-12 px-8">
                                Our Programs
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-secondary-200/30 blur-3xl animate-pulse" />
                        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary-200/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium-2xl border-8 border-white bg-white aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
                                alt="Academy story"
                                width={1200}
                                height={800}
                                className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent-900/40 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why choose us - Redesigned Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-from)_0%,_transparent_50%)] from-primary-50/50 pointer-events-none" />

                {/* Decorative Background Elements */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-100/30 rounded-full blur-[100px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-100/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

                <div className="container-custom grid lg:grid-cols-[1fr_.85fr] gap-16 items-start relative z-10">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 text-primary-600 font-bold tracking-wider uppercase text-sm">
                                <div className="h-1 w-12 bg-primary-500 rounded-full" />
                                <span>Why Choose KUG</span>
                            </div>
                            <h2 className="text-4xl font-bold text-accent-900 leading-tight">
                                Premium, Evidence-Based <br /> Learning Environment
                            </h2>
                            <p className="text-accent-600 text-lg max-w-2xl">
                                We provide a comprehensive educational journey that bridges the gap between traditional medicine and modern healthcare requirements.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {chooseUs.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white to-accent-50/50 rounded-3xl -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-accent-100 shadow-sm" />
                                    <div className="relative flex items-center gap-5 p-2">
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-accent-900 group-hover:text-primary-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-accent-600 leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-24"
                    >
                        <div className="relative group">
                            {/* Decorative elements behind video */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 rounded-[3rem] blur-2xl group-hover:scale-105 transition-transform duration-500" />

                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-premium-2xl border-[12px] border-white bg-accent-900 aspect-video group-hover:shadow-primary-500/20 transition-all duration-500">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/4jariOAtNtA"
                                    title="KUG Oriental Academy"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="absolute inset-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Floating stats box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-premium-xl border border-accent-100 max-w-[200px] hidden md:block"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-accent-900 text-sm">Success Rate</span>
                                </div>
                                <div className="text-3xl font-black text-accent-900">98%<span className="text-emerald-500">+</span></div>
                                <div className="text-xs text-accent-500 font-medium mt-1">Graduate satisfaction & career success</div>
                            </motion.div>

                            {/* Additional Floating Element - Students Enrolled */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className="absolute -top-6 -right-6 bg-accent-900 text-white p-5 rounded-3xl shadow-premium-2xl border border-white/10 hidden xl:block z-20"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <Users className="w-4 h-4 text-primary-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-300">Active Learners</span>
                                </div>
                                <div className="text-2xl font-black">5,000<span className="text-primary-400">+</span></div>
                            </motion.div>
                        </div>

                        {/* Student Success Highlight Card - Filling the bottom space */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-premium-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700">
                                <Quote className="w-32 h-32" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                                <div className="h-20 w-20 rounded-2xl overflow-hidden border-2 border-white/20 flex-shrink-0">
                                    <Image
                                        src="/Anjali Sharma.jpg"
                                        alt="Student success"
                                        width={100}
                                        height={100}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-2 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-primary-50 italic font-medium leading-relaxed">
                                        "The clinical internships provided here are truly world-class. I graduated with the confidence to start my own practice immediately."
                                    </p>
                                    <div className="pt-2">
                                        <p className="font-bold text-lg">Anjali Sharma</p>
                                        <p className="text-primary-200 text-xs font-semibold uppercase tracking-wider">Acupuncture Graduate · Batch 2023</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Founder note */}
            <section className="section-padding bg-accent-50">
                <div className="container-custom grid lg:grid-cols-[0.5fr_1.5fr] gap-8 items-start">
                    <div className="card-premium card-variant-gradient p-6 flex flex-col items-center text-center">
                        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-premium-lg mb-4">
                            <Image
                                src="/founder.jpeg"
                                alt="Founder"
                                width={220}
                                height={220}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-accent-900">Dr. P Ummer Gurukkal</h3>
                        <p className="text-accent-500 text-sm">Founder & Academic Director</p>
                        <p className="italic text-accent-600 text-sm mt-2">“Holistic care with global standards.”</p>
                    </div>
                    <div className="card-premium card-variant-glass p-8 space-y-4 border border-accent-100">
                        <h3 className="text-2xl font-semibold text-accent-900">Founder’s Note</h3>
                        <p className="text-accent-700 leading-relaxed">
                            “KUG Oriental Academy was founded with a clear vision—to revive and professionalize ancient healing sciences through structured, practical, and ethical education. Rooted in traditions such as Acupuncture, Ayurveda, Yoga, and holistic therapies, our institution blends time-tested wisdom with modern learning standards.

                            We are committed to delivering quality education, hands-on clinical training, and career-oriented programs that empower students to become skilled, compassionate, and confident wellness professionals. Beyond academics, we believe in serving society by promoting natural healing, preventive healthcare, and balanced living.

                            KUG Oriental Academy is not just a place of learning—it is a gateway to purposeful careers and holistic well-being.”
                        </p>
                        <div className="pt-2 text-accent-600">
                            <p className="font-semibold">Dr. P Ummer Gurukkal</p>
                            <p className="text-sm">Signature</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding">
                <div className="container-custom space-y-8">
                    <div className="text-center space-y-3">
                        <p className="text-primary-600 font-semibold">Our Team</p>
                        <h2 className="text-3xl font-bold text-accent-900">Mentors & Practitioners</h2>
                    </div>
                    {/* Academic Council */}
                    <div className="space-y-8 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-accent-900 text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-primary-500 after:rounded-full">
                            Academic Council
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {academicCouncil.map((member, idx) => (
                                <Card key={idx} className="overflow-hidden h-full w-full sm:w-[280px]" variant="white">
                                    <div className="relative h-80 w-full bg-accent-100">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-accent-900">{member.name}</h3>
                                        <p className="text-accent-600 text-sm">{member.role}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Examination Board */}
                    <div className="space-y-8 pt-8 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-accent-900 text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-secondary-500 after:rounded-full">
                            Examination Board
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {examinationBoard.map((member, idx) => (
                                <Card key={idx} className="overflow-hidden w-full sm:w-[280px]" variant="glass">
                                    <div className="relative h-80 w-full bg-accent-100">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6 space-y-2">
                                        <h3 className="text-lg font-semibold text-accent-900">{member.name}</h3>
                                        <p className="text-accent-600 text-sm">{member.role}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Administration Board */}
                    <div className="space-y-8 pt-8 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-accent-900 text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-emerald-500 after:rounded-full">
                            Administration Board
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 w-full">
                            {administrationBoard.map((member, idx) => (
                                <Card key={idx} className="overflow-hidden w-full sm:w-[280px]" variant="glass">
                                    <div className="relative h-80 w-full bg-accent-100">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6 space-y-2">
                                        <h3 className="text-lg font-semibold text-accent-900">{member.name}</h3>
                                        <p className="text-accent-600 text-sm">{member.role}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="section-padding bg-gradient-to-b from-accent-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-200 to-transparent" />
                <div className="container-custom space-y-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-4"
                    >
                        <p className="text-primary-600 font-bold tracking-widest uppercase text-sm">Our Credentials</p>
                        <h2 className="text-4xl font-bold text-accent-900 text-center relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1.5 after:w-24 after:bg-gradient-to-r after:from-primary-500 after:to-secondary-500 after:rounded-full">
                            Quality & Recognition
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {achievements.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="group"
                            >
                                <Card className="h-full overflow-hidden border-none shadow-premium-lg hover:shadow-premium-xl transition-all duration-500 bg-white/80 backdrop-blur-sm" variant="white">
                                    <div className="p-8 space-y-6 relative h-full">
                                        {/* Background Decoration */}
                                        <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                        <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                                            <item.icon className="w-8 h-8" />
                                        </div>

                                        <div className="space-y-3 relative z-10">
                                            <h3 className="text-2xl font-bold text-accent-900 leading-tight group-hover:text-primary-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-accent-600 leading-relaxed font-medium">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent w-0 group-hover:w-full transition-all duration-700 opacity-50`} />
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 text-center"
                    >
                        <p className="text-accent-500 font-medium italic">
                            Committed to maintaining the highest clinical and academic standards since inception.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
