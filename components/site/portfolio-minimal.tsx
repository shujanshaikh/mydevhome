import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/portfolio";
import { PROFILE_IMAGE_URL } from "@/lib/profile";
import { projectSummary, projects } from "@/lib/projects-data";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function ExternalLink({
  href,
  children,
  className,
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const isMail = href.startsWith("mailto:");
  if (isMail) {
    return (
      <a href={href} className={className} style={style}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {children}
    </a>
  );
}

const linkMuted =
  "text-[#8a8a86] hover:text-[#f0f0ee] focus-visible:rounded-sm focus-visible:text-[#f0f0ee] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/40";

export function PortfolioMinimal() {
  return (
    <div
      className={`${mono.className} relative isolate min-h-dvh w-full overflow-x-hidden bg-[#000000] text-[#e8e8e6] selection:bg-white/20 selection:text-white`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.14] [background-size:180px_180px]"
        style={{ backgroundImage: GRAIN_SVG }}
      />

      <main className="relative z-10 mx-auto flex w-full max-w-[min(100%,28rem)] flex-col px-6 py-16 pb-24">
        <div className="w-full">
          <div className="mb-10 flex items-start gap-4 sm:gap-5">
            <div className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-white/[0.14] sm:h-[4.5rem] sm:w-[4.5rem]">
              <Image
                src={PROFILE_IMAGE_URL}
                alt="Shujan Shaikh"
                fill
                sizes="(max-width:640px)56px,72px"
                className="object-cover"
                priority
              />
            </div>
            <header className="min-w-0 flex-1 text-left">
              <h1 className="text-[1.35rem] font-medium leading-tight tracking-[0.02em] text-[#f2f2f0]">
                <Link
                  href="/"
                  className="rounded-sm outline-offset-4 hover:text-white focus-visible:outline-1 focus-visible:outline-white/50"
                >
                  {portfolio.name}
                </Link>
              </h1>
              <p className="mt-2 text-[0.8125rem] font-normal leading-relaxed tracking-[0.04em] text-[#5c5c58]">
                {portfolio.tagline}
                <span
                  className="ml-0.5 inline-block h-[0.7em] w-[0.55ch] translate-y-[0.08em] bg-[#6a6a66]"
                  aria-hidden
                />
              </p>
            </header>
          </div>

          <nav aria-label="Primary" className="mb-10">
            <ul className="flex flex-col gap-[1.15rem] text-[0.8125rem] tracking-[0.06em]">
              {portfolio.primaryLinks.map((item) => (
                <li key={item.href}>
                  <ExternalLink href={item.href} className={`group relative inline-block ${linkMuted}`}>
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden
                        className="absolute -bottom-px left-0 h-px w-0 bg-[#a8a8a4]/80 group-hover:w-full group-focus-visible:w-full"
                      />
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mb-10 h-px w-full bg-white/[0.12]" role="presentation" />

          <footer className="mb-16">
            <ul className="flex flex-wrap items-center justify-start gap-x-8 gap-y-3 text-[0.6875rem] tracking-[0.18em] text-[#4a4a46]">
              {portfolio.social.map((item) => (
                <li key={item.label}>
                  <ExternalLink
                    href={item.href}
                    className="hover:text-[#b8b8b4] focus-visible:rounded-sm focus-visible:text-[#b8b8b4] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/35"
                  >
                    {item.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </footer>
        </div>

        <section aria-labelledby="work-heading" className="w-full">
          <h2
            id="work-heading"
            className="mb-8 text-left text-[0.6875rem] font-normal tracking-[0.2em] text-[#5c5c58]"
          >
            work
          </h2>
          <ol className="flex flex-col gap-12">
            {projects.map((project) => (
              <li key={project.id}>
                <h3 className="text-[0.8125rem] font-medium tracking-[0.04em] text-[#d6d6d4]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block rounded-sm ${linkMuted} hover:text-white`}
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2 text-[0.75rem] leading-[1.65] tracking-[0.03em] text-[#6b6b66]">
                  {projectSummary(project.description)}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[0.6875rem] tracking-[0.14em]">
                  <ExternalLink href={project.link} className={linkMuted}>
                    live →
                  </ExternalLink>
                  <ExternalLink href={project.github} className={linkMuted}>
                    repo →
                  </ExternalLink>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
