import { useEffect, useMemo, useState } from "react";

import type { SectionId } from "../content/site";

export type PageScene =
  | "hero"
  | "summary"
  | "experience"
  | "expertise"
  | "projects"
  | "contact";

const sectionSceneMap: Record<SectionId, PageScene> = {
  top: "hero",
  summary: "summary",
  experience: "experience",
  expertise: "expertise",
  projects: "projects",
  contact: "contact",
};

function readScrollProgress() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return 0;
  }

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollHeight <= 0) {
    return 0;
  }

  return Math.min(1, Math.max(0, window.scrollY / scrollHeight));
}

export function usePageScene(activeSection: SectionId) {
  const [scrollProgress, setScrollProgress] = useState(readScrollProgress);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      setScrollProgress(readScrollProgress());
    };

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const scene = useMemo(() => sectionSceneMap[activeSection], [activeSection]);

  return {
    scene,
    scrollProgress,
  };
}
