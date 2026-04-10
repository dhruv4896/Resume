import { motion, useReducedMotion } from "framer-motion";

import { heroContent, type NavItem } from "../../content/profile";
import { ContinuityField } from "../../visuals/continuity-field";
import { SiteHeader } from "../ui/SiteHeader";

type HeroSectionProps = {
  emailHref: string;
  linkedinHref: string;
  navItems: NavItem[];
  resumeUrl: string;
};

export function HeroSection({
  emailHref,
  linkedinHref,
  navItems,
  resumeUrl,
}: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fffdf9_0%,#f7f0e7_58%,#faf7f2_100%)] text-stone-900"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(190,199,183,0.36),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(209,180,151,0.24),transparent_22%),radial-gradient(circle_at_54%_72%,rgba(238,230,220,0.86),transparent_30%)]" />
      <SiteHeader navItems={navItems} resumeUrl={resumeUrl} />

      <div className="section-shell relative flex min-h-[clamp(860px,calc(100svh-5rem),1080px)] flex-col justify-center px-6 pb-18 pt-30 md:px-8 md:pb-20 lg:px-10 lg:pb-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.92fr)] lg:items-center">
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <p className="section-kicker text-stone-500">
              {heroContent.eyebrow}
            </p>
            <p className="mt-12 font-sans text-sm uppercase tracking-[0.34em] text-stone-500">
              {heroContent.name}
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.6rem,9vw,7.05rem)] leading-[0.94] tracking-[-0.06em] text-stone-900">
              Business continuity
              <span className="block italic text-[color:var(--accent-warm)]">
                with technical depth.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-[1.08rem] leading-8 text-stone-600 md:text-[1.16rem]">
              {heroContent.intro}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ivory transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
                download
                href={resumeUrl}
              >
                View CV
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[color:rgba(94,79,66,0.18)] bg-[rgba(255,253,249,0.76)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-900 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
                href={linkedinHref}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[color:rgba(94,79,66,0.18)] bg-[rgba(255,253,249,0.76)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-900 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
                href={emailHref}
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 lg:pb-4"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.96,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,180,151,0.16),transparent_60%)] blur-3xl" />
            <div className="overflow-hidden rounded-[2.4rem] border border-[color:rgba(94,79,66,0.08)] bg-[linear-gradient(180deg,rgba(255,253,249,0.9),rgba(245,239,231,0.92))] p-5 shadow-[0_28px_80px_rgba(49,39,31,0.08)]">
              <ContinuityField className="mx-auto max-w-[34rem]" />
            </div>
            <div className="relative mt-6 grid gap-6 sm:grid-cols-2">
              {heroContent.signalNotes.map((note, index) => (
                <div
                  className={`rounded-[1.4rem] bg-[rgba(255,253,249,0.76)] px-5 py-5 shadow-[0_18px_42px_rgba(49,39,31,0.06)] ring-1 ring-[rgba(94,79,66,0.06)] ${
                    index === 1 ? "sm:translate-y-6" : ""
                  }`}
                  key={note.label}
                >
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-stone-500">
                    {note.label}
                  </p>
                  <p className="mt-3 max-w-[17rem] text-sm leading-7 text-stone-600">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <a
          className="mt-16 inline-flex w-fit items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-stone-500 transition-colors duration-300 hover:text-[color:var(--primary)]"
          href="#about"
        >
          <span className="h-px w-12 bg-[linear-gradient(90deg,rgba(154,123,90,0.85),transparent)]" />
          Scroll for profile
        </a>
      </div>
    </section>
  );
}
