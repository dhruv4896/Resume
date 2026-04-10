import type { NavItem } from "../../content/profile";

type SiteHeaderProps = {
  navItems: NavItem[];
  resumeUrl: string;
};

export function SiteHeader({ navItems, resumeUrl }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[color:rgba(94,79,66,0.08)] bg-[rgba(255,253,249,0.82)] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-6 px-6 py-5 md:px-8 lg:px-10">
        <a
          className="font-serif text-[1.05rem] font-semibold tracking-[0.02em] text-stone-900 transition-colors duration-300 hover:text-[color:var(--accent-warm)]"
          href="#home"
        >
          Dhruv Mehta
        </a>
        <div className="flex items-center gap-6">
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-stone-500 transition-colors duration-300 hover:text-stone-900"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-transform duration-300 hover:-translate-y-0.5 hover:bg-stone-800 sm:px-4 sm:text-[0.68rem] sm:tracking-[0.24em]"
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
