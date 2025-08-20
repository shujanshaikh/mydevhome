import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import { SiUpwork } from "react-icons/si";

type UpworkItem = {
  title: string;
  summary: string;
  link: string;
};

const upwork: UpworkItem[] = [
  {
    title: "Ecommerce website from scratch",
    summary: '"A good person and high skills" — Fixed price $100. Delivered Apr 28, 2025 – May 12, 2025.',
    link: "https://www.upwork.com/freelancers/~0113042007cfecddb7?mp_source=share",
  },
];

export function Work() {
  return (
    <section id="work" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-mono tracking-tight">Work Experience</h2>
        <p className="text-zinc-400 text-base lg:text-lg font-mono leading-relaxed">Freelance & contract work delivered with care.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/25">
              <SiUpwork className="h-3.5 w-3.5" />
            </span>
            Upwork
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-white/10" />
            {upwork.map((u) => (
              <article key={u.title} className="relative group pl-10 py-4">
                <div className="absolute left-3 top-6 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]" />
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-white/10 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="text-sm font-medium text-neutral-100 truncate">{u.title}</span>
                    </div>
                    <Button asChild variant="outline" className="h-8 px-3 text-xs">
                      <a href={u.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                        View <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} /> Apr 28, 2025 – May 12, 2025
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5">Fixed price $100</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">{u.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


