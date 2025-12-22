export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: 'Academy' | 'Medical' | 'Wellness' | 'Research';
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    image: string;
    tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'Integrative Healing: Blending Tradition & Science',
        slug: 'integrative-healing-tradition-science',
        excerpt: 'Explore how modern medical practices are increasingly incorporating traditional oriental medicine for more holistic patient care.',
        content: `
      <p>In the rapidly evolving landscape of modern healthcare, a significant shift is occurring. Practitioners and researchers are looking back at ancient wisdom, not as a replacement for contemporary science, but as a powerful complement to it. This synergy is known as <strong>Integrative Healing</strong>.</p>
      
      <h3>The Roots of Tradition</h3>
      <p>Traditional Oriental Medicine (TOM) has been practiced for thousands of years. Its core philosophy revolves around the concept of "Qi" or life energy, and the balance of Yin and Yang. While these concepts might seem abstract in a laboratory setting, their clinical applications—such as acupuncture, herbal medicine, and Tuina massage—have demonstrated remarkable efficacy in pain management and chronic disease care.</p>
      
      <blockquote>
        "Integrative medicine is not just about combining two different systems; it's about creating a new paradigm of patient-centered care."
      </blockquote>

      <h3>The Science of Synergy</h3>
      <p>Modern science is now beginning to map the mechanisms behind these traditional practices. For instance, functional MRI studies have shown how acupuncture points correspond to specific brain regions, triggering the release of endorphins and modulating the nervous system. When we blend this data-driven understanding with the holistic approach of tradition, we get a healthcare model that treats the person, not just the symptom.</p>

      <h3>Clinical Applications</h3>
      <ul>
        <li>Pain Management: Combining physiotherapy with acupuncture.</li>
        <li>Oncology: Using herbal supplements to mitigate chemotherapy side effects.</li>
        <li>Mental Health: Integrating mindfulness and Tai Chi into traditional psychotherapy.</li>
      </ul>

      <p>At KUG Oriental Academy, we are dedicated to bridging this gap. Our curriculum is designed to ensure that the next generation of practitioners is well-versed in both the ancient arts and the latest medical research.</p>
    `,
        category: 'Medical',
        author: {
            name: 'Dr. Sarah Chen',
            role: 'Head of Research',
            avatar: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=150&q=80',
        },
        date: 'Oct 5, 2024',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b43?auto=format&fit=crop&w=1200&q=80',
        tags: ['Integrative Medicine', 'Research', 'Holistic Health'],
    },
    {
        id: '2',
        title: 'Why Clinical Internships Matter in Alternative Medicine',
        slug: 'importance-of-clinical-internships',
        excerpt: 'The journey from classroom theory to clinical practice is a critical one. Discover why hands-on training is the backbone of a successful career.',
        content: `
      <p>Theory provides the foundation, but the clinic provides the soul. In the field of alternative medicine, where touch and intuition are as important as knowledge, clinical internships are indispensable.</p>
      
      <h3>Bridging the Gap</h3>
      <p>A student might know every acupuncture point on a plastic model, but finding those points on a living, breathing human being with a unique constitution is a different challenge entirely. Internships allow students to observe experienced masters and eventually apply their skills under supervision.</p>

      <h3>Real-World Complexity</h3>
      <p>Patients rarely present with "textbook" symptoms. They bring emotional history, lifestyle factors, and complex comorbidities. Handling this complexity requires more than just a certificate; it requires experience.</p>
      
      <p>Our program at Oriental Academy emphasizes early clinical exposure. We believe that by interacting with patients under the guidance of seasoned professionals, students develop the empathy and diagnostic precision required for excellence.</p>
    `,
        category: 'Academy',
        author: {
            name: 'Prof. Michael Wang',
            role: 'Clinical Director',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
        },
        date: 'Sep 18, 2024',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1200&q=80',
        tags: ['Education', 'Internship', 'Career Growth'],
    },
    {
        id: '3',
        title: 'Top Skills for Modern Acupuncture Practitioners',
        slug: 'top-skills-modern-acupuncture',
        excerpt: 'Beyond the needles: What does it take to excel as an acupuncturist in the 21st century? We break down the essential technical and soft skills.',
        content: `
      <p>Acupuncture is an art as much as it is a science. To thrive in today's competitive wellness market, practitioners need a diverse toolkit.</p>
      
      <h3>1. Anatomical Precision</h3>
      <p>Modern practitioners must have a deep understanding of western anatomy. This ensures safety and allows for better communication with other medical professionals.</p>

      <h3>2. Empathy and Communication</h3>
      <p>The therapeutic relationship is a key component of healing. Being able to listen and explain complex concepts to patients builds trust and improves outcomes.</p>

      <h3>3. Adaptability</h3>
      <p>Whether it's integrating electro-acupuncture or using laser therapy, staying updated with technological advancements is crucial.</p>
    `,
        category: 'Medical',
        author: {
            name: 'Dr. Emily Rose',
            role: 'Senior Acupuncturist',
            avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80',
        },
        date: 'Aug 30, 2024',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1554295405-9d66f6a1a049?auto=format&fit=crop&w=1200&q=80',
        tags: ['Acupuncture', 'Skills', 'Professionalism'],
    },
    {
        id: '4',
        title: 'Holistic Nutrition: Building Evidence-Based Meal Plans',
        slug: 'holistic-nutrition-meal-plans',
        excerpt: 'Learn how to combine nutritional science with the principles of TCM to create diet plans that facilitate deep internal healing.',
        content: `
      <p>Food is the first medicine. In Oriental medicine, the diet is the foundation of health. Holistic nutrition goes beyond counting calories; it considers the energetic properties of food.</p>
      
      <h3>The Five Elements and Diet</h3>
      <p>TCM categorizes food by taste and thermal properties. Balancing these elements according to a person's constitution and the season can prevent disease before it starts.</p>

      <h3>Evidence-Based Approach</h3>
      <p>We combine these traditional views with modern nutritional research on micronutrients, glycemic index, and gut health. The result is a comprehensive approach to eating that fuels both body and mind.</p>
    `,
        category: 'Wellness',
        author: {
            name: 'Elena Gilbert',
            role: 'Nutrition Consultant',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        },
        date: 'Aug 12, 2024',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80',
        tags: ['Nutrition', 'Wellness', 'TCM'],
    },
    {
        id: '5',
        title: 'Mind-Body Medicine: Techniques for Stress Relief',
        slug: 'mind-body-stress-relief',
        excerpt: 'Stress is the silent epidemic of the modern era. Explore mind-body techniques that can restore your nervous system to a state of calm.',
        content: `
      <p>The mind and body are not separate entities; they are reflections of each other. Chronic stress manifests as physical tension and disease.</p>
      
      <h3>The Role of Breath</h3>
      <p>Pranayama and deep breathing exercises are the fastest way to switch from the sympathetic (fight or flight) to the parasympathetic (rest and digest) nervous system.</p>

      <h3>Movement as Meditation</h3>
      <p>Practices like Qi Gong and Yoga move energy through the body while quieting the mind. These are essential tools for anyone living in a high-stress environment.</p>
    `,
        category: 'Wellness',
        author: {
            name: 'James Wilson',
            role: 'Mindfulness Coach',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        },
        date: 'Jul 21, 2024',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
        tags: ['Stress Relief', 'Mindfulness', 'Qi Gong'],
    },
];
