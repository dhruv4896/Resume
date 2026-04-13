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

      <main>
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <ToolkitSection />
        <ProjectsSection />
        <EducationContactSection />
      </main>

      <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--page-bg)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>(c) Dhruv Mehta</p>
          <p>{roleFraming}</p>
          <div className="flex flex-wrap gap-4">
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
