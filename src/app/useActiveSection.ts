import { useEffect, useState } from "react";

import { sectionLinks, type SectionId } from "../content/site";

const DEFAULT_SECTION: SectionId = "summary";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>(DEFAULT_SECTION);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const sections = sectionLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const nextEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (!nextEntry?.target.id) {
          return;
        }

        setActiveSection(nextEntry.target.id as SectionId);
      },
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0.15, 0.32, 0.5, 0.72],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
