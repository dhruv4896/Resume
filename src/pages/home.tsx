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
    <div className="page-shell min-h-screen bg-ink-950 text-ivory">
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
      <footer className="bg-slate-950 px-6 py-6 text-center text-[0.68rem] uppercase tracking-[0.28em] text-[color:rgba(222,225,247,0.45)]">
        Dhruv Mehta • business continuity, information security, and analytical rigor
      </footer>
    </div>
  );
}
