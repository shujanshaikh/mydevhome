"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

export function GithubSection({ username }: { username: string }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollToRightEdge = () => {
      const svg = container.querySelector('svg');
      let contentWidth = container.scrollWidth;
      try {
        if (svg) {
          // Prefer exact SVG width if available
          const svgBox = (svg as SVGGraphicsElement).getBBox?.();
          const svgWidth = svgBox && Number.isFinite(svgBox.width) ? svgBox.width : svg.getBoundingClientRect().width;
          if (svgWidth && Number.isFinite(svgWidth)) {
            contentWidth = Math.max(contentWidth, svgWidth + 32); // + padding
          }
        }
      } catch {
        // ignore
      }
      const targetLeft = Math.max(0, contentWidth - container.clientWidth);
      container.scrollLeft = targetLeft;
    };

    // Multiple attempts to cover hydration/late layout
    const rafId = requestAnimationFrame(scrollToRightEdge);
    const t1 = setTimeout(scrollToRightEdge, 200);
    const t2 = setTimeout(scrollToRightEdge, 600);
    const t3 = setTimeout(scrollToRightEdge, 1200);

    const mutationObserver = new MutationObserver(scrollToRightEdge);
    mutationObserver.observe(container, { childList: true, subtree: true });

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(scrollToRightEdge);
      resizeObserver.observe(container);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      mutationObserver.disconnect();
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <section id="github" className="container mx-auto px-4 pt-4">
      <div className="mb-3 text-sm uppercase tracking-widest text-neutral-500">GitHub</div>
      <Card className="bg-neutral-950/60 border-neutral-800">
        <CardContent className="p-3">
          <div ref={scrollRef} className="overflow-x-auto rounded-md border border-neutral-800 p-3 no-scrollbar">
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              blockMargin={5}
              blockSize={11}
              fontSize={12}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


