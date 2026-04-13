import { sectionLinks } from "../../content/site";
import { ThemeToggle } from "../ui/ThemeToggle";

function NavLink({ id, label }: { id: string; label: string }) {
  const isContact = id === "contact";

  if (isContact) {
    return (
      <a
        href={`#${id}`}
        className="inline-flex items-center rounded-full bg-[color:var(--primary-action-bg)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-action-text)] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={`#${id}`}
      className="text-sm font-medium text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--heading)] motion-reduce:transition-none"
    >
      {label}
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border-soft)] bg-[color:var(--header-bg)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <a
            href="#top"
            className="font-display text-2xl tracking-[-0.03em] text-[color:var(--heading)]"
          >
            Dhruv Mehta
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {sectionLinks.map((link) => (
              <NavLink key={link.id} id={link.id} label={link.label} />
            ))}
          </nav>

          <ThemeToggle />
        </div>

        <nav
          aria-label="Mobile"
          className="no-scrollbar flex gap-2 overflow-x-auto pb-4 md:hidden"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 motion-reduce:transition-none ${
                link.id === "contact"
                  ? "bg-[color:var(--primary-action-bg)] text-[color:var(--primary-action-text)]"
                  : "border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] text-[color:var(--muted)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
