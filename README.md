# KUG Oriental Academy Website

A modern, premium, fully responsive website for KUG Oriental Academy - a government-recognized and ISO-certified institution in alternative medicine.

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with global components
│   ├── page.tsx             # Home page (/)
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── about/               # About Us page
│   ├── courses/             # Courses listing page
│   │   └── [slug]/          # Dynamic course detail pages
│   ├── resources/           # Resources page
│   ├── gallery/             # Gallery page
│   ├── contact/             # Contact page
│   └── blog/                # Blog listing page
│       └── [slug]/          # Dynamic blog post pages
│
├── components/
│   ├── global/             # Global components
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   └── Footer.tsx       # Footer with navigation and social links
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx       # Button component (primary, secondary, outline)
│       ├── Card.tsx         # Card component with variants
│       ├── Modal.tsx        # Modal/popup component (placeholder)
│       ├── Input.tsx        # Form input component
│       ├── Textarea.tsx     # Textarea component
│       ├── Select.tsx       # Select dropdown component
│       └── index.ts         # Component exports
│
├── public/                  # Static assets (images, icons, etc.)
│
└── Configuration files
    ├── package.json         # Dependencies and scripts
    ├── tsconfig.json        # TypeScript configuration
    ├── tailwind.config.ts   # Tailwind CSS configuration
    ├── next.config.js       # Next.js configuration
    └── postcss.config.js    # PostCSS configuration
```

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Fully Responsive** design (mobile, tablet, desktop)
- ✅ **Premium Theme** with healthcare/alternative medicine color scheme
- ✅ **SEO Optimized** with metadata placeholders
- ✅ **Sticky Header** with mobile menu
- ✅ **Global Navigation** with external Result link
- ✅ **Reusable Components** (Cards, Buttons, Forms, Modal)
- ✅ **Modern Typography** (Poppins & Inter fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Navigation Structure

- **Home** (`/`) - Landing page
- **About Us** (`/about`) - About the academy
- **Courses** (`/courses`) - Course listings
- **Course Details** (`/courses/[slug]`) - Individual course pages
- **Resources** (`/resources`) - Educational resources
- **Gallery** (`/gallery`) - Photo gallery
- **Contact** (`/contact`) - Contact information
- **Blog** (`/blog`) - Blog posts
- **Blog Post** (`/blog/[slug]`) - Individual blog posts
- **Result** (External) - Links to https://result.kugoriental.com

## Design System

### Colors
- **Primary**: Blue tones (healthcare theme)
- **Secondary**: Green tones (alternative medicine theme)
- **Accent**: Neutral grays

### Typography
- **Headings**: Poppins (600-700 weight)
- **Body**: Inter (400-500 weight)

### Components
- Premium card-based layouts
- Clean, spacious design
- Smooth transitions and hover effects
- Mobile-first responsive approach

## Next Steps

This is the project architecture phase. Page sections and content will be designed in subsequent steps.

## License

© 2025 KUG Oriental Academy. All rights reserved.

