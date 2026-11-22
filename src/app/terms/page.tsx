import type { Metadata } from 'next'
import LegalShell from '@/components/LegalShell'

export const metadata: Metadata = {
  title: 'Terms of Service — NexaHire',
  description:
    'Review the terms and conditions governing the use of NexaHire’s AI-powered job and interview platform.',
}

export default function TermsOfServicePage() {
  return (
    <LegalShell
      badge="Agreement & Guidelines"
      icon="file-text"
      title="Terms of Service"
      intro={<>Please read these terms carefully before accessing or using the NexaHire AI-powered job and interview platform.</>}
    >

        {/* Highlight Note */}
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
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-ink sm:text-lg">
                Quick Summary for Candidates
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                NexaHire is an educational preparation platform designed to help
                you assess your skills, practice interviews, and discover career
                opportunities. While our AI offers guidance and scoring rubrics,
                it does not guarantee job placement or employment outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Legal Sections */}
        <article className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-12">
          {/* Section 1 */}
          <section className="border-b border-line pb-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              By accessing, browsing, registering for, or using NexaHire
              (including our website, AI mock interview modules, CV scoring
              tools, and roadmaps), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;) and our Privacy Policy. If you do not
              agree to these Terms, you may not access or use our services.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              To use NexaHire, you must be at least 16 years of age or enrolled
              in an accredited high school, university, or higher education
              institution.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              2. Description of Services
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              NexaHire provides an integrated job and interview preparation platform tailored
              for university students and fresh graduates, comprising:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">AI-Powered CV Analysis:</strong> Formatting
                  audits, keyword matching, and skill-gap identification against
                  industry job descriptions.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Interview Reports:</strong> An
                  overall score, competency ratings and feedback generated after
                  each AI mock interview.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Role-Specific Roadmaps:</strong> Step-by-step
                  milestone pathways recommended to close identified skill gaps.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">AI Mock Interviews:</strong> Interactive
                  simulations with audio/text feedback evaluating answer
                  structure and delivery.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>
                  <strong className="text-ink">Talent Network &amp; Job Discovery:</strong> Opportunities
                  to discover graduate openings and connect directly with hiring
                  managers.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              3. User Responsibilities &amp; Conduct
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              In using NexaHire, you commit to maintaining honesty and integrity
              in all submissions. You agree that you will not:
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <div className="rounded-xl border border-line bg-canvas p-3.5">
                <strong className="text-ink">Honest Credentials:</strong> Submit
                fabricated academic qualifications, counterfeit degrees, or
                misrepresented work experience.
              </div>
              <div className="rounded-xl border border-line bg-canvas p-3.5">
                <strong className="text-ink">Anti-Scraping &amp; Reverse Engineering:</strong> Decompile,
                reverse-engineer, scrape, or extract questions, model weights, or
                scoring heuristics from NexaHire.
              </div>
              <div className="rounded-xl border border-line bg-canvas p-3.5">
                <strong className="text-ink">Account Security:</strong> Share
                account credentials or permit unauthorized third parties to
                participate in mock interviews on your behalf.
              </div>
              <div className="rounded-xl border border-line bg-canvas p-3.5">
                <strong className="text-ink">Prohibited Content:</strong> Upload
                malicious payloads, abusive audio submissions, or content that
                infringes on any third party&apos;s intellectual property.
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              4. AI Evaluations &amp; Employment Disclaimers
            </h2>
            <div className="mt-4 rounded-xl border border-line bg-taupe-tint p-5">
              <h3 className="text-sm font-semibold text-ink">
                Educational Guidance, Not Employment Guarantees
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                All AI scoring, feedback, interview reports, and roadmap
                recommendations generated by NexaHire are provided strictly for
                educational and self-improvement purposes. NexaHire does not
                guarantee that following our recommendations will result in
                interviews, job offers, or employment placement. Hiring decisions
                rest solely with prospective employers.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              5. Intellectual Property
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              <strong className="text-ink">NexaHire Property:</strong> All
              interfaces, designs, visual assets, software code, proprietary
              question banks, and branding remain the exclusive intellectual
              property of NexaHire and its licensors.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              <strong className="text-ink">Your Content:</strong> You retain
              complete ownership of resumes, portfolio items, and answers you
              submit. You grant NexaHire a limited, non-exclusive license solely
              to process, transcribe, and analyze your content to deliver the
              services to you.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              6. Limitation of Liability
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              To the fullest extent permitted by applicable law, NexaHire and its
              developers, affiliates, and academic partners shall not be liable
              for any indirect, incidental, consequential, special, or punitive
              damages, including loss of profits, data, employment opportunities,
              or goodwill, arising from or related to your use of or inability to
              use the platform.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              The platform is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis without warranties of any kind, whether
              express or implied.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-b border-line py-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              7. Termination &amp; Suspension
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              You may terminate your account at any time via your user profile
              settings. NexaHire reserves the right to suspend or terminate
              accounts immediately without notice in cases of term violations,
              suspected fraud, abuse of AI features, or security compromise.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-8">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              8. Governing Law &amp; Jurisdiction
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              These Terms shall be governed by and construed in accordance with
              the laws of Pakistan. Any dispute arising out of or related to these
              Terms shall be subject to the exclusive jurisdiction of the
              competent courts located in Islamabad, Pakistan.
            </p>
          </section>
        </article>
    </LegalShell>
  )
}
