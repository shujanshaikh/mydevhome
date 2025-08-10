import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 space-y-3">
          <h1 className="truncate text-4xl font-semibold tracking-tight text-neutral-100 md:text-5xl">Shujan Shaikh</h1>
          <p className="max-w-prose text-neutral-400">I cook with my laptop</p>
          <div className="flex gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="X / Twitter" title="X / Twitter" className="rounded-full ring-1 ring-white/10">
            <Link href="https://x.com/shujanshaikh" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="GitHub" title="GitHub" className="rounded-full ring-1 ring-white/10">
            <Link href="https://github.com/shujanshaikh" target="_blank" rel="noreferrer">
              <FaGithub />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn" title="LinkedIn" className="rounded-full ring-1 ring-white/10">
            <Link href="https://www.linkedin.com/in/shujan-shaikh-993201235/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Email" title="Email" className="rounded-full ring-1 ring-white/10">
            <Link href="mailto:shaikhshujan@gmail.com">
              <HiOutlineMail />
            </Link>
          </Button>
          </div>
        </div>

        <div className="relative h-24 w-24 flex-none overflow-hidden rounded-full ring-1 ring-white/10 md:h-32 md:w-32">
          <Image
            src="https://pbs.twimg.com/profile_images/1933617215485485056/4OF_2abd_400x400.jpg"
            alt="Shujan profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}


