"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        createTweet: (
          tweetId: string,
          element: HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<unknown>;
      };
    };
  }
}

export function TweetEmbed() {
  const tweet1Ref = useRef<HTMLDivElement | null>(null);
  const tweet2Ref = useRef<HTMLDivElement | null>(null);
  const hasRendered = useRef(false);

  useEffect(() => {
    const ensureScript = (): Promise<void> =>
      new Promise((resolve) => {
        const existing = document.getElementById("twitter-wjs") as HTMLScriptElement | null;
        if (existing) {
          resolve();
          return;
        }
        const js = document.createElement("script");
        js.id = "twitter-wjs";
        js.src = "https://platform.twitter.com/widgets.js";
        js.async = true;
        js.onload = () => resolve();
        document.body.appendChild(js);
      });

    const renderTweets = async () => {
      await ensureScript();
      if (hasRendered.current) return;
      hasRendered.current = true;
      if (window.twttr?.widgets) {
        if (tweet1Ref.current) {
          tweet1Ref.current.innerHTML = "";
          await window.twttr.widgets.createTweet(
            "1951993839759380551",
            tweet1Ref.current,
            { theme: "dark", dnt: true }
          );
        }
        if (tweet2Ref.current) {
          tweet2Ref.current.innerHTML = "";
          await window.twttr.widgets.createTweet(
            "1941758231644155926",
            tweet2Ref.current,
            { theme: "dark", dnt: true }
          );
        }
      }
    };

    renderTweets();
  }, []);

  return (
    <section className="container mx-auto px-4">
      <div className="mb-3 text-sm uppercase tracking-widest text-neutral-500">Updates</div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 p-2">
          <div ref={tweet1Ref} />
        </div>
        <div className="overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 p-2">
          <div ref={tweet2Ref} />
        </div>
      </div>
    </section>
  );
}


