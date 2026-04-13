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

function NavLink({ active, code, id, label }: NavLinkProps) {
  return (
    <a href={`#${id}`} className="header-nav-link" data-active={active}>
      <span className="header-nav-link__code">{code}</span>
      <span>{label}</span>
    </a>
  );
}

export function SiteHeader({ activeSection }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border-soft)] bg-[color:var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex min-h-18 items-center justify-between gap-4 py-4">
          <a
            href="#top"
            className="font-label text-sm font-bold uppercase tracking-[0.24em] text-[color:var(--heading)]"
          >
            Dhruv Mehta
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

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={publicLinks.resume}
              target="_blank"
              rel="noreferrer"
              className="control-button control-button--primary h-10 px-3 text-[0.64rem]"
            >
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>

        <nav
          aria-label="Mobile"
          className="no-scrollbar flex gap-3 overflow-x-auto pb-4 md:hidden"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="header-nav-link shrink-0"
              data-active={link.id === activeSection}
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
