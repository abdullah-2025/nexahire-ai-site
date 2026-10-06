import ScrubHeading from "../ScrubHeading";
import type { CSSProperties } from "react";
import SiteIcon from "../SiteIcon";
import { authLinks } from "@/data/auth-links";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <div className="badge reveal">
            <SiteIcon
              className="w-3.5 h-3.5 text-[color:var(--violet)]"
              name="credit-card"
            />{" "}
            Pricing
          </div>
          <ScrubHeading className="h-section mt-5">
            Start free. <span className="serif">Scale when ready.</span>
          </ScrubHeading>
          <p className="reveal mt-5 text-[16px] leading-relaxed text-[color:var(--muted)]">
            Get core features at no cost. Upgrade to Pro for unlimited AI
            analysis, interviews, and premium job access.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="reveal">
            <div
              className="plan spot"
              style={
                {
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  color: "var(--ink)",
                  "--spot": "rgba(129,140,248,.18)",
                  boxShadow: "0 24px 50px -34px rgba(49,56,100,.15)",
                } as CSSProperties
              }
            >
              <div className="text-[13px] font-semibold text-[color:var(--muted)]">
                Starter
              </div>
              <div className="mt-2 text-[56px] font-semibold leading-none tracking-tight text-[color:var(--ink)]">
                Free
              </div>
              <p className="mb-7 mt-2 text-[13.5px] text-[color:var(--muted)]">
                Perfect for getting started
              </p>
              <ul className="mb-8 flex-1">
                <li>
                  <SiteIcon className="h-4 w-4 text-emerald-700" name="check" />
                  1 CV template + PDF export
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-emerald-700" name="check" />
                  3 AI CV analyses / month
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-emerald-700" name="check" />
                  Basic career roadmap
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-emerald-700" name="check" />
                  2 mock interview sessions
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-emerald-700" name="check" />
                  Job search &amp; bookmarks
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-emerald-700" name="check" />
                  Readiness score dashboard
                </li>
              </ul>
              <a
                href={authLinks.signup}
                className="btn-ghost justify-center text-center"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="reveal" style={{ "--d": ".12s" } as CSSProperties}>
            <div
              className="plan spot"
              style={
                {
                  background:
                    "linear-gradient(150deg,#ffffff,#f6f5ff 60%,#eeecff)",
                  color: "var(--ink)",
                  border: "1px solid rgba(129,140,248,.4)",
                  boxShadow:
                    "0 40px 80px -36px rgba(99,102,241,.5), 0 0 30px -10px rgba(129,140,248,.25)",
                  "--spot": "rgba(165,180,252,.25)",
                } as CSSProperties
              }
            >
              <span className="pop">MOST POPULAR</span>
              <div className="text-[13px] font-semibold text-indigo-700">
                Pro
              </div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-[56px] font-semibold leading-none tracking-tight text-[color:var(--ink)]">
                  ₨1,499
                </span>
                <span className="mb-1.5 text-[14px] text-indigo-700">
                  /month
                </span>
              </div>
              <p className="mb-7 mt-2 text-[13.5px] text-indigo-700">
                For serious career preparation
              </p>
              <ul className="mb-8 flex-1">
                <li>
                  <SiteIcon className="h-4 w-4 text-sky-700" name="check" />
                  All CV templates + custom branding
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-sky-700" name="check" />
                  Unlimited AI CV analyses
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-sky-700" name="check" />
                  Full career roadmaps with tracking
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-sky-700" name="check" />
                  Unlimited mock interviews + feedback
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-sky-700" name="check" />
                  Premium job listings + alerts
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-sky-700" name="check" />
                  Live interview scheduling
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-sky-700" name="check" />
                  Priority recruiter visibility
                </li>
              </ul>
              <a
                href="#"
                className="btn justify-between"
                style={
                  {
                    background: "var(--button)",
                    color: "#fff",
                    border: "none",
                  } as CSSProperties
                }
              >
                Upgrade to Pro{" "}
                <span
                  className="arr"
                  style={
                    {
                      background: "rgba(255,255,255,.18)",
                      color: "#fff",
                    } as CSSProperties
                  }
                >
                  <SiteIcon className="h-4 w-4" name="arrow-up-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
