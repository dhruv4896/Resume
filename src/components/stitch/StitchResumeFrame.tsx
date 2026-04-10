import { useEffect, useMemo, useRef, useState } from "react";

import desktopSourceHtml from "../../../stitch-export/17091861260108282947/desktop-v2.html?raw";
import mobileSourceHtml from "../../../stitch-export/17091861260108282947/mobile-v2.html?raw";
import { buildDesktopHtml, buildMobileHtml } from "./buildStitchResumeHtml";

function useIsMobile() {
  const getMatch = () =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false;

  const [isMobile, setIsMobile] = useState(getMatch);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}

export function StitchResumeFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();
  const [height, setHeight] = useState(1200);

  const desktopHtml = useMemo(() => buildDesktopHtml(desktopSourceHtml), []);
  const mobileHtml = useMemo(() => buildMobileHtml(mobileSourceHtml), []);
  const activeHtml = isMobile ? mobileHtml : desktopHtml;

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    let resizeObserver: ResizeObserver | undefined;
    let mutationObserver: MutationObserver | undefined;

    const syncHeight = () => {
      const doc = iframe.contentDocument;

      if (!doc) {
        return;
      }

      const nextHeight = Math.max(
        doc.body?.scrollHeight ?? 0,
        doc.documentElement?.scrollHeight ?? 0,
        doc.body?.offsetHeight ?? 0,
        doc.documentElement?.offsetHeight ?? 0,
      );

      if (nextHeight > 0) {
        setHeight(nextHeight);
      }
    };

    const handleLoad = () => {
      const doc = iframe.contentDocument;

      if (!doc) {
        return;
      }

      syncHeight();

      resizeObserver = new ResizeObserver(syncHeight);
      resizeObserver.observe(doc.documentElement);

      if (doc.body) {
        resizeObserver.observe(doc.body);
      }

      mutationObserver = new MutationObserver(syncHeight);
      mutationObserver.observe(doc.documentElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
      });

      doc.defaultView?.addEventListener("resize", syncHeight);
      doc.fonts?.ready.then(syncHeight).catch(() => undefined);
      window.setTimeout(syncHeight, 150);
      window.setTimeout(syncHeight, 500);
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      iframe.contentDocument?.defaultView?.removeEventListener(
        "resize",
        syncHeight,
      );
    };
  }, [activeHtml]);

  return (
    <div className="min-h-screen bg-[#fffcf7]">
      <iframe
        key={isMobile ? "mobile" : "desktop"}
        ref={iframeRef}
        srcDoc={activeHtml}
        style={{ height }}
        title="Dhruv Mehta resume microsite"
        className="block w-full border-0 bg-[#fffcf7]"
      />
    </div>
  );
}
