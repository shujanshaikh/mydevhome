import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolio } from "@/lib/portfolio";
import { PROFILE_IMAGE_URL } from "@/lib/profile";

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
  "text-[var(--link-muted)] hover:text-[var(--link-hover)] focus-visible:rounded-sm focus-visible:text-[var(--link-hover)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]";

export function PortfolioMinimal() {
  return (
    <div
      className={`${mono.className} relative isolate min-h-dvh w-full overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay [background-size:180px_180px]"
        style={{ backgroundImage: GRAIN_SVG, opacity: "var(--grain-opacity)" }}
      />

      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center px-6 py-12">
        <main className="w-full max-w-[min(100%,28rem)] text-left">
          <div className="mb-10 flex items-start justify-between gap-4 sm:gap-5">
            <div className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
              <div className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-[var(--ring-avatar)] sm:h-[4.5rem] sm:w-[4.5rem]">
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
                <h1 className="text-[1.35rem] font-medium leading-tight tracking-[0.02em] text-[var(--bright)]">
                  <Link
                    href="/"
                    className="rounded-sm outline-offset-4 hover:text-[var(--bright-hover)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--focus-ring)]"
                  >
                    {portfolio.name}
                  </Link>
                </h1>
                <p className="mt-2 text-[0.8125rem] font-normal leading-relaxed tracking-[0.04em] text-[var(--muted)]">
                  {portfolio.tagline}
                  <span
                    className="ml-0.5 inline-block h-[0.7em] w-[0.55ch] translate-y-[0.08em] bg-[var(--cursor-blink)]"
                    aria-hidden
                  />
                </p>
              </header>
            </div>
            <ThemeToggle />
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
                        className="absolute -bottom-px left-0 h-px w-0 bg-[var(--underline)] group-hover:w-full group-focus-visible:w-full"
                      />
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mb-10 h-px w-full bg-[var(--divider)]" role="presentation" />

          <footer>
            <ul className="flex flex-wrap items-center justify-start gap-x-8 gap-y-3 text-[0.6875rem] tracking-[0.18em] text-[var(--social-muted)]">
              {portfolio.social.map((item) => (
                <li key={item.label}>
                  <ExternalLink
                    href={item.href}
                    className="hover:text-[var(--social-hover)] focus-visible:rounded-sm focus-visible:text-[var(--social-hover)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]"
                  >
                    {item.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </footer>
        </main>
      </div>
    </div>
  );
}
