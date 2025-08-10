import { SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiDocker, SiExpress, SiCloudflare, SiTailwindcss, SiBun, SiPostgresql, SiPrisma } from "react-icons/si";
import { Server, Brackets, Database, CloudDrizzle, Sparkles } from "lucide-react";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

type IconComponent = React.ComponentType<{ className?: string }>;
type TechItem = { name: string; icon: IconComponent; colorClass?: string };

const tech: TechItem[] = [
  { name: "Next.js", icon: SiNextdotjs, colorClass: "text-white" },
  { name: "React", icon: SiReact, colorClass: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, colorClass: "text-lime-400" },
  { name: "Bun", icon: SiBun, colorClass: "text-amber-400" },
  { name: "TypeScript", icon: SiTypescript, colorClass: "text-blue-500" },
  { name: "Docker", icon: SiDocker, colorClass: "text-sky-400" },
  { name: "Express", icon: SiExpress, colorClass: "text-neutral-200" },
  { name: "Hono", icon: Server, colorClass: "text-orange-400" },
  { name: "Convex", icon: Database, colorClass: "text-violet-400" },
  { name: "tRPC", icon: Brackets, colorClass: "text-teal-400" },
  { name: "Cloudflare", icon: SiCloudflare, colorClass: "text-orange-500" },
  { name: "Tailwind", icon: SiTailwindcss, colorClass: "text-sky-400" },
  { name: "PostgreSQL", icon: SiPostgresql, colorClass: "text-sky-500" },
  { name: "AI SDK", icon: Sparkles, colorClass: "text-fuchsia-400" },
  { name: "Drizzle ORM", icon: CloudDrizzle, colorClass: "text-emerald-400" },
  { name: "Prisma ORM", icon: SiPrisma, colorClass: "text-emerald-300" },
];

export function Expertise() {
  return (
    <section id="expertise" className="container mx-auto px-4 py-8">
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
          <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500/20 via-cyan-400/20 to-amber-300/20" />
        </div>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">Expertise & Stack</h2>
        <p className="mx-auto max-w-prose text-sm text-neutral-400">
          Tools I use daily to build fast, reliable, and beautiful products.
        </p>
      </div>

      <Card className="mt-4">
        <CardContent className="pt-4">
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {tech.map((t) => {
              const Icon = t.icon;
              return (
                <li
                  key={t.name}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center transition hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <Icon className={`mx-auto h-6 w-6 transition group-hover:scale-105 ${t.colorClass ?? "text-neutral-300"}`} />
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


