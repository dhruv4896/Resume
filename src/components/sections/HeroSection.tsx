import { projects, resumeIntro, roleFraming } from "../../content/profile";
import { publicLinks } from "../../content/site";
import { PlayfulSignalVisual } from "./PlayfulSignalVisual";

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

export function HeroSection() {
  return (
    <section
      id="top"
      className="hero-shell relative isolate overflow-hidden bg-[color:var(--page-bg)]"
    >
      <div className="hero-shell__backdrop" aria-hidden="true">
        <div className="hero-shell__glow hero-shell__glow--orange" />
        <div className="hero-shell__glow hero-shell__glow--teal" />
      </div>

      <div className="mx-auto flex min-h-[clamp(42rem,78svh,52rem)] max-w-7xl items-center px-6 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid w-full gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] xl:items-center">
          <div className="hero-copy">
            <p className="section-plate mb-8">01 // Overview</p>

            <h1 className="font-display text-[clamp(4.4rem,9vw,8.8rem)] font-bold uppercase leading-[0.84] tracking-[-0.08em] text-[color:var(--heading)]">
              Dhruv
              <br />
              Mehta
            </h1>

            <p className="hero-copy__role">
              {roleFraming.replaceAll(" / ", " // ")}
            </p>

            <div className="hero-copy__summary hardware-panel surface-tone--bone">
              <p>{resumeIntro}</p>
            </div>

            <div className="hero-copy__actions">
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

          <PlayfulSignalVisual focusAreas={focusAreas} projects={projects} />
        </div>
      </div>
    </section>
  );
}
