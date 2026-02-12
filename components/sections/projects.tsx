import React from 'react';

const Projects = () => {
const projects = [{
      id : 0,
      title : "ama",
      description : "think lovable, but instead of the cloud, it works on your localhost \n\na full vscode editor in the browser, powered by an ai agent, making real changes to your local codebase with live preview",
      link : "https://ama.shujan.xyz",
      github : ""
   },
   {
      id : 1,
      title : "grab-agent",
      description : "Lovable, but for your localhost 👀\n\nIt's an extension of React Grab by @aidenybai, which basically grabs the elements and sends them to my hosted server. The server handles all the AI orchestration and makes changes to the local codebase.",
      link : "https://grab-agent.shujan.xyz",
      github : "https://github.com/shujanshaikh/grab-agent"
   },
    {
      id : 2,
      title : "flycli (ai agent that lives in your browser)",
      description : "flycli is your in-browser ai coding agent that understands your codebase, and edits your local files directly.",
      link : "https://flycli.vercel.app",
      github : "https://github.com/shujanshaikh/flycli"
   },
    {
       id: 3,
       title: "tabchat (ai chat & image generation platform)",
       description: "an ai chat app and image generation platform supporting all major models for both chat and image generation.",
       link: "https://tabchat.vercel.app/",
       github: "https://github.com/shujanshaikh/tabchat"
     },
    
  ];

  return (
    <>
      <div className="screen-line-after border-x border-edge">
        <div className="px-4 py-4">
          <h2 className="text-base font-poppins font-semibold mb-3 flex items-center gap-2">
            stuff i've worked on
          </h2>

          <div className="space-y-1">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="border-t border-edge">
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-poppins font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs leading-relaxed mb-3 font-poppins whitespace-pre-line">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech && project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-poppins"
                        >
                          {tech}
                          {techIndex < project.tech.length - 1 && " • "}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="text-xs transition-colors font-poppins"
                      >
                        view project →
                      </a>
                      <a
                        href={project.github}
                        className="text-xs transition-colors font-poppins"
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
