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
    <section className="screen-line-before screen-line-after border-x border-edge" id="tweets" aria-labelledby="tweets-title">
      <div className="screen-line-after px-4 py-3">
        <h2 id="tweets-title" className="text-xl font-semibold">
          tweets
        </h2>
      </div>
      <div className="px-4 pb-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-edge rounded-xl p-4 hover:bg-zinc-900/20 transition-colors">
            <div ref={tweet1Ref} />
          </div>
          <div className="border border-edge rounded-xl p-4 hover:bg-zinc-900/20 transition-colors">
            <div ref={tweet2Ref} />
          </div>
        </div>
      </div>
    </section>
  );
}


