import { publicLinks, sectionLinks } from "../../content/site";
import { ThemeToggle } from "../ui/ThemeToggle";

function NavLink({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--accent-strong)] motion-reduce:transition-none"
    >
      {label}
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border-soft)] bg-[color:var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex min-h-18 items-center justify-between gap-4 py-4">
          <a
            href="#top"
            className="font-label text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--heading)]"
          >
            Dhruv Mehta
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav aria-label="Primary" className="flex items-center gap-8">
              {sectionLinks.map((link) => (
                <NavLink key={link.id} id={link.id} label={link.label} />
              ))}
            </nav>

            <a
              href={publicLinks.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center border border-[color:var(--accent-strong)] bg-[color:var(--primary-action-bg)] px-4 font-label text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--primary-action-text)] transition-colors duration-200 hover:bg-[color:var(--accent-bright)] motion-reduce:transition-none"
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
              className="inline-flex h-10 items-center border border-[color:var(--accent-strong)] bg-[color:var(--primary-action-bg)] px-3 font-label text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[color:var(--primary-action-text)]"
            >
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>

        <nav
          aria-label="Mobile"
          className="no-scrollbar flex gap-4 overflow-x-auto pb-4 md:hidden"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="shrink-0 font-label text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--accent-strong)] motion-reduce:transition-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
