import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardContent, CardHeader, CardFooter } from '@/components/ui'
import AnimatedCounter from '@/components/home/AnimatedCounter'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import FaqAccordion from '@/components/home/FaqAccordion'

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

const featuredCourses = [
  {
    title: 'Professional Diploma in Acupuncture',
    desc: 'Master evidence-based acupuncture with hands-on clinical practice.',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Naturopathy & Yoga',
    desc: 'Integrate holistic wellness, yogic sciences, and lifestyle therapy.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Ayurveda Panchakarma',
    desc: 'Deep dive into detoxification protocols and classical therapies.',
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
  },
]

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
    q: 'Is KUG Oriental Academy government recognized?',
    a: 'Yes. We are a government-recognized and ISO-certified institution with university-recognized certifications.',
  },
  {
    q: 'Do you provide clinical internships?',
    a: 'All flagship programs include supervised clinical internships with our network of partner clinics.',
  },
  {
    q: 'Are the courses suitable for beginners?',
    a: 'We offer structured pathways for beginners and advanced learners, guided by faculty mentors.',
  },
  {
    q: 'Do you assist with placements?',
    a: 'Yes. We provide career guidance, interview support, and placement assistance with partner centers.',
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
    <div className="min-h-screen bg-gradient-to-b from-white via-accent-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 animate-fade-in">
        <div className="container-custom py-16 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-premium border border-accent-100 text-sm text-primary-700">
              <span className="h-2 w-2 rounded-full bg-secondary-500" />
              <span>Government Recognized • ISO Certified</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-accent-900">
              Welcome to KUG Oriental Academy
            </h1>
            <p className="text-lg text-accent-700 leading-relaxed">
              Where ancient healing wisdom meets modern medical science. Elevate your career with
              accredited programs, clinical internships, and expert-led training in alternative
              medicine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as="link" href="/about" variant="primary">
                Discover More
              </Button>
              <Button as="link" href="/courses" variant="outline">
                See All Services
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div>
                <p className="text-sm text-accent-500">Trusted by</p>
                <p className="text-xl font-semibold text-accent-900">Healthcare Professionals</p>
              </div>
              <span className="h-12 w-px bg-accent-200" />
              <div>
                <p className="text-sm text-accent-500">Affiliated Clinics</p>
                <p className="text-xl font-semibold text-accent-900">Across the Region</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-secondary-100 blur-2xl" />
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-3xl bg-primary-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-premium-lg border border-accent-100 bg-white/80 backdrop-blur-xl">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
                alt="Healthcare professional"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold text-accent-900">
              Shaping Holistic Health Careers
            </h2>
            <p className="text-accent-700 text-lg leading-relaxed">
              A government-recognized and ISO-certified academy delivering integrative health
              education with university-recognized certifications, expert faculty, and immersive
              clinical training.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {aboutHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-3 bg-white/70 border border-accent-100 rounded-2xl p-4 shadow-premium"
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-secondary-500" />
                  <p className="text-accent-800 font-medium">{item}</p>
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
      <section className="section-padding bg-accent-50 animate-slide-up">
        <div className="container-custom space-y-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-primary-600 font-semibold">Featured Programs</p>
              <h2 className="text-3xl font-bold text-accent-900">Accelerate Your Expertise</h2>
            </div>
            <Button as="link" href="/courses" variant="outline">
              View All Courses
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.title} className="h-full overflow-hidden" variant="gradient">
                <div className="relative h-40 w-full">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-accent-900">{course.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-700">{course.desc}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button as="link" href="/courses" size="sm" variant="primary">
                    Explore
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
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Offerings</h2>
            <p className="text-accent-700 max-w-3xl mx-auto">
              Explore specialized services and training programs designed for holistic healthcare
              professionals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Card key={service} className="p-5 bg-white/80" variant="glass">
                <div className="flex items-start space-x-3">
                  <span className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold shadow-lg">
                    ✦
                  </span>
                  <div>
                    <p className="font-semibold text-accent-900">{service}</p>
                    <p className="text-sm text-accent-600 mt-1">Specialized modules & practical labs</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white p-10 md:p-12 shadow-premium-lg">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#fff,_transparent_35%)]" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Advance Your Career in Alternative Medicine</h2>
                <p className="text-white/90 max-w-2xl">
                  Join a premium learning pathway with immersive clinical training and mentorship
                  from renowned practitioners.
                </p>
              </div>
              <Button as="link" href="/contact" variant="outline" className="bg-white text-primary-700 border-white">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom space-y-8">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-accent-900">A Premium Learning Experience</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary-400 to-secondary-400 hidden md:block" />
            <div className="grid md:grid-cols-3 gap-6">
              {chooseUs.map((item, idx) => (
                <Card key={item} className="h-full" variant="white">
                  <CardContent className="flex items-start space-x-3">
                    <span className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold shadow-lg">
                      {idx + 1}
                    </span>
                    <p className="text-accent-800">{item}</p>
                  </CardContent>
                </Card>
              ))}
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
                  <p className="text-accent-700 font-medium">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours + Interest Form */}
      <section className="section-padding bg-accent-50 animate-slide-up">
        <div className="container-custom grid lg:grid-cols-2 gap-10">
          <div className="card-premium p-8 bg-white">
            <h3 className="text-2xl font-semibold text-accent-900 mb-4">Working Hours</h3>
            <ul className="space-y-3 text-accent-700">
              <li className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>By Appointment</span></li>
            </ul>
            <div className="mt-6 p-4 rounded-2xl bg-accent-50 border border-accent-100 text-sm text-accent-700">
              Visit our campus or schedule a virtual counseling session.
            </div>
          </div>
          <div className="card-premium p-8 bg-white">
            <h3 className="text-2xl font-semibold text-accent-900 mb-4">Tell Us Your Interest</h3>
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white" placeholder="Full Name" required />
                <input className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white" type="email" placeholder="Email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white" placeholder="Phone" required />
                <select className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white">
                  <option>Program of Interest</option>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </div>
              <textarea className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white resize-none" rows={4} placeholder="Your message" />
              <div className="flex justify-end">
                <Button type="submit" variant="primary">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="section-padding">
        <div className="container-custom space-y-8">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">Training Process</p>
            <h2 className="text-3xl font-bold text-accent-900">From Foundation to Practice</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: 'Foundational Theory', desc: 'Core sciences, principles, and protocols.' },
              { title: 'Practical Lab Work', desc: 'Hands-on training with modern equipment.' },
              { title: 'Clinical Internship', desc: 'Supervised rotations in partner clinics.' },
              { title: 'Career Placement', desc: 'Guidance, mentorship, and job support.' },
            ].map((step, idx) => (
              <Card key={step.title} className="h-full relative overflow-hidden" variant="gradient">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 to-secondary-400" />
                <CardHeader className="flex items-center space-x-3">
                  <span className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-semibold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-accent-900">{step.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-700 text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-accent-50 animate-slide-up">
        <div className="container-custom space-y-6">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">FAQs</p>
            <h2 className="text-3xl font-bold text-accent-900">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-primary-600 font-semibold">Testimonials</p>
              <h2 className="text-3xl font-bold text-accent-900">Learners Who Trusted Us</h2>
            </div>
          </div>
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      {/* Blog */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-primary-600 font-semibold">Insights</p>
              <h2 className="text-3xl font-bold text-accent-900">From Our Blog</h2>
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
                  <h3 className="text-xl font-semibold text-accent-900">{item.title}</h3>
                  <Link href="/blog" className="text-primary-600 font-medium hover:underline">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

