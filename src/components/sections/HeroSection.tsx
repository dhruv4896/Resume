import { resumeIntro, roleFraming } from "../../content/profile";
import { publicLinks } from "../../content/site";

const heroFacts = [
  "FAB // 2021-Present",
  "Georgia Tech // M.S. ML",
  "Banking // Healthcare",
  "Projects // 50% + 85%",
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

function HeroPanel() {
  return (
    <div className="relative w-full max-w-sm border border-[color:var(--border-soft)] bg-[color:var(--hero-block-bg)] p-4">
      <div className="technical-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[color:var(--accent-strong)]" />
      <div className="absolute bottom-4 right-4 h-14 w-14 border border-[color:var(--hero-block-line)] bg-[linear-gradient(135deg,var(--accent-soft),transparent)]" />

      <div className="relative z-10 flex min-h-72 flex-col justify-between">
        <div className="space-y-3">
          <p className="font-label text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[color:var(--hero-meta)]">
            Field Technical
          </p>
          <div className="technical-divider" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {heroFacts.map((fact) => (
            <div
              key={fact}
              className="border border-[color:var(--hero-block-line)] px-3 py-4"
            >
              <p className="font-label text-[0.64rem] font-medium uppercase tracking-[0.16em] text-[color:var(--hero-meta)]">
                {fact}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <div className="technical-divider" />
          <p className="mt-4 font-label text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[color:var(--hero-meta)]">
            Verified resume content // no filler // no invented metrics
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const eyebrow = roleFraming.replaceAll(" / ", " // ");

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[color:var(--page-bg)]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--hero-grad-start),var(--hero-grad-end))]" />
        <div className="technical-grid absolute inset-0 opacity-80" />
        <div className="absolute left-[-6rem] top-24 h-56 w-56 bg-[color:var(--ornament-primary)] blur-3xl" />
        <div className="absolute right-[4%] top-[18%] h-72 w-72 bg-[color:var(--ornament-secondary)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.04))] opacity-60" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl items-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-plate mb-8">{eyebrow}</p>

            <h1 className="font-display text-[clamp(4rem,10vw,7.5rem)] font-bold leading-[0.86] tracking-[-0.05em] text-[color:var(--heading)]">
              Dhruv
              <br />
              Mehta
            </h1>

            <p className="mt-6 max-w-3xl font-label text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--accent-strong)] sm:text-base">
              Business continuity // information security // business analysis
              // machine learning
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--text-primary)] sm:text-xl sm:leading-9">
              {resumeIntro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={publicLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[color:var(--accent-strong)] bg-[color:var(--primary-action-bg)] px-6 py-3.5 font-label text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[color:var(--primary-action-text)] transition-colors duration-200 hover:bg-[color:var(--accent-bright)] motion-reduce:transition-none"
              >
                View CV
                <ArrowIcon />
              </a>
              <a
                href={publicLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-[color:var(--border-strong)] bg-[color:var(--surface-elevated)] px-6 py-3.5 font-label text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[color:var(--heading)] transition-colors duration-200 hover:bg-[color:var(--surface-hover)] motion-reduce:transition-none"
              >
                LinkedIn
              </a>
              <a
                href={publicLinks.email}
                className="inline-flex items-center border border-[color:var(--border-strong)] px-6 py-3.5 font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--heading)] transition-colors duration-200 hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)] motion-reduce:transition-none"
              >
                Email
              </a>
              <a
                href={publicLinks.phone}
                className="inline-flex items-center border border-[color:var(--border-strong)] px-6 py-3.5 font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--heading)] transition-colors duration-200 hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)] motion-reduce:transition-none"
              >
                Phone
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <HeroPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
