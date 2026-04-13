import { projects, resumeIntro, roleFraming } from "../../content/profile";
import { publicLinks } from "../../content/site";

const focusAreas = [
  "Business Continuity",
  "Information Security",
  "Business Analysis",
  "Machine Learning",
];

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

function HeroSignalBoard() {
  return (
    <div className="hardware-panel relative w-full max-w-md p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="font-label text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[color:var(--section-eyebrow)]">
          Core Focus
        </p>
        <span className="status-led" data-active />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {focusAreas.map((item) => (
          <div key={item} className="module-segment">
            <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[color:var(--heading)]">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="metric-module"
            tabIndex={0}
            aria-label={`${project.title}: ${project.metric} ${project.metricLabel}`}
          >
            <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[color:var(--section-eyebrow)]">
              {project.title}
            </p>
            <p className="mono-data mt-4 text-5xl font-bold tracking-[-0.05em] text-[color:var(--accent-strong)]">
              {project.metric}
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--text-primary)]">
              {project.metricLabel}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--page-bg)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--hero-grad-start),var(--hero-grad-end))]" />
        <div className="technical-grid absolute inset-0 opacity-80" />
        <div className="absolute left-[-5rem] top-20 h-56 w-56 bg-[color:var(--ornament-primary)] blur-3xl" />
        <div className="absolute right-[10%] top-[16%] h-48 w-48 bg-[color:var(--ornament-secondary)] blur-3xl" />
        <div className="absolute bottom-[12%] right-[18%] h-24 w-24 bg-[color:var(--ornament-tertiary)] blur-2xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl items-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-plate mb-8">01 // Overview</p>

            <h1 className="font-display text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.84] tracking-[-0.06em] text-[color:var(--heading)]">
              Dhruv
              <br />
              Mehta
            </h1>

            <p className="mt-6 max-w-3xl font-label text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--accent-strong)] sm:text-base">
              {roleFraming.replaceAll(" / ", " // ")}
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--text-primary)] sm:text-xl sm:leading-9">
              {resumeIntro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={publicLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="control-button control-button--primary"
              >
                View CV
                <ArrowIcon />
              </a>
              <a
                href={publicLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="control-button control-button--ghost"
              >
                LinkedIn
              </a>
              <a href={publicLinks.email} className="control-button control-button--ghost">
                Email
              </a>
              <a href={publicLinks.phone} className="control-button control-button--ghost">
                Phone
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <HeroSignalBoard />
          </div>
        </div>
      </div>
    </section>
  );
}
