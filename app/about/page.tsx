import type { Metadata } from 'next'
import Image from 'next/image'
import { Button, Card, CardContent, CardHeader } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about KUG Oriental Academy - our mission, vision, and commitment to excellence in alternative medicine education.',
  openGraph: {
    title: 'About Us | KUG Oriental Academy',
    description:
      'Learn about KUG Oriental Academy - our mission, vision, and commitment to excellence in alternative medicine education.',
  },
  twitter: {
    title: 'About Us | KUG Oriental Academy',
    description:
      'Learn about KUG Oriental Academy - our mission, vision, and commitment to excellence in alternative medicine education.',
  },
}

const chooseUs = [
  'Government-recognized & ISO-certified academy',
  'University-recognized certifications and affiliations',
  'Immersive clinical internships with partner hospitals',
  'Expert-led mentorship from multidisciplinary faculty',
  'Modern simulation labs and advanced training facilities',
]

const teamMembers = Array.from({ length: 6 }).map((_, i) => ({
  name: `Team Member ${i + 1}`,
  role: 'Senior Faculty',
  img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80',
}))

const achievements = [
  { title: 'ISO Certified Institution', desc: 'Quality systems aligned with global standards.' },
  { title: 'Government Recognition', desc: 'Approved programs with regulatory compliance.' },
  { title: 'Academic Awards', desc: 'Multiple accolades for academic excellence.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero/About intro */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-primary-600 font-semibold">About KUG Oriental Academy</p>
            <h1 className="text-4xl font-bold text-accent-900">Our Academy Story</h1>
            <p className="text-accent-700 text-lg leading-relaxed">
              KUG Oriental Academy is a government-recognized and ISO-certified institution
              dedicated to elevating alternative medicine education. We blend classical healing
              wisdom with modern clinical science, ensuring learners graduate with confidence,
              competence, and globally relevant credentials.
            </p>
            <p className="text-accent-700 leading-relaxed">
              From acupuncture and naturopathy to integrative wellness programs, our curriculum is
              designed with university-recognized certifications, expert faculty, and clinical
              internships across affiliated hospitals and centers.
            </p>
            <div className="flex gap-4 pt-2">
              <Button as="link" href="/contact" variant="primary">
                Apply Now
              </Button>
              <Button as="link" href="/courses" variant="outline">
                Contact Admissions
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-secondary-100 blur-2xl" />
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-3xl bg-primary-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-premium-lg border border-accent-100 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
                alt="Academy story"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us with video placeholder */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-4">
            <p className="text-primary-600 font-semibold">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-accent-900">Premium, Evidence-Based Learning</h2>
            <div className="space-y-3 text-accent-700 leading-relaxed">
              {chooseUs.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-primary-500" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-premium-lg border border-accent-100 bg-accent-900 text-white aspect-video flex items-center justify-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="h-14 w-14 rounded-full bg-white/15 flex items-center justify-center border border-white/30">
                  <span className="text-white text-lg">▶</span>
                </div>
                <p className="text-white/80">Video introduction placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom grid lg:grid-cols-[0.5fr_1.5fr] gap-8 items-start">
          <div className="card-premium bg-white p-6 flex flex-col items-center text-center">
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-premium-lg mb-4">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
                alt="Founder"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-accent-900">Dr. A. K. Pillai</h3>
            <p className="text-accent-500 text-sm">Founder & Academic Director</p>
          </div>
          <div className="card-premium bg-white p-8 space-y-4">
            <h3 className="text-2xl font-semibold text-accent-900">Founder’s Note</h3>
            <p className="text-accent-700 leading-relaxed">
              “Our vision is to nurture practitioners who honor the depth of ancient healing while
              excelling in modern clinical standards. At KUG Oriental Academy, every learner receives
              mentorship, immersive practice, and pathways to contribute meaningfully to community
              health.”
            </p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="relative h-48 w-full">
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
      </section>

      {/* Achievements */}
      <section className="section-padding bg-accent-50">
        <div className="container-custom space-y-8">
          <div className="text-center space-y-3">
            <p className="text-primary-600 font-semibold">Achievements</p>
            <h2 className="text-3xl font-bold text-accent-900">Quality & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-accent-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-700">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

