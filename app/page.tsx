import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Projects } from "@/components/sections/projects";
import { GithubSection } from "@/components/sections/github";

export default function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden px-2 flex justify-center min-h-screen">
      <div className="w-full max-w-3xl mx-auto space-y-12">
        <Hero />
        <Overview />
        <GithubSection username="shujanshaikh" />
        <Projects />
      </div>
    </main>
  );
}
