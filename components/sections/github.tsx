"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

export function GithubSection({ username }: { username: string }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollToRightEdge = () => {
      const svg = container.querySelector("svg");
      let contentWidth = container.scrollWidth;
      try {
        if (svg) {
          const svgBox = (svg as SVGGraphicsElement).getBBox?.();
          const svgWidth =
            svgBox && Number.isFinite(svgBox.width)
              ? svgBox.width
              : svg.getBoundingClientRect().width;
          if (svgWidth && Number.isFinite(svgWidth)) {
            contentWidth = Math.max(contentWidth, svgWidth + 32);
          }
        }
      } catch {
        // ignore
      }
      const targetLeft = Math.max(0, contentWidth - container.clientWidth);
      container.scrollLeft = targetLeft;
    };

    const rafId = requestAnimationFrame(scrollToRightEdge);
    const t1 = setTimeout(scrollToRightEdge, 200);
    const t2 = setTimeout(scrollToRightEdge, 600);
    const t3 = setTimeout(scrollToRightEdge, 1200);

    const mutationObserver = new MutationObserver(scrollToRightEdge);
    mutationObserver.observe(container, { childList: true, subtree: true });

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
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
    <section
      className="screen-line-before screen-line-after border-x border-edge"
      id="github"
      aria-labelledby="github-title"
    >
      <div className="px-4 py-4 border-b border-edge/60">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-poppins">
              github journal
            </p>
            <h2
              id="github-title"
              className="text-lg sm:text-xl font-poppins font-semibold"
            >
              shipping rhythm
            </h2>
            <p className="text-xs sm:text-sm font-poppins text-foreground/80 max-w-md">
              A daily pulse of what I&apos;m building, shipped, or tinkering with
              over the last year.
            </p>
          </div>
          <a
            href={`https://github.com/${username}`}
            className="text-xs font-poppins px-3 py-2 rounded-full border border-edge/70 bg-background/40 hover:bg-foreground/5 transition"
          >
            view profile →
          </a>
        </div>
      </div>
      <div className="p-4">
        <div className="relative overflow-hidden rounded-xl border border-edge/60 bg-background/40">
          <div className="relative p-4 sm:p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-poppins text-muted-foreground">
              <span>last 12 months</span>
            </div>
            <div
              ref={scrollRef}
              className="overflow-x-auto rounded-lg border border-edge/40 bg-background/60 p-4"
            >
              <GitHubCalendar
                username={username}
                colorScheme="dark"
                blockMargin={3}
                blockSize={12}
                fontSize={11}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-poppins text-muted-foreground">
              <span>scroll for older days →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
