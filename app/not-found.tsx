import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-black px-6 text-center font-mono text-[#e8e8e6]">
      <div className="text-2xl font-medium tracking-[0.2em] text-[#f2f2f0]">404</div>
      <p className="max-w-sm text-sm leading-relaxed text-[#6b6b66]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm tracking-[0.12em] text-[#8a8a86] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#f0f0ee]"
      >
        ← home
      </Link>
    </div>
  );
}
