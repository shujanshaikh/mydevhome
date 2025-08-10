import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  primaryLink: { label: string; href: string };
  secondaryLinks?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "S3.chat — Multiple AI chat bots (Convex + Next.js + ai-sdk )",
    description:
      "AI SDK with web search, attachments support, and a better UX. Open source repo and build thread.",
    primaryLink: { label: "View repo", href: "https://github.com/shujanshaikh/s3chat" },
    secondaryLinks: [
      { label: "Live", href: "https://s3chat.space/" },
      { label: "Tweet", href: "https://x.com/shujanshaikh/status/1941758231644155926" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-8">
      <div className="mb-3 text-lg font-medium text-neutral-100">Projects</div>
      <div className="grid gap-3 md:grid-cols-1">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400">{p.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline">
                  <a href={p.primaryLink.href} target="_blank" rel="noreferrer">
                    {p.primaryLink.label}
                  </a>
                </Button>
                {p.secondaryLinks?.map((l) => (
                  <Button key={l.href} asChild variant="outline">
                    <a href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}


