import { motion, useReducedMotion } from "framer-motion";

import { heroContent, type NavItem } from "../../content/profile";
import { ContinuityField } from "../../visuals/continuity-field";
import { GridOverlay } from "../../visuals/grid-overlay";
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
      className="relative isolate overflow-hidden bg-ink-950 text-ivory"
      id="home"
    >
      <GridOverlay className="opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(0,218,243,0.16),transparent_32%),radial-gradient(circle_at_72%_28%,rgba(112,216,200,0.18),transparent_24%),linear-gradient(180deg,rgba(9,14,28,0.16),rgba(9,14,28,0.72))]" />
      <SiteHeader navItems={navItems} resumeUrl={resumeUrl} />

      <div className="section-shell relative flex min-h-screen flex-col justify-center px-6 pb-18 pt-28 md:px-8 md:pb-20 lg:px-10 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] lg:items-end">
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <p className="section-kicker text-[color:rgba(222,225,247,0.55)]">
              {heroContent.eyebrow}
            </p>
            <p className="mt-12 font-sans text-sm uppercase tracking-[0.38em] text-[color:rgba(222,225,247,0.66)]">
              {heroContent.name}
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-[clamp(3.35rem,10vw,7rem)] leading-[0.92] tracking-[-0.06em] text-ivory">
              Business continuity
              <span className="block text-accent italic">with technical depth.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[color:rgba(222,225,247,0.76)] md:text-lg">
              {heroContent.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#00daf3,#70d8c8)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent-ink transition-transform duration-300 hover:-translate-y-0.5"
                download
                href={resumeUrl}
              >
                View CV
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white/6 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ivory ring-1 ring-white/10 backdrop-blur transition-colors duration-300 hover:bg-white/10"
                href={linkedinHref}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white/6 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ivory ring-1 ring-white/10 backdrop-blur transition-colors duration-300 hover:bg-white/10"
                href={emailHref}
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 lg:pb-4"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.96, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,218,243,0.1),transparent_65%)] blur-3xl" />
            <ContinuityField className="mx-auto max-w-[34rem]" />
            <div className="relative mt-6 grid gap-6 sm:grid-cols-2 lg:-mt-16">
              {heroContent.signalNotes.map((note, index) => (
                <div key={note.label}>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[color:rgba(222,225,247,0.42)]">
                    {note.label}
                  </p>
                  <p
                    className={`mt-3 max-w-[17rem] text-sm leading-7 text-[color:rgba(222,225,247,0.8)] ${
                      index === 1 ? "sm:ml-auto" : ""
                    }`}
                  >
                    {note.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <a
          className="mt-16 inline-flex w-fit items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[color:rgba(222,225,247,0.55)] transition-colors duration-300 hover:text-accent"
          href="#about"
        >
          <span className="h-px w-12 bg-[linear-gradient(90deg,rgba(0,218,243,0.9),transparent)]" />
          Scroll for profile
        </a>
      </div>
    </section>
  );
}
