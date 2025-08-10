import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-black/60 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="#" className="font-semibold text-neutral-200">
          shujju.dev
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="#projects" className="text-neutral-400 hover:text-neutral-200">
            Projects
          </Link>
          <Link href="#expertise" className="text-neutral-400 hover:text-neutral-200">
            Expertise
          </Link>
          <Link href="#github" className="text-neutral-400 hover:text-neutral-200">
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}


