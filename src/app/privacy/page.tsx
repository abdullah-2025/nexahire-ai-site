import type { Metadata } from 'next'
import LegalShell from '@/components/LegalShell'

export const metadata: Metadata = {
  title: 'Privacy Policy — NexaHire',
  description:
    'Learn how NexaHire collects, uses, and safeguards your personal, academic, and interview data on our AI-powered job and interview platform.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      badge="Trust & Transparency"
      icon="shield-check"
      title="Privacy Policy"
      intro={<>How NexaHire collects, protects, and handles your personal, academic, and AI interview data.</>}
    >

        {/* Commitment Highlight Box */}
        <div className="mb-10 rounded-2xl border border-line bg-gradient-to-r from-raised to-canvas p-6 shadow-card sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bronze-tint text-bronze">
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
              <h2 className="text-base font-semibold text-ink sm:text-lg">
                Our Student Privacy Commitment
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                NexaHire is created specifically for university students and
                fresh graduates. We never sell your personal data, CVs, or
                interview practice recordings to third-party advertisers. Your
                learning and practice materials remain your own.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Legal Sections */}
        <article className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-12">
          {/* Section 1 */}
          <section className="border-b border-line pb-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              When you use NexaHire, we collect information necessary to provide
              personalized career tools, skill evaluations, and AI
              mock interview experiences.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-line bg-canvas p-4">
                <h3 className="text-[15px] font-semibold text-ink">
                  A. Account &amp; Profile Information
                </h3>
                <p className="mt-1 text-sm text-muted">
                  When you register, we collect your name, email address, password
                  credentials, phone number, university or institutional
                  affiliation, degree program, and anticipated graduation year.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-canvas p-4">
                <h3 className="text-[15px] font-semibold text-ink">
                  B. Career, Resume &amp; Skill Data
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Resumes, work histories, project links, technical skills, and
                  target career roles you upload or submit to our CV analysis
                  engine and roadmap generator.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-canvas p-4">
                <h3 className="text-[15px] font-semibold text-ink">
                  C. AI Mock Interview Audio, Video &amp; Transcripts
                </h3>
                <p className="mt-1 text-sm text-muted">
                  During AI mock interview sessions, audio streams and responses
                  are converted to text transcripts to provide feedback on clarity,
                  technical depth, and interview scores. You maintain full control
                  over stored practice recordings.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-canvas p-4">
                <h3 className="text-[15px] font-semibold text-ink">
                  D. Technical &amp; Usage Telemetry
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Log information including browser type, IP address, device
                  identifiers, timestamps, and page interactions to maintain
                  stability, security, and performance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              2. How We Use Information
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              We process your data strictly to deliver and improve NexaHire&apos;s
              job and interview platform:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">CV &amp; Interview Scoring:</strong> To
                  analyze CV quality, identify technical skill gaps, and score
                  your AI mock interviews.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">AI Mock Interview Coaching:</strong> To
                  generate dynamic interview questions, evaluate verbal responses,
                  and return granular improvement rubrics.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Milestone Roadmaps:</strong> To
                  curate tailored learning milestones and projects aligned with
                  active Pakistani and global tech hiring trends.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Employer Discovery:</strong> With
                  your explicit permission, to match your profile with
                  employers seeking verified graduate talent.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">System Protection &amp; Support:</strong> To
                  prevent fraudulent activity, troubleshoot technical errors, and
                  respond to user inquiries.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              3. AI Processing &amp; Model Privacy
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              NexaHire leverages enterprise-grade AI models for natural language
              processing and speech-to-text inference:
            </p>
            <div className="mt-4 rounded-xl border border-line bg-taupe-tint p-5">
              <h3 className="text-sm font-semibold text-ink">
                No Public Model Training on Student Submissions
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                Your private resumes, personal projects, and interview audio
                recordings are not used to train public third-party foundation
                models. All AI inference is conducted under isolated, encrypted
                enterprise service agreements adhering to confidentiality
                standards.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              4. Data Security &amp; Retention
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              We employ robust administrative, technical, and physical measures
              to safeguard your information:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-canvas p-4">
                <h3 className="text-sm font-semibold text-ink">
                  Encryption in Transit &amp; at Rest
                </h3>
                <p className="mt-1.5 text-xs text-muted">
                  All platform communications are encrypted via modern TLS 1.3
                  protocols. Stored resumes and database backups are protected
                  with AES-256 encryption.
                </p>
              </div>
              <div className="rounded-xl border border-line bg-canvas p-4">
                <h3 className="text-sm font-semibold text-ink">
                  User-Controlled Retention
                </h3>
                <p className="mt-1.5 text-xs text-muted">
                  You can purge your mock interview history, CV drafts, or entire
                  account at any time. Deleted data is permanently purged from
                  active servers within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              5. Information Sharing &amp; Disclosures
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              We do not sell, rent, or trade your personal information. We only
              share information in the following limited circumstances:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Prospective Employers:</strong> Only
                  when you explicitly apply for a job posting or choose to publish
                  your profile into the NexaHire talent network.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Essential Service Providers:</strong> Trusted
                  cloud hosting, database management, and authentication providers
                  bound by strict confidentiality obligations.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Legal Requirements:</strong> If
                  required by court order, law enforcement request, or applicable
                  statutes under Pakistani law.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              6. Your Rights &amp; Choices
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Regardless of your location, we provide all students and users with
              comprehensive data rights:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-bronze">✓</span>
                <span>
                  <strong className="text-ink">Right of Access:</strong> Request a
                  copy of your stored personal and interview data.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-bronze">✓</span>
                <span>
                  <strong className="text-ink">Right of Rectification:</strong> Edit
                  or update your CV credentials and profile details.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-bronze">✓</span>
                <span>
                  <strong className="text-ink">Right to Erasure:</strong> Delete
                  your account and associated practice files at will.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-bronze">✓</span>
                <span>
                  <strong className="text-ink">Data Portability:</strong> Export
                  your generated CVs and roadmap checkpoints as PDFs.
                </span>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="pt-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              7. Cookies &amp; Local Storage
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              We use minimal cookies and browser local storage strictly for
              session authentication, active interview state recovery, and
              security verification. You can configure your browser to disable
              cookies, although some interactive features may experience reduced
              functionality.
            </p>
          </section>
        </article>
    </LegalShell>
  )
}
