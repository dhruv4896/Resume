import type { CSSProperties } from "react";

import { useActiveSection } from "../app/useActiveSection";
import { usePageScene } from "../app/usePageScene";
import { SectionRail } from "../components/layout/SectionRail";
import { SiteHeader } from "../components/layout/SiteHeader";
import { EducationContactSection } from "../components/sections/EducationContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SummarySection } from "../components/sections/SummarySection";
import { ToolkitSection } from "../components/sections/ToolkitSection";
import { UtilityTickerBand } from "../components/ui/UtilityTickerBand";
import { experienceItems, projects, roleFraming } from "../content/profile";
import { publicLinks } from "../content/site";

export function HomePage() {
  const activeSection = useActiveSection();
  const { scene, scrollProgress } = usePageScene(activeSection);
  const pageTickerItems = [
    ...experienceItems.map((item) => item.company),
    ...projects.map((project) => `${project.metric} ${project.metricLabel}`),
    "Georgia Tech",
    "SQL",
    "NLP",
    "UAT",
  ];
  const footerTickerItems = [...pageTickerItems].reverse();
  const sceneStyle = {
    "--page-scroll-progress": String(scrollProgress),
  } as CSSProperties;

  return (
    <div
      className="page-shell min-h-screen bg-[color:var(--page-bg)] text-[color:var(--text-primary)] transition-colors duration-300 motion-reduce:transition-none"
      data-scene={scene}
      style={sceneStyle}
    >
      <div className="page-shell__background" aria-hidden="true">
        <div className="page-shell__grid-layer page-shell__grid-layer--base technical-grid" />
        <div className="page-shell__grid-layer page-shell__grid-layer--drift technical-grid" />
        <div className="page-shell__grid-layer page-shell__grid-layer--parallax technical-grid" />
        <div className="page-shell__beam page-shell__beam--hero" />
        <div className="page-shell__beam page-shell__beam--mid" />
        <div className="page-shell__beam page-shell__beam--crescendo" />
        <div className="page-shell__scan-band" />
        <div className="page-shell__rail-band page-shell__rail-band--top" />
        <div className="page-shell__rail-band page-shell__rail-band--mid" />
        <div className="page-shell__rail-band page-shell__rail-band--bottom" />
        <div className="page-shell__rail-band page-shell__rail-band--far" />
        <div className="page-shell__utility-field" />
        <div className="page-shell__pulse page-shell__pulse--orange" />
        <div className="page-shell__pulse page-shell__pulse--teal" />
        <div className="page-shell__pulse page-shell__pulse--yellow" />
        <div className="page-shell__pulse page-shell__pulse--red" />
      </div>

      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[color:var(--primary-action-bg)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--primary-action-text)]"
        href="#summary"
      >
        Skip to content
      </a>

      <SiteHeader activeSection={activeSection} />
      <SectionRail activeSection={activeSection} />

      <main className="overflow-hidden">
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <ToolkitSection />
        <div className="border-y border-[color:var(--border-soft)] bg-[color:var(--section-soft)] py-3">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <UtilityTickerBand items={pageTickerItems} tone="teal" />
          </div>
        </div>
        <ProjectsSection />
        <div className="border-y border-[color:var(--border-soft)] bg-[color:var(--section-strong)] py-3">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <UtilityTickerBand items={footerTickerItems} tone="mixed" />
          </div>
        </div>
        <EducationContactSection />
      </main>

      <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--footer-bg)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 font-label text-[0.64rem] uppercase tracking-[0.18em] text-[color:var(--muted)] sm:px-8 lg:grid-cols-[1fr_auto_auto] lg:items-center lg:px-10">
          <p>Dhruv Mehta</p>
          <p>{roleFraming.replaceAll(" / ", " // ")}</p>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a href={publicLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={publicLinks.email}>Email</a>
            <a href={publicLinks.phone}>Phone</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
