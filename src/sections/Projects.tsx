import { portfolioProjects } from "@/constants";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">Real-world Results</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">See how I transformed concepts into engaging digital experiences.</p>

        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8">
              <div className="flex">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>

              <hr className="border-t-2 border-white/5 mt-4" />

              <ul>
                {project.results.map((result) => (
                  <li>
                    <CheckCircleIcon />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>

              <a href={project.link}>
                <button>View Live Site</button>
              </a>

              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
