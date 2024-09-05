import { ArrowRightIcon } from "@radix-ui/react-icons";
import OvalTextBox from "./OvalTextBox";
import { GitHubIcon } from "./Icons";

interface ProjectProps {
  className?: string,
  title: string,
  description: string,
  date: string,
  skills: string[],
  link?: string,
  github?: string,
}

export default function ProjectCard({ title, description, date, skills, link, github }: ProjectProps) {
  return <div className={`border-b-2 border-brown-white hover:bg-pitch-black/20 px-2 md:px-10 xl:px-24 hover:rounded-xl flex flex-col md:flex-row justify-between items-center py-8`}>
    <div className="h-full flex md:flex-col md:gap-8 justify-between w-full md:w-max">
      <div>
        <span className="flex items-center gap-4">
          <h1 className="text-lg md:text-3xl">{title}</h1>
        </span>
        <p className="text-sm font-thin">{date}</p>
      </div>

      <div className="h-max flex flex-row-reverse md:flex-row items-center gap-4">
        {link && <a href={link} target="_blank" className="flex items-center gap-2 text-xs rounded-full bg-white text-black border-brown-white px-4 py-2 w-max hover:bg-blue-600 hover:text-white transition-colors duration-200 ease-in-out">
          <p>Visit</p>
          <div className="font-bold">
            <ArrowRightIcon />
          </div>
        </a>}

        {github && <a href={github} target="_blank">
          <GitHubIcon className="size-6" />
        </a>}
      </div>
    </div>

    <div className="w-full md:w-[50%] lg:w-[40%]">
      <h2 className="text-xs xl:text-sm py-3">{description}</h2>

      <div className="flex gap-2 text-xs flex-wrap">
        {skills.slice(0, 4).map((sk) => <OvalTextBox key={sk} text={sk} />)}
      </div>
    </div>
  </div>
}