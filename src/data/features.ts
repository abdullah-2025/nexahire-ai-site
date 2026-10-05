import type { IconName } from '@/components/SiteIcon'

type Feature = {
  title: string
  icon: IconName
  image: string
  description: string
  tags: [IconName, string][]
  caption: string
  subtitle: string
  chipIcon: IconName
}

export const features: Feature[] = [
  {
    title: 'AI CV Builder',
    icon: 'file-text',
    image: '/images/cv-builder.jpg',
    description:
      'Turn your experience into a polished, role-specific CV with smart suggestions that bring your strengths forward.',
    tags: [
      ['sparkles', 'Suggestions'],
      ['file-check', 'ATS Ready'],
      ['target', 'Role Match'],
    ],
    caption: 'CV quality · 92%',
    subtitle: 'Tailor for a role',
    chipIcon: 'check',
  },
  {
    title: 'Skill Gap Analysis',
    icon: 'radar',
    image: '/images/skill-gap.jpg',
    description:
      'See how your skills match real roles and get practical next steps to close the gaps that matter.',
    tags: [
      ['layers', 'Skills'],
      ['bar-chart-3', 'Gaps'],
      ['briefcase', 'Roles'],
    ],
    caption: 'Role match · 94%',
    subtitle: '3 skills to strengthen',
    chipIcon: 'gauge',
  },
  {
    title: 'Career Roadmaps',
    icon: 'route',
    image: '/images/career-roadmap.jpg',
    description:
      'Follow a personalized, milestone-based path that makes your target role feel achievable and measurable.',
    tags: [
      ['flag', 'Milestones'],
      ['calendar', 'Weekly Plan'],
      ['trending-up', 'Progress'],
    ],
    caption: '4 milestones mapped',
    subtitle: 'Up next: Portfolio project',
    chipIcon: 'map',
  },
  {
    title: 'AI Mock Interviews',
    icon: 'mic',
    image: '/images/mock-interview.jpg',
    description:
      'Practice realistic, role-specific conversations and get clear feedback before the real interview.',
    tags: [
      ['message-square', 'Questions'],
      ['audio-lines', 'Delivery'],
      ['award', 'Feedback'],
    ],
    caption: 'Practice session ready',
    subtitle: 'Role-specific interview',
    chipIcon: 'mic',
  },
]
