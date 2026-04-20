export interface Project {
  id: number;
  title: string;
  description: string;
  tech?: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "ama",
    description:
      "think lovable, but instead of the cloud, it works on your localhost \n\na full vscode editor in the browser, powered by an ai agent, making real changes to your local codebase with live preview",
    link: "https://ama.shujan.xyz",
    github: "https://github.com/shujanshaikh/ama",
  },
  {
    id: 1,
    title: "grab-agent",
    description:
      "Lovable, but for your localhost 👀\n\nIt's an extension of React Grab by @aidenybai, which basically grabs the elements and sends them to my hosted server. The server handles all the AI orchestration and makes changes to the local codebase.",
    link: "https://grab-agent.shujan.xyz",
    github: "https://github.com/shujanshaikh/grab-agent",
  },
  {
    id: 2,
    title: "flycli (ai agent that lives in your browser)",
    description:
      "flycli is your in-browser ai coding agent that understands your codebase, and edits your local files directly.",
    link: "https://flycli.vercel.app",
    github: "https://github.com/shujanshaikh/flycli",
  },
  {
    id: 3,
    title: "tabchat (ai chat & image generation platform)",
    description:
      "an ai chat app and image generation platform supporting all major models for both chat and image generation.",
    link: "https://tabchat.vercel.app/",
    github: "https://github.com/shujanshaikh/tabchat",
  },
];

export function projectSummary(description: string): string {
  const para = description.split(/\n\n/)[0]?.trim() ?? description;
  return para.replace(/\s+/g, " ");
}
