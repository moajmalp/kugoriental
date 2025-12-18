import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardContent, CardHeader, CardFooter } from '@/components/ui'
import AnimatedCounter from '@/components/home/AnimatedCounter'
import FaqAccordion from '@/components/home/FaqAccordion'
import HeroSlider from '@/components/home/HeroSlider'
import CtaBanner from '@/components/home/CtaBanner'
import InterestForm from '@/components/home/InterestForm'
import WorkingHours from '@/components/home/WorkingHours'
import { courses } from '@/lib/courses'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to KUG Oriental Academy - A government-recognized and ISO-certified institution in alternative medicine.',
  openGraph: {
    title: 'Home | KUG Oriental Academy',
    description:
      'Welcome to KUG Oriental Academy - A government-recognized and ISO-certified institution in alternative medicine.',
  },
  twitter: {
    title: 'Home | KUG Oriental Academy',
    description:
      'Welcome to KUG Oriental Academy - A government-recognized and ISO-certified institution in alternative medicine.',
  },
}

const aboutHighlights = [
  'Accredited Programs',
  'Expert Instructors',
  'University Recognized Certification',
  'Modern Training Facilities',
  'Clinical Internships',
  'Career-Focused Curriculum',
]

const selectedCourseIds = ['d-acu', 'dapt', 'dcp']
const featuredCourses = courses.filter(course => selectedCourseIds.includes(course.id))

const services = [
  'Professional Diploma in Acupuncture',
  'Ayurveda Panchakarma',
  'Medical Laboratory Technology',
  'Cupping Therapy',
  'Naturopathy & Yoga',
  'Holistic Health Care',
  'Kalaripayattu',
  'Acupressure',
]

const chooseUs = [
  'Government-recognized & ISO-certified curriculum',
  'Clinical immersion with affiliated hospitals & centers',
  'Faculty with multi-disciplinary expertise',
  'Career placement guidance and mentorship',
  'Modern labs and simulation-based practice',
]

const metrics = [
  { value: 690, suffix: '+', label: 'Graduated Students' },
  { value: 10, suffix: '+', label: 'Certified Faculty Experts' },
  { value: 40, suffix: '+', label: 'Affiliated Clinics & Centers' },
  { value: 3, suffix: '+', label: 'Global Certifications' },
]

const faqItems = [
  {
    q: 'What Courses do you offer at KUG Oriental Academy?',
    a: 'We offer professional diploma and bachelor-level programs in Acupuncture, Ayurveda Panchakarma Therapy, Cupping Therapy, Yoga & Naturopathy, and Medical Laboratory Technology.',
  },
  {
    q: 'What is the eligibility criteria for admission?',
    a: 'Diploma programs: SSLC or Plus Two, Bachelor (B.Voc) programs: Plus Two (Science preferred for MLT) Check each brochure or contact us for details.',
  },
  {
    q: 'Are you certification recognized?',
    a: 'Yes, our certifications are recognized by: FAST Board Bangalore, Xiyuan Hospital of China Academy of Chinese Medical Science, Intercultural University of Mexico, KUG is ISO 9001:2015 certified and registered under the Govt. of India.',
  },
  {
    q: 'Where is the academy located?',
    a: 'Our headquarters is in Kottakkal, Kerala. We have affiliated study centers across Kerala and South India. Online and blended options are available.',
  },
]

