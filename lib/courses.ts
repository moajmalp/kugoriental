export type Course = {
    id: string
    slug: string
    name: string
    level: string
    category: string
    shortDesc: string
    overview: string
    img: string
    audience: string[]
    whatWillYouLearn: string[]
    details: {
        programCode: string
        duration: string
        eligibility: string
        examination: string
        totalMarks: string
        practicalTraining: string
        medium: string
        fee: string
    }
}

export const courses: Course[] = [
    {
        id: 'd-acu',
        slug: 'professional-diploma-in-acupuncture',
        name: 'Professional Diploma in Acupuncture (D. Acu)',
        level: 'Intermediate',
        category: 'Acupuncture',
        shortDesc: 'Comprehensive professional program integrating ancient and modern acupuncture.',
        overview: 'A comprehensive professional program integrating ancient Chinese acupuncture with modern medical understanding.',
        img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80&sig=5',
        audience: [
            'Individuals seeking a career in acupuncture and traditional healing'
        ],
        whatWillYouLearn: [
            'Acupuncture theory & meridians',
            'Pain management & energy balancing',
            'Pulse & tongue diagnosis',
            'Electro-acupuncture & moxibustion',
            '90 Days hands-on clinical practice'
        ],
        details: {
            programCode: 'D. Acu',
            duration: '1 Year',
            eligibility: 'Plus Two or Any Degree',
            examination: '2 Theory Papers + 1 Practical',
            totalMarks: '300',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹40,000'
        }
    },
    {
        id: 'cct',
        slug: 'certificate-in-cupping-therapy',
        name: 'Certificate in Cupping Therapy',
        level: 'Intermediate',
        category: 'Alternative Therapy',
        shortDesc: 'Comprehensive training in ancient cupping therapy techniques and safety protocols.',
        overview: 'The Certificate in Cupping Therapy program provides comprehensive training in the ancient practice of cupping therapy. Students learn cupping techniques, safety protocols, and practical application to support pain relief, improved circulation, and relaxation.',
        img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Therapy practitioners',
            'Wellness professionals',
            'Students interested in holistic healing'
        ],
        whatWillYouLearn: [
            'Fundamentals of cupping therapy',
            'Dry and wet cupping techniques',
            'Safety, hygiene, and contraindications',
            'Pain management applications',
            'Practical hands-on training'
        ],
        details: {
            programCode: 'CCT',
            duration: '6 Months',
            eligibility: 'Plus Two',
            examination: '2 Theory Papers + 1 Practical Paper',
            totalMarks: '300',
            practicalTraining: '30 Days',
            medium: 'Malayalam & English',
            fee: '₹15,000'
        }
    },
    {
        id: 'mac-2',
        slug: 'master-level-in-acupuncture-therapy-2nd-year',
        name: 'Master Level in Acupuncture Therapy – 2nd Year',
        level: 'Intermediate',
        category: 'Acupuncture',
        shortDesc: 'Advanced master-level program on acupuncture theory and clinical practice.',
        overview: 'This advanced master-level program focuses on in-depth acupuncture theory, diagnostic methods, meridian systems, and supervised clinical practice.',
        img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Advanced acupuncture students',
            'Healthcare professionals'
        ],
        whatWillYouLearn: [
            'Advanced acupuncture techniques',
            'Meridian and diagnostic systems',
            'Clinical case analysis',
            'Traditional Chinese Medicine principles'
        ],
        details: {
            programCode: 'M. Ac',
            duration: '1 Year',
            eligibility: 'M. Ac 1st Year',
            examination: '3 Theory Papers + 1 Practical Paper',
            totalMarks: '400',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹38,000'
        }
    },
    {
        id: 'mac-1',
        slug: 'master-level-in-acupuncture-therapy-1st-year',
        name: 'Master Level in Acupuncture Therapy – 1st Year',
        level: 'Intermediate',
        category: 'Acupuncture',
        shortDesc: 'Foundational master-level program covering acupuncture principles and diagnosis.',
        overview: 'A foundational master-level program covering acupuncture principles, clinical diagnosis, and extensive hands-on training.',
        img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Bachelor-level acupuncture graduates',
            'Medical graduates'
        ],
        whatWillYouLearn: [
            'Acupuncture fundamentals',
            'Meridian systems',
            'Diagnosis techniques',
            'Clinical practice'
        ],
        details: {
            programCode: 'M. Ac',
            duration: '1 Year',
            eligibility: 'B. Ac / Any Medical Graduate',
            examination: '4 Theory Papers + 1 Practical Paper',
            totalMarks: '500',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹38,000'
        }
    },
    {
        id: 'bac-lat-3',
        slug: 'bachelor-level-in-acupuncture-lateral-entry-3rd-year',
        name: 'Bachelor Level in Acupuncture – Lateral Entry 3rd Year',
        level: 'Intermediate',
        category: 'Acupuncture',
        shortDesc: 'Lateral-entry program for accelerated acupuncture degree completion.',
        overview: 'A lateral-entry bachelor program designed for candidates with prior acupuncture qualifications to complete the degree in an accelerated format.',
        img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Diploma holders',
            'Advanced acupuncture students'
        ],
        whatWillYouLearn: [
            'Advanced acupuncture practices',
            'Traditional Chinese Medicine theories',
            'Clinical diagnosis',
            'Professional treatment methods'
        ],
        details: {
            programCode: 'B. Ac',
            duration: '1 Year',
            eligibility: 'B. Ac 2nd Year',
            examination: '5 Theory Papers + 1 Practical Paper',
            totalMarks: '600',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹35,000'
        }
    },
    {
        id: 'bac-lat-2',
        slug: 'bachelor-level-in-acupuncture-lateral-entry-2nd-year',
        name: 'Bachelor Level in Acupuncture – Lateral Entry 2nd Year',
        level: 'Intermediate',
        category: 'Acupuncture',
        shortDesc: 'Accelerated bachelor program focusing on advanced theory and clinical expertise.',
        overview: 'An accelerated bachelor-level acupuncture program focusing on advanced theoretical knowledge and clinical expertise.',
        img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Diploma holders in acupuncture'
        ],
        whatWillYouLearn: [
            'Advanced acupuncture theory',
            'Diagnosis and treatment planning',
            'Clinical practice skills',
            'Patient management'
        ],
        details: {
            programCode: 'B. Ac',
            duration: '1 Year',
            eligibility: 'D. Acu',
            examination: '4 Theory Papers + 1 Practical Paper',
            totalMarks: '500',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹35,000'
        }
    },
    {
        id: 'dct',
        slug: 'diploma-in-cupping-therapy',
        name: 'Diploma in Cupping Therapy',
        level: 'Intermediate',
        category: 'Alternative Therapy',
        shortDesc: 'Comprehensive training in ancient cupping therapy techniques and safety protocols.',
        overview: 'The Diploma in Cupping Therapy is an in-depth program providing comprehensive training in the ancient healing practice of cupping. Students learn various cupping techniques, equipment usage, safety measures, and practical applications to support pain relief, improved circulation, and relaxation.',
        img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Aspiring wellness professionals',
            'Therapists',
            'Health practitioners interested in non-invasive healing methods'
        ],
        whatWillYouLearn: [
            'Traditional and modern cupping methods',
            'Use of different types of cups and techniques',
            'Protocols for treating skin, pain, and neurological conditions',
            'Practical training in clinical environments',
            'Beauty and cosmetic cupping techniques'
        ],
        details: {
            programCode: 'DCT',
            duration: '1 Year',
            eligibility: 'Plus Two Pass or Equivalent / 10th Pass + CCT',
            examination: '3 Theory Papers + 1 Practical Paper',
            totalMarks: '400',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹30,000'
        }
    },
    {
        id: 'cahc',
        slug: 'certificate-in-acupressure-and-holistic-health-care',
        name: 'Certificate in Acupressure and Holistic Health Care',
        level: 'Intermediate',
        category: 'Acupressure & Holistic Health',
        shortDesc: 'Foundational skills in acupressure therapy and holistic healing.',
        overview: 'This program introduces the principles of acupressure and holistic healing by channelizing vital energy to restore balance in the body. Students gain foundational skills in acupressure therapy, emergency handling, and alternative healing methods.',
        img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Beginners in holistic healing',
            'Wellness practitioners',
            'Individuals interested in natural therapies'
        ],
        whatWillYouLearn: [
            'Principles of acupressure therapy',
            'Vital energy flow and balance',
            'Emergency treatment techniques',
            'Basic knowledge of alternative therapies',
            'Holistic healing approach'
        ],
        details: {
            programCode: 'CAHC',
            duration: '6 Months',
            eligibility: '10th Pass or Equivalent',
            examination: '3 Theory Papers + 1 Practical Paper',
            totalMarks: '400',
            practicalTraining: '30 Days',
            medium: 'Malayalam & English',
            fee: '₹8,400'
        }
    },
    {
        id: 'dahc',
        slug: 'diploma-in-acupressure-and-holistic-health-care',
        name: 'Diploma in Acupressure and Holistic Health Care',
        level: 'Intermediate',
        category: 'Acupressure & Holistic Health',
        shortDesc: 'Comprehensive diploma covering acupressure techniques and holistic health practices.',
        overview: 'A comprehensive diploma covering acupressure techniques and holistic health practices, including lifestyle modification and natural healing methods for overall well-being.',
        img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Acupressure practitioners',
            'Holistic health professionals',
            'Wellness students'
        ],
        whatWillYouLearn: [
            'Advanced acupressure techniques',
            'Holistic health practices',
            'Nutrition and lifestyle guidance',
            'Clinical application of pressure therapy'
        ],
        details: {
            programCode: 'DAHC',
            duration: '1 Year',
            eligibility: 'Plus Two Pass or Equivalent / 10th Pass + CAHC',
            examination: '3 Theory Papers + 1 Practical Paper',
            totalMarks: '400',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹12,400'
        }
    },
    {
        id: 'cya',
        slug: 'certificate-in-yoga',
        name: 'Certificate in Yoga',
        level: 'Intermediate',
        category: 'Yoga & Wellness',
        shortDesc: 'Foundational training in yoga philosophy, postures, and meditation.',
        overview: 'The Certificate in Yoga program provides foundational training in yoga philosophy, postures, breathing techniques, meditation, and relaxation, enabling graduates to guide yoga sessions and promote wellness.',
        img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Yoga beginners',
            'Fitness enthusiasts',
            'Wellness instructors'
        ],
        whatWillYouLearn: [
            'Yoga philosophy and principles',
            'Asanas and body alignment',
            'Pranayama and breathing techniques',
            'Meditation and relaxation methods',
            'Basic yoga teaching skills'
        ],
        details: {
            programCode: 'CYA',
            duration: '6 Months',
            eligibility: '10th Pass or Equivalent',
            examination: '3 Theory Papers + 1 Practical Paper',
            totalMarks: '400',
            practicalTraining: '30 Days',
            medium: 'Malayalam & English',
            fee: '₹6,200'
        }
    },
    {
        id: 'dkp',
        slug: 'diploma-in-kalarippayattu',
        name: 'Diploma in Kalarippayattu',
        level: 'Intermediate',
        category: 'Martial Arts & Traditional Wellness',
        shortDesc: 'Specialized diploma in the ancient Indian martial art of Kalarippayattu.',
        overview: 'A specialized diploma focusing on the ancient Indian martial art of Kalarippayattu, covering physical training, combat techniques, flexibility, discipline, and cultural heritage.',
        img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Martial arts students',
            'Fitness professionals',
            'Cultural and traditional art enthusiasts'
        ],
        whatWillYouLearn: [
            'Kalarippayattu combat techniques',
            'Unarmed and weapon-based training',
            'Flexibility and body conditioning',
            'Mental discipline and focus',
            'Traditional healing and cultural knowledge'
        ],
        details: {
            programCode: 'DKP',
            duration: '2 Years',
            eligibility: '10th Pass or Equivalent',
            examination: '3 Theory Papers + 1 Practical Paper (each year)',
            totalMarks: '800',
            practicalTraining: '120 Days',
            medium: 'Malayalam & English',
            fee: '₹30,000'
        }
    },
    {
        id: 'dapt',
        slug: 'diploma-in-ayurveda-panchakarma-therapy',
        name: 'Diploma in Ayurveda Panchakarma Therapy (DAPT)',
        level: 'Intermediate',
        category: 'Ayurveda',
        shortDesc: 'Professional program for skilled Panchakarma therapists.',
        overview: 'A professional program designed to train skilled Panchakarma therapists for India’s growing Ayurvedic healthcare sector.',
        img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=900&q=80&sig=4',
        audience: [
            'Students aiming to specialize in Ayurvedic therapy and detox practices',
            'Wellness professionals'
        ],
        whatWillYouLearn: [
            'Core Ayurvedic principles',
            'Panchakarma, Poorvakarma & Paschatkarma',
            'Detoxification & rejuvenation therapies',
            'Ayurvedic massage & Dhara',
            '6 Months clinical exposure'
        ],
        details: {
            programCode: 'DAPT',
            duration: '1 Year',
            eligibility: 'Plus Two Pass or Equivalent',
            examination: '2 Theory Papers + 1 Practical',
            totalMarks: '300',
            practicalTraining: '90 Days',
            medium: 'Malayalam & English',
            fee: '₹35,000'
        }
    },
    {
        id: 'dcp',
        slug: 'diploma-in-counselling-psychology',
        name: 'Diploma in Counselling Psychology (DCP)',
        level: 'Intermediate',
        category: 'Psychology & Wellness',
        shortDesc: 'Career-oriented counselling program for professional guidance.',
        overview: 'A career-oriented counselling program focused on professional psychological guidance and mental wellness support.',
        img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80',
        audience: [
            'Aspiring Counselors',
            'Wellness Professionals',
            'Individuals interested in psychology'
        ],
        whatWillYouLearn: [
            'Individual and group counselling skills',
            'Emotional and behavioral guidance',
            'Communication & empathy building',
            'Professional counselling practices'
        ],
        details: {
            programCode: 'DCP',
            duration: '6 Months',
            eligibility: 'Plus Two Pass or Equivalent',
            examination: '2 Theory Papers',
            totalMarks: '200',
            practicalTraining: 'No Practical',
            medium: 'Malayalam & English',
            fee: '₹5,000'
        }
    }
]
