import { useState } from "react";

import { publicLinks, sectionLinks, type SectionId } from "../../content/site";
import { ThemeToggle } from "../ui/ThemeToggle";

type SiteHeaderProps = {
  activeSection: SectionId;
};

type NavLinkProps = {
  active: boolean;
  code: string;
  id: string;
  label: string;
};

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 7.5h16M4 12h16M4 16.5h10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function NavLink({ active, code, id, label }: NavLinkProps) {
  return (
    <a href={`#${id}`} className="header-nav-link" data-active={active}>
      <span className="header-nav-link__code">{code}</span>
      <span>{label}</span>
    </a>
  );
}

export function SiteHeader({ activeSection }: SiteHeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[color:var(--border-soft)] bg-[color:var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3 md:min-h-18 md:py-4">
          <a
            href="#top"
            className="font-label text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[color:var(--heading)] md:text-sm md:tracking-[0.24em]"
          >
            <span className="md:hidden">Dhruv</span>
            <span className="hidden md:inline">Dhruv Mehta</span>
          </a>

          <div className="hidden items-center gap-4 md:flex">
            <nav aria-label="Primary" className="flex items-center gap-3">
              {sectionLinks.map((link) => (
                <NavLink
                  key={link.id}
                  active={link.id === activeSection}
                  code={link.code}
                  id={link.id}
                  label={link.label}
                />
              ))}
            </nav>

            <a
              href={publicLinks.resume}
              target="_blank"
              rel="noreferrer"
              className="control-button control-button--primary h-10 px-4 text-[0.68rem]"
            >
              Download CV
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href={publicLinks.resume}
              target="_blank"
              rel="noreferrer"
              className="control-button control-button--primary h-10 px-2 text-[0.58rem]"
            >
              CV
            </a>
            <ThemeToggle compact />
            <button
              type="button"
              className="header-mobile-button"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-sections-panel"
              aria-label={isMobileNavOpen ? "Close sections" : "Open sections"}
              onClick={() => setIsMobileNavOpen((open) => !open)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      <div
        className="header-mobile-panel-shell md:hidden"
        data-open={isMobileNavOpen}
      >
        <nav
          id="mobile-sections-panel"
          aria-label="Mobile"
          className="header-mobile-panel mx-6 sm:mx-8"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="header-mobile-panel__link"
              data-active={link.id === activeSection}
              onClick={() => setIsMobileNavOpen(false)}
            >
              <span className="header-nav-link__code">{link.code}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
