import Image from "next/image";

export function Hero() {
  return (
    <>
      {/* Spacer area (was header mark) */}
      <div className="aspect-[2/1] sm:aspect-[5/1] border-x border-edge screen-line-before screen-line-after before:-top-px after:-bottom-px" />

      {/* Profile Header with Avatar and Name */}
      <div className="screen-line-after flex border-x border-edge">
        <div className="shrink-0 border-r border-edge relative">
          <div className="mx-[2px] my-[3px] relative">
            <Image
              src="https://pbs.twimg.com/profile_images/1933617215485485056/4OF_2abd_400x400.jpg"
              alt="Shujan Shaikh's avatar"
              width={160}
              height={160}
              className="rounded-full ring-1 ring-zinc-600 ring-offset-2 ring-offset-black select-none sm:w-40 sm:h-40 w-32 h-32"
              priority
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="border-t border-edge">
            <h1 className="flex items-center pl-4 text-3xl font-semibold">
              Shujan Shaikh
            </h1>

            <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
              <p className="font-mono text-sm text-muted-foreground select-none">
                Full-stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
