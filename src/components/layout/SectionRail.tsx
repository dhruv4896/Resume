import { sectionLinks, type SectionId } from "../../content/site";

type SectionRailProps = {
  activeSection: SectionId;
};

export function SectionRail({ activeSection }: SectionRailProps) {
  return (
    <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <nav
        aria-label="Section status"
        className="hardware-rail-panel flex flex-col gap-2 px-3 py-3"
      >
        {sectionLinks.map((link) => {
          const isActive = link.id === activeSection;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="section-rail-link"
              data-active={isActive}
            >
              <span className="status-led" data-active={isActive} />
              <span className="font-label text-[0.6rem] font-bold uppercase tracking-[0.2em]">
                {link.code}
              </span>
              <span className="font-label text-[0.62rem] font-medium uppercase tracking-[0.16em]">
                {link.label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
