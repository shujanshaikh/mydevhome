export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/60 backdrop-blur">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-neutral-400">
        <div className="mb-2">Made with ❤️ by Shujan Shaikh</div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <a href="https://x.com/shujanshaikh" target="_blank" rel="noreferrer" className="hover:text-neutral-200">Twitter</a>
          <a href="https://github.com/shujanshaikh" target="_blank" rel="noreferrer" className="hover:text-neutral-200">GitHub</a>
          <a href="https://www.linkedin.com/in/shujan-shaikh-993201235/" target="_blank" rel="noreferrer" className="hover:text-neutral-200">LinkedIn</a>
          <a href="mailto:shaikhshujan@gmail.com" className="hover:text-neutral-200">shaikhshujan@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}


