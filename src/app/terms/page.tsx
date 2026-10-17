import type { Metadata } from 'next'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — NexaHire',
  description:
    'Review the terms and conditions governing the use of NexaHire’s AI-powered career readiness, mock interview, and job discovery platform.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#061f24] text-[#d0dfe1] selection:bg-[#3b737a]/40 selection:text-white relative overflow-hidden flex flex-col font-sans">
      {/* Background Glows & Architectural Grid */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(59,115,122,0.25),_transparent_70%)]" />
        <div className="absolute -left-24 top-64 h-96 w-96 rounded-full bg-[#76a7ad]/10 blur-[110px]" />
        <div className="absolute -right-24 top-[900px] h-96 w-96 rounded-full bg-[#3b737a]/15 blur-[120px]" />
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

      {/* Main Legal Content Container */}
      <main className="relative z-10 mx-auto w-full max-w-4xl flex-1 px-4 pt-16 pb-12 sm:px-6 lg:pt-20 lg:pb-16">
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Agreement &amp; Guidelines
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#d0dfe1]/80 sm:text-lg">
            Please read these terms carefully before accessing or using the
            NexaHire career readiness and AI mock interview platform.
          </p>
        </div>

        {/* Highlight Note */}
        <div className="mb-10 rounded-2xl border border-[#76a7ad]/30 bg-gradient-to-r from-[#042e33]/90 to-[#144147]/70 p-6 shadow-xl backdrop-blur-md sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3b737a]/30 text-[#76a7ad]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white sm:text-lg">
                Quick Summary for Candidates
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#d0dfe1]/90">
                NexaHire is an educational preparation platform designed to help
                you assess your skills, practice interviews, and discover career
                opportunities. While our AI offers guidance and scoring rubrics,
                it does not guarantee job placement or employment outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Legal Sections */}
        <article className="rounded-3xl border border-[#76a7ad]/20 bg-[#042e33]/45 p-6 shadow-2xl backdrop-blur-xl sm:p-12">
          {/* Section 1 */}
          <section className="border-b border-[#76a7ad]/15 pb-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              By accessing, browsing, registering for, or using NexaHire
              (including our website, AI mock interview modules, CV scoring
              tools, and roadmaps), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;) and our Privacy Policy. If you do not
              agree to these Terms, you may not access or use our services.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              To use NexaHire, you must be at least 16 years of age or enrolled
              in an accredited high school, university, or higher education
              institution.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              2. Description of Services
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              NexaHire provides an integrated career readiness ecosystem tailored
              for university students and fresh graduates, comprising:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#d0dfe1]/85">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">AI-Powered CV Analysis:</strong> Formatting
                  audits, keyword matching, and skill-gap identification against
                  industry job descriptions.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Readiness Score:</strong> A
                  dynamic composite metric assessing CV completeness, technical
                  competencies, and interview confidence.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Role-Specific Roadmaps:</strong> Step-by-step
                  milestone pathways recommended to close identified skill gaps.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">AI Mock Interviews:</strong> Interactive
                  simulations with audio/text feedback evaluating answer
                  structure and delivery.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Talent Network &amp; Job Discovery:</strong> Opportunities
                  to discover graduate openings and connect directly with hiring
                  managers.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              3. User Responsibilities &amp; Conduct
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              In using NexaHire, you commit to maintaining honesty and integrity
              in all submissions. You agree that you will not:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#d0dfe1]/85">
              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/50 p-3.5">
                <strong className="text-white">Honest Credentials:</strong> Submit
                fabricated academic qualifications, counterfeit degrees, or
                misrepresented work experience.
              </div>
              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/50 p-3.5">
                <strong className="text-white">Anti-Scraping &amp; Reverse Engineering:</strong> Decompile,
                reverse-engineer, scrape, or extract questions, model weights, or
                scoring heuristics from NexaHire.
              </div>
              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/50 p-3.5">
                <strong className="text-white">Account Security:</strong> Share
                account credentials or permit unauthorized third parties to
                participate in mock interviews on your behalf.
              </div>
              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/50 p-3.5">
                <strong className="text-white">Prohibited Content:</strong> Upload
                malicious payloads, abusive audio submissions, or content that
                infringes on any third party&apos;s intellectual property.
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              4. AI Evaluations &amp; Employment Disclaimers
            </h2>
            <div className="mt-4 rounded-xl border border-[#3b737a]/30 bg-[#144147]/30 p-5">
              <h3 className="text-sm font-semibold text-white">
                Educational Guidance, Not Employment Guarantees
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#d0dfe1]/85 sm:text-sm">
                All AI scoring, feedback, Readiness Scores, and roadmap
                recommendations generated by NexaHire are provided strictly for
                educational and self-improvement purposes. NexaHire does not
                guarantee that following our recommendations will result in
                interviews, job offers, or employment placement. Hiring decisions
                rest solely with prospective employers.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              5. Intellectual Property
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              <strong className="text-white">NexaHire Property:</strong> All
              interfaces, designs, visual assets, software code, proprietary
              question banks, and branding remain the exclusive intellectual
              property of NexaHire and its licensors.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              <strong className="text-white">Your Content:</strong> You retain
              complete ownership of resumes, portfolio items, and answers you
              submit. You grant NexaHire a limited, non-exclusive license solely
              to process, transcribe, and analyze your content to deliver the
              services to you.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              6. Limitation of Liability
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              To the fullest extent permitted by applicable law, NexaHire and its
              developers, affiliates, and academic partners shall not be liable
              for any indirect, incidental, consequential, special, or punitive
              damages, including loss of profits, data, employment opportunities,
              or goodwill, arising from or related to your use of or inability to
              use the platform.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              The platform is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis without warranties of any kind, whether
              express or implied.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              7. Termination &amp; Suspension
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              You may terminate your account at any time via your user profile
              settings. NexaHire reserves the right to suspend or terminate
              accounts immediately without notice in cases of term violations,
              suspected fraud, abuse of AI features, or security compromise.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              8. Governing Law &amp; Jurisdiction
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              These Terms shall be governed by and construed in accordance with
              the laws of Pakistan. Any dispute arising out of or related to these
              Terms shall be subject to the exclusive jurisdiction of the
              competent courts located in Islamabad, Pakistan.
            </p>
          </section>
        </article>
      </main>

      {/* Footer Wrapped in site-sections */}
      <div className="site-sections relative z-10 mt-12">
        <Footer />
      </div>
    </div>
  )
}
