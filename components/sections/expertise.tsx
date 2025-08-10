import { SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiDocker, SiExpress, SiCloudflare, SiTailwindcss, SiBun } from "react-icons/si";
import { Server, Brackets, Database } from "lucide-react";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type IconComponent = React.ComponentType<{ className?: string }>;
type TechItem = { name: string; icon: IconComponent };

const tech: TechItem[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Bun", icon: SiBun },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Docker", icon: SiDocker },
  { name: "Express", icon: SiExpress },
  { name: "Hono", icon: Server },
  { name: "Convex", icon: Database },
  { name: "tRPC", icon: Brackets },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Tailwind", icon: SiTailwindcss },
];

export function Expertise() {
  return (
    <section id="expertise" className="container mx-auto px-4 py-16">
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
          <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500/20 via-cyan-400/20 to-amber-300/20" />
        </div>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">Expertise & Stack</h2>
        <p className="mx-auto max-w-prose text-sm text-neutral-400">
          Tools I use daily to build fast, reliable, and beautiful products.
        </p>
      </div>

      <Card className="mt-8">
        <CardContent className="pt-6">
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {tech.map((t) => {
              const Icon = t.icon;
              return (
                <li
                  key={t.name}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center transition hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <Icon className="mx-auto h-6 w-6 text-neutral-300 transition group-hover:scale-105" />
                  <span className="mt-2 block text-xs text-neutral-400">{t.name}</span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}


