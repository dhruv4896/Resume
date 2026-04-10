import type { NavItem } from "../../content/profile";

type SiteHeaderProps = {
  navItems: NavItem[];
  resumeUrl: string;
};

export function SiteHeader({ navItems, resumeUrl }: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-shell flex items-start justify-between gap-6 px-6 py-6 md:px-8 lg:px-10">
        <a
          className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-ivory transition-colors duration-300 hover:text-accent"
          href="#home"
        >
          Dhruv Mehta
        </a>
        <div className="flex items-center gap-6">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex"
          >
            {navItems.map((item) => (
              <a
                className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[color:rgba(222,225,247,0.58)] transition-colors duration-300 hover:text-ivory"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(0,218,243,0.92),rgba(112,216,200,0.88))] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent-ink transition-transform duration-300 hover:-translate-y-0.5"
            download
            href={resumeUrl}
          >
            View CV
          </a>
        </div>
      </div>
    </header>
  );
}
