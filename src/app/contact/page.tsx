import type { Metadata } from 'next'
import LegalShell from '@/components/LegalShell'

export const metadata: Metadata = {
  title: 'Contact Us — NexaHire',
  description:
    'Get in touch with the NexaHire support team for platform inquiries, technical assistance, or partnership questions. We respond within 24 to 48 hours.',
}

export default function ContactPage() {
  return (
    <LegalShell
      badge="Direct Support & Inquiries"
      icon="mail"
      title="Contact Us"
      intro={<>Get in touch with the NexaHire team. Whether you need technical assistance, platform guidance, or have institutional partnership inquiries, we are here to assist you.</>}
    >

        {/* Prominent Primary Contact Card */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-raised via-raised to-canvas p-8 shadow-card sm:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-bronze-tint text-bronze shadow-inner border border-line">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-3xl">
              Get in Touch with NexaHire Support
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
              Have questions about your mock interview reports, CV analysis,
              or job applications? Write to us directly:
            </p>

            {/* Email Box */}
            <div className="mt-8 w-full max-w-md">
              <a
                href="mailto:support@nexahire.site"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-4 shadow-soft transition-all duration-300 hover:border-taupe-soft hover:bg-subtle hover:shadow-card hover:shadow-card"
              >
                <div className="flex items-center gap-3.5 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bronze-tint text-bronze group-hover:scale-105 transition-transform">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-bronze font-semibold">
                      Official Email
                    </span>
                    <span className="text-base sm:text-lg font-bold text-ink group-hover:text-bronze transition-colors">
                      support@nexahire.site
                    </span>
                  </div>
                </div>
                <div className="text-bronze group-hover:translate-x-1 transition-transform">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Response Time Notice Badge */}
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-taupe-tint px-4 py-2 text-xs sm:text-sm font-medium text-muted">
              <span className="h-2 w-2 rounded-full bg-bronze animate-pulse" />
              <span>
                <strong>Response Time:</strong> Our support team responds
                within <strong>24 to 48 hours</strong>.
              </span>
            </div>
          </div>
        </div>

        {/* Support Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-bronze-tint text-bronze">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-ink">
              Platform &amp; Technical Help
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Facing issues with CV uploading, microphone access during mock
              interviews, or score calculation? Email us with your account details
              for rapid resolution.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-bronze-tint text-bronze">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-ink">
              University &amp; Faculty
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              University placement officers and computer science departments
              seeking campus-wide integration or student cohorts can reach out
              for dedicated onboarding.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-bronze-tint text-bronze">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-ink">
              Hiring Partners &amp; Employers
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Companies looking to interview pre-assessed, job-ready Pakistani
              graduates or post open software engineering roles can connect with
              our talent relations team.
            </p>
          </div>
        </div>

        {/* Academic Affiliation Note */}
        <div className="mt-10 rounded-2xl border border-line bg-canvas p-6 text-center text-xs text-muted sm:p-8">
          <p className="font-medium text-ink">
            NexaHire — AI-Powered Job &amp; Interview Platform
          </p>
          <p className="mt-1">
            Built at SZABIST Islamabad Campus • Department of Computer Science
            &amp; Software Engineering
          </p>
          <p className="mt-2 text-bronze">
            All inquiries: <a href="mailto:support@nexahire.site" className="underline hover:text-bronze-hover transition-colors">support@nexahire.site</a>
          </p>
        </div>
    </LegalShell>
  )
}
