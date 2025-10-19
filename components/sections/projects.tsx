import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "(swiz) Vibe Coding Platform",
      description: "Build full‑stack web apps by prompting",
      tech: ["next.js", "tailwind", "typescript" , "trpc" , "better-auth" ,  "ai sdk" , "e2b" , "postgres" , "drizzle" , "shadcn"],
      link: "https://www.swizdotdev.space/",
      github: "https://github.com/shujanshaikh/swizdotdev"
    },
    {
      id: 2,
      title: "(s3chat) Chatbot ",
      description: "a chatbot platform that supports multiple ai models, real-time web search",
      tech: ["nextjs", "typescript", "convex" , "clerk" , "aisdk"],
      link: "#",
      github: "https://github.com/shujanshaikh/s3chat"
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "A responsive weather dashboard with location-based forecasts.",
    //   tech: ["React", "API Integration", "Charts.js"],
    //   link: "#",
    //   github: "#"
    // }
  ];

  return (
    <>
      {/* Spacer area */}
      <div className="aspect-[4/1] sm:aspect-[8/1] border-x border-edge screen-line-before screen-line-after before:-top-px after:-bottom-px" />

      {/* Projects Section */}
      <div className="screen-line-after border-x border-edge">
        <div className="px-4 py-4">
          <h2 className="text-lg font-poppins font-semibold mb-3 text-zinc-300 flex items-center gap-2">
            stuff i’ve worked on
          </h2>

          <div className="space-y-2">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="border-t border-edge">
                  <div className="px-4 py-4">
                    <h3 className="text-xl font-poppins font-semibold mb-2 text-zinc-200">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-3 font-poppins">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs text-zinc-500 font-poppins"
                        >
                          {tech}
                          {techIndex < project.tech.length - 1 && " • "}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors font-poppins"
                      >
                        view project →
                      </a>
                      <a
                        href={project.github}
                        className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors font-poppins"
                      >
                        github →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
