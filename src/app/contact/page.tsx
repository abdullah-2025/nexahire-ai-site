import type { Metadata } from 'next'
import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import Footer from '@/components/sections/Footer'
import { authLinks } from '@/data/auth-links'

export const metadata: Metadata = {
  title: 'Contact Us — NexaHire',
  description:
    'Get in touch with the NexaHire support team for platform inquiries, technical assistance, or partnership questions. We respond within 24 to 48 hours.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#061f24] text-[#d0dfe1] selection:bg-[#3b737a]/40 selection:text-white relative overflow-hidden flex flex-col font-sans">
      {/* Background Glows & Architectural Grid */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(59,115,122,0.25),_transparent_70%)]" />
        <div className="absolute -left-24 top-64 h-96 w-96 rounded-full bg-[#76a7ad]/10 blur-[110px]" />
        <div className="absolute -right-24 top-[750px] h-96 w-96 rounded-full bg-[#3b737a]/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(118, 167, 173, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(118, 167, 173, 0.15) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'linear-gradient(to bottom, black 25%, transparent 95%)',
          }}
        />
      </div>

      {/* Floating Pill Header */}
      <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-[#76a7ad]/25 bg-[#042e33]/85 px-4 py-2.5 shadow-xl shadow-black/25 backdrop-blur-xl sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
            aria-label="NexaHire Home"
          >
            <BrandLogo variant="footer" />
          </Link>

          <nav className="hidden items-center gap-6 text-[13.5px] font-medium md:flex">
            <Link
              href="/"
              className="text-[#d0dfe1]/75 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/#features"
              className="text-[#d0dfe1]/75 transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-[#d0dfe1]/75 transition-colors hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-[#d0dfe1]/75 transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-[#d0dfe1]/75 transition-colors hover:text-white"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={authLinks.signup}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#3b737a] px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[#144147] hover:shadow-md"
            >
              <span>Get Started</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        {/* Page Hero Header */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#76a7ad]/30 bg-[#144147]/60 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#76a7ad] backdrop-blur-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Direct Support &amp; Inquiries
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#d0dfe1]/85 sm:text-lg">
            Get in touch with the NexaHire team. Whether you need technical
            assistance, platform guidance, or have institutional partnership
            inquiries, we are here to assist you.
          </p>
        </div>

        {/* Prominent Primary Contact Card */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-[#76a7ad]/30 bg-gradient-to-br from-[#042e33]/90 via-[#061f24]/90 to-[#144147]/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3b737a]/30 text-[#76a7ad] shadow-inner border border-[#76a7ad]/25">
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

            <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
              Get in Touch with NexaHire Support
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#d0dfe1]/85">
              Have questions about your Readiness Score, CV analysis, or mock
              interview sessions? Write to us directly:
            </p>

            {/* Email Box */}
            <div className="mt-8 w-full max-w-md">
              <a
                href="mailto:support@nexahire.site"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-[#76a7ad]/35 bg-[#042e33]/90 px-6 py-4 shadow-lg transition-all duration-300 hover:border-[#76a7ad] hover:bg-[#144147]/80 hover:shadow-xl hover:shadow-[#3b737a]/15"
              >
                <div className="flex items-center gap-3.5 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3b737a]/30 text-[#76a7ad] group-hover:scale-105 transition-transform">
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
                    <span className="block text-xs uppercase tracking-wider text-[#76a7ad] font-semibold">
                      Official Email
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#76a7ad] transition-colors">
                      support@nexahire.site
                    </span>
                  </div>
                </div>
                <div className="text-[#76a7ad] group-hover:translate-x-1 transition-transform">
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
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#76a7ad]/25 bg-[#144147]/50 px-4 py-2 text-xs sm:text-sm font-medium text-[#d0dfe1]/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#76a7ad] animate-pulse" />
              <span>
                <strong>Response Time:</strong> Our support team responds
                within <strong>24 to 48 hours</strong>.
              </span>
            </div>
          </div>
        </div>

        {/* Support Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#76a7ad]/20 bg-[#042e33]/50 p-6 backdrop-blur-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b737a]/25 text-[#76a7ad]">
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
            <h3 className="text-base font-semibold text-white">
              Platform &amp; Technical Help
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#d0dfe1]/75">
              Facing issues with CV uploading, microphone access during mock
              interviews, or score calculation? Email us with your account details
              for rapid resolution.
            </p>
          </div>

          <div className="rounded-2xl border border-[#76a7ad]/20 bg-[#042e33]/50 p-6 backdrop-blur-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b737a]/25 text-[#76a7ad]">
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
            <h3 className="text-base font-semibold text-white">
              University &amp; Faculty
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#d0dfe1]/75">
              University placement officers and computer science departments
              seeking campus-wide integration or student cohorts can reach out
              for dedicated onboarding.
            </p>
          </div>

          <div className="rounded-2xl border border-[#76a7ad]/20 bg-[#042e33]/50 p-6 backdrop-blur-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b737a]/25 text-[#76a7ad]">
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
            <h3 className="text-base font-semibold text-white">
              Hiring Partners &amp; Employers
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#d0dfe1]/75">
              Companies looking to interview pre-assessed, job-ready Pakistani
              graduates or post open software engineering roles can connect with
              our talent relations team.
            </p>
          </div>
        </div>

        {/* Academic Affiliation Note */}
        <div className="mt-10 rounded-2xl border border-[#76a7ad]/20 bg-[#061f24]/70 p-6 text-center text-xs text-[#d0dfe1]/75 sm:p-8">
          <p className="font-medium text-white">
            NexaHire — Career Readiness Platform
          </p>
          <p className="mt-1">
            Built at SZABIST Islamabad Campus • Department of Computer Science
            &amp; Software Engineering
          </p>
          <p className="mt-2 text-[#76a7ad]">
            All inquiries: <a href="mailto:support@nexahire.site" className="underline hover:text-white transition-colors">support@nexahire.site</a>
          </p>
        </div>
      </main>

      {/* Footer Wrapped in site-sections */}
      <div className="site-sections relative z-10 mt-12">
        <Footer />
      </div>
    </div>
  )
}
