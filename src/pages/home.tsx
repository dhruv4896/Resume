import { HeroSection } from "../components/hero/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { CapabilitiesSection } from "../components/sections/CapabilitiesSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SummarySection } from "../components/sections/SummarySection";
import { contact, navItems } from "../content/profile";

export function HomePage() {
  const resumeUrl = `${import.meta.env.BASE_URL}cv/dhruv-mehta-cv.pdf`;
  const emailHref = `mailto:${contact.email}`;

  return (
    <div className="page-shell min-h-screen bg-canvas text-stone-900">
      <HeroSection
        emailHref={emailHref}
        linkedinHref={contact.linkedin}
        navItems={navItems}
        resumeUrl={resumeUrl}
      />
      <main>
        <AboutSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <SummarySection
          emailHref={emailHref}
          linkedinHref={contact.linkedin}
          resumeUrl={resumeUrl}
        />
      </main>
      <footer className="border-t border-[color:var(--outline)] bg-[rgba(255,253,249,0.92)] px-6 py-8 text-center text-[0.68rem] uppercase tracking-[0.26em] text-stone-500">
        Dhruv Mehta / business continuity / information security / analytical
        rigor
      </footer>
    </div>
  );
}
