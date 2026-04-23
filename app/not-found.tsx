import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[var(--background)] px-6 text-center font-mono text-[var(--foreground)]">
      <div className="text-2xl font-medium tracking-[0.2em] text-[var(--bright)]">404</div>
      <p className="max-w-sm text-sm leading-relaxed text-[var(--muted-2)]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm tracking-[0.12em] text-[var(--link-muted)] underline decoration-[var(--divider)] underline-offset-4 transition-colors hover:text-[var(--link-hover)]"
      >
        ← home
      </Link>
    </div>
  );
}
