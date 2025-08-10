import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export function Hero() {
  return (
    <section className="container mx-auto grid items-center gap-6 px-4 py-8 md:grid-cols-[auto_1fr] md:py-10">
      <div className="relative h-24 w-24 overflow-hidden rounded-xl ring-1 ring-neutral-800 md:h-32 md:w-32">
        <Image
          src="https://pbs.twimg.com/profile_images/1933617215485485056/4OF_2abd_400x400.jpg"
          alt="Shujan profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-100 md:text-4xl">
          Shujan Shaikh
        </h1>
        <p className="max-w-prose text-neutral-400">
          I cook with my laptop
        </p>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href="https://x.com/shujanshaikh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <FaXTwitter /> X
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/shujanshaikh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <FaGithub /> GitHub
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://www.linkedin.com/in/shujan-shaikh-993201235/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="mailto:shaikhshujan@gmail.com" className="inline-flex items-center gap-2">
              <HiOutlineMail /> Email
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


