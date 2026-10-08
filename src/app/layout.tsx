import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexaHire — AI-Powered Career Readiness Platform',
  description:
    "NexaHire connects CV building, AI skill-gap analysis, career roadmaps, mock interviews, and job discovery into one unified platform — built for Pakistan's fresh graduates.",
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
