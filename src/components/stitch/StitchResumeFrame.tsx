import { useEffect, useMemo, useRef, useState } from "react";

import desktopSourceHtml from "../../stitch/desktop-source.html?raw";
import { buildStitchResumeHtml } from "./buildStitchResumeHtml";

export function StitchResumeFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1600);
  const html = useMemo(() => buildStitchResumeHtml(desktopSourceHtml), []);

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
      window.setTimeout(syncHeight, 1000);
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
  }, [html]);

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <a className="skip-link" href="#resume-frame">
        Skip to stitched site
      </a>
      <iframe
        ref={iframeRef}
        id="resume-frame"
        srcDoc={html}
        style={{ height }}
        title="Dhruv Mehta resume microsite"
        className="block w-full border-0 bg-[#f7f9fb]"
      />
    </div>
  );
}
