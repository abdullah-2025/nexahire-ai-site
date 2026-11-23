import type { IconName } from '@/components/SiteIcon'

/*
 * Supporting tools shown in the Toolkit tabs. Images live in /public/images.
 * Photos are from Unsplash, free under the Unsplash License (no attribution required):
 *   toolkit-cv-document.jpg      https://unsplash.com/photos/white-printer-paper-on-macbook-pro-4YzrcDNcRVg (rotated 90°)
 *   toolkit-cv-analysis.jpg     https://unsplash.com/photos/a-woman-is-reading-a-resume-at-a-table-9si2noVCVH8 (Resume Genius)
 *   toolkit-career-roadmap.jpg  https://unsplash.com/photos/hand-checking-off-items-on-a-to-do-list-fXlL5I0IvK0 (Jakub Żerdzicki)
 */
export type Tool = {
  title: string
  icon: IconName
  image: string
  alt: string
  /** CSS object-position that keeps the subject in the 5:4 stage crop. */
  focus: string
  description: string
  caption: string
  detail: string
}

export const tools: Tool[] = [
  {
    title: 'CV Builder',
    icon: 'file-text',
    image: '/images/toolkit-cv-document.jpg',
    alt: 'A printed CV beside an open laptop',
    focus: '50% 78%',
    description:
      'Create a CV from your profile, start blank, or import the one you have. Pick a template and export a clean PDF.',
    caption: 'Your CV, ready to send',
    detail: 'Templates · PDF export · Import',
  },
  {
    title: 'AI CV Analysis',
    icon: 'radar',
    image: '/images/toolkit-cv-analysis.jpg',
    alt: 'A reviewer reading a printed CV at a desk',
    focus: '62% 50%',
    description:
      'Get an AI-estimated quality score for your CV against your target role, with specific, prioritized fixes.',
    caption: 'Know what to fix first',
    detail: 'Quality score · Recommendations',
  },
  {
    title: 'Career Roadmap',
    icon: 'route',
    image: '/images/toolkit-career-roadmap.jpg',
    alt: 'A hand ticking off steps on a checklist in a notebook',
    focus: '58% 50%',
    description:
      'Follow a stage-by-stage plan of skills, projects, tools and certifications for your target role, and track progress as you go.',
    caption: 'One stage at a time',
    detail: 'Skills · Projects · Certifications',
  },
]
