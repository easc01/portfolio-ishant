import { LinkIcon } from "./Icons";
import OvalTextBox from "./OvalTextBox";

interface ExperienceCardProps {
  className?: string,
  organisation: string,
  location: string,
  organisationLink: string,
  isNPO: boolean,
  description: string[],
  timeline: string,
  position: string,
  skills: string[],
  projects: {
    title: string,
    link: string
  }[],
}


export default function ExperienceCard({ className, organisation, location, description, position, organisationLink, skills, timeline, isNPO, projects }: ExperienceCardProps) {
  return <div className={`rounded-xl hover:bg-pitch-black/40 p-5 flex md:gap-5 flex-col md:flex-row justify-center ${className}`}>
    <p className="text-xs text-white/70 pt-1">{timeline}</p>

    <div className="md:w-96">
      <div className="flex">
        <a href={organisationLink} target="_blank"><span className="font-bold">{organisation}</span>, {location}</a> {isNPO && <OvalTextBox className="text-xs" text="NPO" />}
      </div>
      <p className="text-white/70"><span className="font-semibold">{position}</span></p>

      <ul className="text-xs pb-4 pt-3 space-y-2">
        {description.map((desc, idx) => <li key={idx}>{desc}</li>)}
      </ul>

      {projects.length > 0 &&
        <div className="text-sm flex gap-2 flex-wrap text-white/80 pb-3">
          {projects.map((project, idx) => <a key={idx} href={project.link} className="flex items-center">
            <LinkIcon />
            {project.title}
          </a>)}
        </div>}

      <div className="text-xs flex gap-2 flex-wrap">
        {skills.map((skill, idx) => <OvalTextBox key={idx} text={skill} />)}
      </div>
    </div>
  </div>
}