const testimonials = [
  {
    name: 'Ananya Rao',
    role: 'Diploma in Acupuncture, 2023',
    message:
      'The clinical exposure was incredible. Faculty ensured every protocol was clear and confidence-building.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'Rahul Menon',
    role: 'Naturopathy & Yoga, 2022',
    message:
      'Holistic training plus modern labs made the learning experience premium and practical.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'Dr. Meera Pillai',
    role: 'Ayurveda Panchakarma, 2024',
    message:
      'Structured modules, attentive mentors, and career-focused guidance set this academy apart.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
]

const blogItems = [
  {
    title: 'Integrative Healing: Blending Tradition & Science',
    date: 'Oct 5, 2024',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Why Clinical Internships Matter in Alternative Medicine',
    date: 'Sep 18, 2024',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Top Skills for Modern Acupuncture Practitioners',
    date: 'Aug 30, 2024',
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-accent-100">
      {/* Hero */}
      <HeroSlider />


      {/* About snippet */}
      <section className="section-padding animate-slide-up">
        <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-accent-100 card-variant-gradient">
            <Image
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning"
              width={1200}
              height={900}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <p className="text-primary-600 font-semibold">About KUG Oriental Academy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-accent-900 dark:text-white">
              Shaping Holistic Health Careers
            </h2>
            <p className="text-accent-700 dark:text-slate-200 text-lg leading-relaxed">
              KUG Oriental Academy is a government-recognized, ISO-certified institution dedicated to advancing education in alternative medicine. Our mission is to blend ancient healing traditions with modern science, shaping professionals who lead in Acupuncture, Ayurveda, Yoga, Naturopathy, and Lab Technology.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 bg-white/70 dark:bg-slate-800/60 border border-accent-100 dark:border-slate-700 rounded-2xl p-4 shadow-premium"
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-secondary-500" />
                  <p className="text-accent-800 dark:text-slate-200 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <Button as="link" href="/about" variant="primary" className="mt-4">
              More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-accent-50 dark:bg-slate-900/60 animate-slide-up">
        <div className="container-custom space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-primary-600 font-semibold">Featured Programs</p>
              <h2 className="text-3xl font-bold text-accent-900 dark:text-white">Accelerate Your Expertise</h2>
            </div>
            <Button as="link" href="/courses" variant="outline">
              View All Courses
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCourses.map((course, idx) => (
              <Card key={course.slug} className="h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-premium-lg" variant={idx % 2 === 0 ? 'glass' : 'gradient'}>
                <div className="relative h-40 w-full">
                  <Image
                    src={course.img}
                    alt={course.name}
                    fill
                    className="object-cover"
                    sizes="400px"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-accent-900 dark:text-white leading-tight">{course.name}</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-accent-700 dark:text-slate-200 line-clamp-2">{course.shortDesc}</p>
                  <div className="flex items-center gap-2 text-sm text-accent-500 dark:text-slate-400">
                    <span className="bg-primary-50 dark:bg-slate-800 px-2 py-1 rounded-md text-primary-700 dark:text-primary-300 font-medium text-xs border border-primary-100 dark:border-slate-700">{course.details.duration}</span>
                    <span className="bg-secondary-50 dark:bg-slate-800 px-2 py-1 rounded-md text-secondary-700 dark:text-secondary-300 font-medium text-xs border border-secondary-100 dark:border-slate-700">{course.level}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button as="link" href={`/courses/${course.slug}`} size="sm" variant="primary" className="w-full">
                    Course Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding animate-slide-up">
        <div className="container-custom space-y-8">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">Services</p>
            <h2 className="text-3xl font-bold text-accent-900">Comprehensive Offerings</h2>
            <p className="text-accent-700 dark:text-slate-200 max-w-3xl mx-auto">
              Explore specialized services and training programs designed for holistic healthcare
              professionals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="group bg-white dark:bg-slate-800 rounded-[1.5rem] p-6 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-700 flex items-start"
              >
                <div className="shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1">{service}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Specialized modules & practical labs</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      {/* Why Choose Us */}
      <section className="section-padding bg-accent-50 dark:bg-slate-900/60">
        <div className="container-custom space-y-8">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-accent-900 dark:text-white">A Premium Learning Experience</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary-400 to-secondary-400 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              {/* 1. Large Text Card (Top Left) */}
              <div className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#E8E6E1] dark:bg-slate-800 p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="text-2xl font-bold text-accent-900 dark:text-white leading-tight mb-2">Government Recognized & ISO Certified</h3>
                  <p className="text-accent-700 dark:text-slate-300 text-sm">Our unwavering quality ensures you receive top-tier education meeting global standards.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-800 dark:text-white">100%</p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Valid Certification</p>
                </div>
              </div>

              {/* 2. Tall Image Card (Center) */}
              <div className="md:col-span-1 md:row-span-2 rounded-[2rem] overflow-hidden relative group shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop"
                  alt="Clinical Practice"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-4xl font-bold mb-1">98%</p>
                  <p className="text-lg font-medium opacity-90">Placement Rate</p>
                  <p className="text-sm text-gray-300 mt-2 line-clamp-2">You can rely on us to launch your career smoothly without delays.</p>
                </div>
              </div>

              {/* 3. Image Card (Top Right) */}
              <div className="md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden relative group shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                  alt="Modern Labs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
              </div>

              {/* 4. Image/Feature Card (Bottom Left) */}
              <div className="md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden relative group shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop"
                  alt="Expert Faculty"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>

              {/* 5. Stats Card (Bottom Right) */}
              <div className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#E0E7FF] dark:bg-slate-700 p-8 flex flex-col justify-end shadow-sm">
                <h3 className="text-4xl font-bold text-indigo-900 dark:text-white mb-1">300+</h3>
                <p className="text-lg font-semibold text-indigo-800 dark:text-slate-200">Successful Grads</p>
                <p className="text-sm text-indigo-600 dark:text-slate-300 mt-2">Join countless satisfied students who've relied on our consistent, expert training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding animate-slide-up">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <Card key={metric.label} className="text-center p-6" variant="glass">
                <CardContent className="space-y-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <p className="text-accent-700 dark:text-slate-200 font-medium">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours + Interest Form */}
      <section className="section-padding bg-accent-50 dark:bg-slate-900/60 animate-slide-up">
        <div className="container-custom grid lg:grid-cols-2 gap-10">
          <WorkingHours />
          <InterestForm />
        </div>
      </section>

      {/* Training Process */}
      <section className="section-padding">
        <div className="container-custom space-y-8">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">Training Process</p>
            <h2 className="text-3xl font-bold text-accent-900 dark:text-white">From Foundation to Practice</h2>
          </div>
          <div className="relative pt-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gray-200 dark:bg-slate-700" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  title: 'Enrollment & Orientation',
                  desc: 'Begin your journey by registering for your chosen course. We guide you step by step through the admission process and help you clearly understand the program structure.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                },
                {
                  title: 'Expert-Led Classes',
                  desc: 'Participate in well-structured theory and practical sessions led by experienced faculty, delivered clearly in both English and Malayalam for better learning.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                {
                  title: 'Hands-On Clinical Training',
                  desc: 'Gain real-world practical exposure through supervised clinical training at KUG-affiliated centers, helping you build confidence and professional skills.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: 'Certification & Career Support',
                  desc: 'After successful completion, receive a recognized certificate along with career guidance to help you grow and succeed in the holistic wellness field.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
              ].map((step, idx) => (
                <div key={step.title} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="h-28 w-28 rounded-full border-2 border-primary-100 dark:border-primary-900 group-hover:border-primary-500 transition-colors duration-300 flex items-center justify-center bg-white dark:bg-slate-800 z-10 relative shadow-sm">
                      <div className="h-24 w-24 rounded-full bg-primary-50 dark:bg-primary-900/20 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors duration-300 flex items-center justify-center text-primary-600 dark:text-primary-400">
                        {step.icon}
                      </div>
                    </div>
                    {/* Connecting Arrow for mobile */}
                    {idx < 3 && (
                      <div className="md:hidden absolute bottom-[-32px] left-1/2 -translate-x-1/2 text-gray-300">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-accent-50 dark:bg-slate-900/60 animate-slide-up">
        <div className="container-custom space-y-6">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">FAQs</p>
            <h2 className="text-3xl font-bold text-accent-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative space-y-6">
            <div className="absolute -top-20 left-10 hidden lg:block">
              <svg className="h-12 w-12 text-yellow-400 rotate-12 absolute -right-6 top-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="h-16 w-16 text-indigo-400 absolute left-0 top-4 -z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M10 50 Q 25 20 40 50 T 70 50 T 100 50" strokeLinecap="round" />
              </svg>
            </div>

            <div className="pt-8">
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white leading-[1.15]">What Our<br />Customers Says</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.
            </p>
            <Button
              as="link"
              href="/testimonials"
              className="bg-gradient-to-r from-purple-500 to-orange-400 hover:from-purple-600 hover:to-orange-500 border-none rounded-full px-8 py-6 text-lg shadow-lg shadow-purple-500/30 text-white transition-all transform hover:scale-105"
            >
              View More
            </Button>
          </div>

          {/* Right Cards Stack */}
          <div className="relative space-y-6 py-10">
            {/* Vertical Decor Line */}
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-50 via-purple-100 to-transparent dark:from-slate-700 dark:via-slate-800 hidden sm:block -z-10" />

            {/* Card 1 */}
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 flex gap-4 ml-0 sm:ml-12 hover:-translate-x-2 transition-transform duration-300">
              <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop" width={60} height={60} alt="Mehwish" className="rounded-full object-cover h-14 w-14 border-2 border-white shadow-sm shrink-0" />
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 dark:text-white">Mohammed Rafi</h4>
                  <span className="text-gray-300 text-2xl leading-none font-serif">“</span>
                </div>
                <p className="text-gray-500 text-sm mt-1 leading-snug">KUG’s Cupping Therapy course was truly professional. I've started my own practice thanks to their expert training and support.</p>
              </div>
            </div>

            {/* Card 2 (Active/Highlighted) */}
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-purple-100/50 dark:shadow-none border-l-4 border-l-purple-600 flex gap-4 -ml-4 sm:ml-0 scale-105 z-10 transition-transform">
              <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" width={60} height={60} alt="Elizabeth" className="rounded-full object-cover h-14 w-14 border-2 border-white shadow-sm shrink-0" />
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">Fathima Riyas</h4>
                  <span className="text-purple-500 text-3xl leading-none font-serif">“</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-snug">KUG Oriental Academy gave me hands-on experience in Acupuncture that I couldn't find anywhere else. The clinical sessions really built my confidence.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 flex gap-4 ml-0 sm:ml-12 hover:-translate-x-2 transition-transform duration-300">
              <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" width={60} height={60} alt="Emily" className="rounded-full object-cover h-14 w-14 border-2 border-white shadow-sm shrink-0" />
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 dark:text-white">Shyam Krishna</h4>
                  <span className="text-gray-300 text-2xl leading-none font-serif">“</span>
                </div>
                <p className="text-gray-500 text-sm mt-1 leading-snug">After completing the Diploma in Panchakarma Therapy, I immediately got placed at a wellness center. The faculty support was excellent!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-padding bg-accent-50 dark:bg-slate-900/60">
        <div className="container-custom space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-primary-600 font-semibold">Insights</p>
              <h2 className="text-3xl font-bold text-accent-900 dark:text-white">From Our Blog</h2>
            </div>
            <Button as="link" href="/blog" variant="outline">
              View All Posts
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogItems.map((item) => (
              <Card key={item.title} className="h-full overflow-hidden" variant="white">
                <div className="relative h-40 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                    loading="lazy"
                  />
                </div>
                <CardContent className="space-y-3">
                  <p className="text-sm text-accent-500">{item.date}</p>
                  <h3 className="text-xl font-semibold text-accent-900 dark:text-white">{item.title}</h3>
                  <Link href="/blog" className="text-primary-600 font-medium hover:underline">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div >
  )
}

