import { SiteHeader } from "../components/layout/SiteHeader";
import { EducationContactSection } from "../components/sections/EducationContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SummarySection } from "../components/sections/SummarySection";
import { ToolkitSection } from "../components/sections/ToolkitSection";
import { roleFraming } from "../content/profile";
import { publicLinks } from "../content/site";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[color:var(--page-bg)] text-[color:var(--text-primary)] transition-colors duration-300 motion-reduce:transition-none">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[color:var(--primary-action-bg)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--primary-action-text)]"
        href="#summary"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main className="overflow-hidden">
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <ToolkitSection />
        <ProjectsSection />
        <EducationContactSection />
      </main>

      <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--footer-bg)]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 font-label text-[0.64rem] uppercase tracking-[0.18em] text-[color:var(--muted)] sm:px-8 lg:grid-cols-[1fr_auto_auto] lg:items-center lg:px-10">
          <p>Dhruv Mehta // Verified Resume Microsite</p>
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
