import type { IconName } from '@/components/SiteIcon'

/* Supporting tools shown in the Toolkit tabs. Images live in /public/images. */
export type Tool = {
  title: string
  icon: IconName
  image: string
  alt: string
  description: string
  caption: string
  detail: string
}

export const tools: Tool[] = [
  {
    title: 'CV Builder',
    icon: 'file-text',
    image: '/images/cv-builder.jpg',
    alt: 'A CV on a clipboard next to a laptop',
    description:
      'Create a CV from your profile, start blank, or import the one you have. Pick a template and export a clean PDF.',
    caption: 'Your CV, ready to send',
    detail: 'Templates · PDF export · Import',
  },
  {
    title: 'AI CV Analysis',
    icon: 'radar',
    image: '/images/skill-gap.jpg',
    alt: 'A team planning work with sticky notes on a wall',
    description:
      'Get an AI-estimated quality score for your CV against your target role, with specific, prioritized fixes.',
    caption: 'Know what to fix first',
    detail: 'Quality score · Recommendations',
  },
  {
    title: 'Career Roadmap',
    icon: 'route',
    image: '/images/career-roadmap.jpg',
    alt: 'A notebook with a written plan on a wooden desk',
    description:
      'Follow a stage-by-stage plan of skills, projects, tools and certifications for your target role, and track progress as you go.',
    caption: 'One stage at a time',
    detail: 'Skills · Projects · Certifications',
  },
]
