import { Mail, MapPin, Globe, Code, Lightbulb, Github } from "lucide-react";

export function Overview() {
  return (
    <section className="screen-line-before screen-line-after border-x border-edge" aria-labelledby="overview-title">
      <h2 id="overview-title" className="sr-only">
        Overview
      </h2>
      <div className="p-4 space-y-2 font-mono text-sm">
        <div className="flex items-center gap-4">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted" aria-hidden="true">
            <Code className="size-4 text-muted-foreground" />
          </div>
          <p>
            Full-stack Developer
            <a
              className="ml-0.5 font-medium underline-offset-4 hover:underline"
              href="https://github.com/shujanshaikh"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted" aria-hidden="true">
            <Mail className="size-4 text-muted-foreground" />
          </div>
          <p>
            <a
              className="underline-offset-4 hover:underline"
              href="mailto:shaikhshujan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              shaikhshujan@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted" aria-hidden="true">
            <Github className="size-4 text-muted-foreground" />
          </div>
          <p>
            <a
              className="underline-offset-4 hover:underline"
              href="https://github.com/shujanshaikh"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/shujanshaikh
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
