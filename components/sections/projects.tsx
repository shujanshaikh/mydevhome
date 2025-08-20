import { ArrowUpRight, ExternalLink, Github, Link } from "lucide-react";

const projects = [
  {
    title: "swizdotdev",
    description:
      "An open-source alternative to same.dev for building full-stack web applications through AI prompting. It can clone any website just paste the url and it will clone the website for you",
    href: "https://www.swizdotdev.space/",
    github: "https://github.com/shujanshaikh/swizdotdev",
  },
  {
    title: "s3.chat",
    description:
      "A powerful chatbot platform that supports multiple AI models, real-time web search, and file processing capabilities. Built for developers and teams.",
    href: "https://s3chat.space/",
    github: "https://github.com/shujanshaikh/s3chat",
  },
];

export function Projects() {
  return (
    <section
      className="screen-line-before screen-line-after border-x border-edge"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="screen-line-after px-4 py-3">
        <h2 id="projects-title" className="text-xl font-semibold">
          projects
        </h2>
      </div>
      <div className="px-4 pb-4 space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-edge rounded-xl p-8 hover:bg-zinc-900/20 transition-colors"
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <div className="flex flex-col gap-2 mt-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="size-4" />
                    <span>View Project</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="size-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-loose mb-6 max-w-3xl">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
