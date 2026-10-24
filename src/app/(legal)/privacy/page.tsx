import type { Metadata } from 'next'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — NexaHire',
  description:
    'Learn how NexaHire collects, uses, and safeguards your personal, academic, and interview data on our AI-powered career readiness platform.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page min-h-dvh bg-[#061f24] text-[#d0dfe1] selection:bg-[#3b737a]/40 selection:text-white relative overflow-hidden flex flex-col font-sans">
      {/* Background Glows & Architectural Grid */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(59,115,122,0.25),_transparent_70%)]" />
        <div className="absolute -right-24 top-64 h-96 w-96 rounded-full bg-[#76a7ad]/10 blur-[110px]" />
        <div className="absolute -left-24 top-[900px] h-96 w-96 rounded-full bg-[#3b737a]/15 blur-[120px]" />
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
      <main className="relative z-10 mx-auto w-full max-w-4xl flex-1 px-4 pb-12 sm:px-6 lg:pb-16">
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Trust &amp; Transparency
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#d0dfe1]/80 sm:text-lg">
            How NexaHire collects, protects, and handles your personal, academic,
            and AI interview data.
          </p>
        </div>

        {/* Commitment Highlight Box */}
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white sm:text-lg">
                Our Student Privacy Commitment
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#d0dfe1]/90">
                NexaHire is created specifically for university students and
                fresh graduates. We never sell your personal data, CVs, or
                interview practice recordings to third-party advertisers. Your
                learning and practice materials remain your own.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Legal Sections */}
        <article className="rounded-3xl border border-[#76a7ad]/20 bg-[#042e33]/45 p-6 shadow-2xl backdrop-blur-xl sm:p-12">
          {/* Section 1 */}
          <section className="border-b border-[#76a7ad]/15 pb-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              When you use NexaHire, we collect information necessary to provide
              personalized career readiness tools, skill evaluations, and AI
              mock interview experiences.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/60 p-4">
                <h3 className="text-[15px] font-semibold text-[#76a7ad]">
                  A. Account &amp; Profile Information
                </h3>
                <p className="mt-1 text-sm text-[#d0dfe1]/80">
                  When you register, we collect your name, email address, password
                  credentials, phone number, university or institutional
                  affiliation, degree program, and anticipated graduation year.
                </p>
              </div>

              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/60 p-4">
                <h3 className="text-[15px] font-semibold text-[#76a7ad]">
                  B. Career, Resume &amp; Skill Data
                </h3>
                <p className="mt-1 text-sm text-[#d0dfe1]/80">
                  Resumes, work histories, project links, technical skills, and
                  target career roles you upload or submit to our CV analysis
                  engine and roadmap generator.
                </p>
              </div>

              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/60 p-4">
                <h3 className="text-[15px] font-semibold text-[#76a7ad]">
                  C. AI Mock Interview Audio, Video &amp; Transcripts
                </h3>
                <p className="mt-1 text-sm text-[#d0dfe1]/80">
                  During AI mock interview sessions, audio streams and responses
                  are converted to text transcripts to provide feedback on clarity,
                  technical depth, and readiness scores. You maintain full control
                  over stored practice recordings.
                </p>
              </div>

              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/60 p-4">
                <h3 className="text-[15px] font-semibold text-[#76a7ad]">
                  D. Technical &amp; Usage Telemetry
                </h3>
                <p className="mt-1 text-sm text-[#d0dfe1]/80">
                  Log information including browser type, IP address, device
                  identifiers, timestamps, and page interactions to maintain
                  stability, security, and performance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              2. How We Use Information
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              We process your data strictly to deliver and improve NexaHire&apos;s
              career readiness platform:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#d0dfe1]/85">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Readiness Scoring:</strong> To
                  analyze CV quality, identify technical skill gaps, and compute
                  your personalized 0–100 Readiness Score.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">AI Mock Interview Coaching:</strong> To
                  generate dynamic interview questions, evaluate verbal responses,
                  and return granular improvement rubrics.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Milestone Roadmaps:</strong> To
                  curate tailored learning milestones and projects aligned with
                  active Pakistani and global tech hiring trends.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Employer Discovery:</strong> With
                  your explicit permission, to match your readiness profile with
                  employers seeking verified graduate talent.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">System Protection &amp; Support:</strong> To
                  prevent fraudulent activity, troubleshoot technical errors, and
                  respond to user inquiries.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              3. AI Processing &amp; Model Privacy
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              NexaHire leverages enterprise-grade AI models for natural language
              processing and speech-to-text inference:
            </p>
            <div className="mt-4 rounded-xl border border-[#3b737a]/30 bg-[#144147]/30 p-5">
              <h3 className="text-sm font-semibold text-white">
                No Public Model Training on Student Submissions
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#d0dfe1]/85 sm:text-sm">
                Your private resumes, personal projects, and interview audio
                recordings are not used to train public third-party foundation
                models. All AI inference is conducted under isolated, encrypted
                enterprise service agreements adhering to confidentiality
                standards.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              4. Data Security &amp; Retention
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              We employ robust administrative, technical, and physical measures
              to safeguard your information:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/50 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Encryption in Transit &amp; at Rest
                </h3>
                <p className="mt-1.5 text-xs text-[#d0dfe1]/75">
                  All platform communications are encrypted via modern TLS 1.3
                  protocols. Stored resumes and database backups are protected
                  with AES-256 encryption.
                </p>
              </div>
              <div className="rounded-xl border border-[#76a7ad]/15 bg-[#061f24]/50 p-4">
                <h3 className="text-sm font-semibold text-white">
                  User-Controlled Retention
                </h3>
                <p className="mt-1.5 text-xs text-[#d0dfe1]/75">
                  You can purge your mock interview history, CV drafts, or entire
                  account at any time. Deleted data is permanently purged from
                  active servers within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              5. Information Sharing &amp; Disclosures
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              We do not sell, rent, or trade your personal information. We only
              share information in the following limited circumstances:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#d0dfe1]/85">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Prospective Employers:</strong> Only
                  when you explicitly apply for a job posting or choose to publish
                  your profile into the NexaHire talent network.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Essential Service Providers:</strong> Trusted
                  cloud hosting, database management, and authentication providers
                  bound by strict confidentiality obligations.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#76a7ad]" />
                <span>
                  <strong className="text-white">Legal Requirements:</strong> If
                  required by court order, law enforcement request, or applicable
                  statutes under Pakistani law.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-b border-[#76a7ad]/15 py-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              6. Your Rights &amp; Choices
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              Regardless of your location, we provide all students and users with
              comprehensive data rights:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-[#76a7ad]">✓</span>
                <span>
                  <strong className="text-white">Right of Access:</strong> Request a
                  copy of your stored personal and interview data.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-[#76a7ad]">✓</span>
                <span>
                  <strong className="text-white">Right of Rectification:</strong> Edit
                  or update your CV credentials and profile details.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-[#76a7ad]">✓</span>
                <span>
                  <strong className="text-white">Right to Erasure:</strong> Delete
                  your account and associated practice files at will.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-[#76a7ad]">✓</span>
                <span>
                  <strong className="text-white">Data Portability:</strong> Export
                  your generated CVs and roadmap checkpoints as PDFs.
                </span>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="pt-8">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              7. Cookies &amp; Local Storage
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#d0dfe1]/85">
              We use minimal cookies and browser local storage strictly for
              session authentication, active interview state recovery, and
              security verification. You can configure your browser to disable
              cookies, although some interactive features may experience reduced
              functionality.
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
