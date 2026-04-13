import { resumeIntro, roleFraming } from "../../content/profile";
import { publicLinks } from "../../content/site";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function HeroSection() {
  const eyebrow = roleFraming.replaceAll(" / ", " | ");

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--page-bg)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--hero-grad-start),var(--hero-grad-end))]" />
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[color:var(--ornament-primary)] blur-3xl" />
        <div className="absolute right-[5%] top-[22%] h-80 w-80 rounded-full bg-[color:var(--ornament-secondary)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.04))] opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-35" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-8 inline-flex rounded-full border border-[color:var(--badge-border)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--badge-text)]">
            {eyebrow}
          </p>

          <h1 className="font-display text-[clamp(3.5rem,9vw,7rem)] italic leading-[0.92] tracking-[-0.04em] text-[color:var(--heading)]">
            Dhruv Mehta
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--text-primary)] sm:text-xl sm:leading-9 lg:text-[1.75rem] lg:leading-[1.6]">
            {resumeIntro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={publicLinks.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary-action-bg)] px-6 py-3.5 text-sm font-semibold text-[color:var(--primary-action-text)] shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              View CV
              <ArrowIcon />
            </a>
            <a
              href={publicLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] px-6 py-3.5 text-sm font-semibold text-[color:var(--heading)] transition-colors duration-200 hover:bg-[color:var(--surface-hover)] motion-reduce:transition-none"
            >
              LinkedIn
            </a>
            <a
              href={publicLinks.email}
              className="inline-flex items-center rounded-full px-2 py-3.5 text-sm font-medium text-[color:var(--heading)] transition-colors duration-200 hover:text-[color:var(--accent-strong)] motion-reduce:transition-none"
            >
              Email
            </a>
            <a
              href={publicLinks.phone}
              className="inline-flex items-center rounded-full px-2 py-3.5 text-sm font-medium text-[color:var(--heading)] transition-colors duration-200 hover:text-[color:var(--accent-strong)] motion-reduce:transition-none"
            >
              Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
