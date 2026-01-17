"use client"
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Spacer area removed */}

      {/* Enhanced Profile Header with Avatar and About Section */}
      <div className="screen-line-after border-x border-edge">
        {isMobile ? (
          // Mobile Layout: Photo on right, content on left
          <div className="flex flex-row px-4 py-4">
            {/* Content Section */}
            <div className="flex-1 flex flex-col pr-4">
              {/* Name and Title */}
              <div className="pb-3">
                <h1 className="text-2xl font-poppins font-semibold mb-2 text-foreground">
                  hi, shujan here
                </h1>
              </div>

              {/* About Section */}
              <div className="border-t border-edge/60 pt-3">
                <h2 className="text-sm font-poppins font-semibold mb-2 flex items-center gap-2 text-muted-foreground tracking-wide">
                  about
                </h2>
                <div className="text-xs leading-relaxed space-y-2 text-foreground/90">
                  <p className="font-poppins">
                    software engineering was never more fun than it is right now
                  </p>
                </div>
              </div>

            </div>

            <div className="shrink-0 flex items-start">
              <div className="relative group aspect-square w-14 h-14">
                <Image
                  src="https://pbs.twimg.com/profile_images/1999562973195698181/76CT4Poj_400x400.jpg"
                  alt="Shujan Shaikh's avatar"
                  fill
                  sizes="56px"
                  className="rounded-full select-none object-cover shadow-lg shadow-zinc-900/60 transition-all duration-300 group-hover:scale-105 ring-1 ring-border/50"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-sm pointer-events-none"></div>
              </div>
            </div>
          </div>
        ) : (
          // Desktop Layout: Original layout with centered photo
          <div className="flex flex-row">
            {/* Content Section */}
            <div className="flex-1 flex flex-col">
              {/* Name and Title */}
              <div className=" border-edge border-t-0">
                <div className="px-4 py-3 sm:py-4">
                  <h1 className="text-3xl sm:text-4xl font-poppins font-semibold mb-2 text-foreground">
                    hi, shujan here
                  </h1>
                </div>
              </div>

              {/* About Section */}
              <div className="border-t border-edge/60">
                <div className="px-4 py-4">
                  <h2 className="text-lg font-poppins font-semibold mb-3 flex items-center gap-2 text-muted-foreground tracking-wide">
                    about
                  </h2>
                  <div className="text-sm leading-relaxed space-y-4 text-foreground/90">
                    <p className="font-poppins">
                      software engineering was never more fun than it is right now
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Experience moved to its own section component */}
            </div>

            {/* Profile Photo Section */}
            <div className="shrink-0 border-l border-edge/60 relative w-48">
              <div className="mx-[2px] my-[2px] relative flex justify-center p-4">
                <div className="relative group aspect-square w-44 h-44">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1999562973195698181/76CT4Poj_400x400.jpg"
                    alt="Shujan Shaikh's avatar"
                    fill
                    sizes="176px"
                    className="rounded-full select-none object-cover shadow-xl shadow-zinc-900/60 transition-all duration-300 group-hover:scale-105 ring-1 ring-border/50"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-md pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
