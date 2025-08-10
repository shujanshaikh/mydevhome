import { Hero } from "@/components/sections/hero";
import { Expertise } from "@/components/sections/expertise";
import { Work } from "@/components/sections/work";
import { Projects } from "@/components/sections/projects";
import { GithubSection } from "@/components/sections/github";
import { TweetEmbed } from "@/components/sections/tweet";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[40vh] w-[40vw] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500/20 via-cyan-400/20 to-amber-300/20 blur-3xl" />
      </div>
      <Hero />
      <GithubSection username="shujanshaikh" />
      <TweetEmbed />
      <Expertise />
      <Projects />
      <Work />
    </div>
  );
}
