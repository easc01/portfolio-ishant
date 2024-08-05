import ProjectCard from "./ProjectsCard";
import projectsList from "../lib/projects.json";
import Particles from "../../@/components/magicui/particles";

export default function Projects() {
  return <div className="relative py-4">
    <span className="relative z-30">
      <div className="flex items-center gap-4 pb-4">
        <h1 className="md:text-center text-4xl lg:text-5xl font-thin text-nowrap">My Past Work</h1>
        <div className="w-full h-[1px] bg-warm-white"></div>
      </div>

      <div className="flex flex-wrap flex-col pb-10 justify-center">
        {projectsList.map((pr) =>
          <ProjectCard
            key={pr.title}
            title={pr.title}
            date={pr.date}
            description={pr.description}
            link={pr.link}
            github={pr.github}
            skills={pr.skills}
            thumbnail={pr.thumbnail}
            className=''
          />)}
      </div>
    </span>

    <Particles
      className="absolute inset-0"
      quantity={300}
      ease={80}
      color={'#ffffff'}
      refresh
    />

  </div>
}