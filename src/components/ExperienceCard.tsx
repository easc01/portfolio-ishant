import OvalTextBox from "./OvalTextBox";

interface ExperienceCardProps {
  className?: string,
  organisation: string,
  location: string,
  organisationLink: string,
  isNPO: boolean,
  description: string,
  timeline: string,
  position: string,
  skills: string[],
  projects: {
    title: string,
    link: string
  }[],
}

const Link = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={14} height={14} color={"#ffffff"} fill={"none"} {...props}>
    <path d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function ExperienceCard({ className, organisation, location, description, position, organisationLink, skills, timeline, isNPO, projects }: ExperienceCardProps) {
  return <div className={`rounded-xl hover:bg-pitch-black/40 p-5 flex  md:gap-5 flex-col md:flex-row justify-center ${className}`}>
    <p className="text-xs text-white/70  pt-1">{timeline}</p>

    <div className="md:w-96">
      <div className="flex">
        <a href={organisationLink} target="_blank"><span className="font-bold">{organisation}</span>, {location}</a> {isNPO && <OvalTextBox className="text-xs" text="NPO" />}
      </div>
      <p className="text-white/70"><span className="font-semibold">{position}</span></p>

      <p className="text-xs pb-4 pt-3">{description}</p>

      {projects.length > 0 &&
        <div className="text-sm flex gap-2 flex-wrap text-white/80 pb-3">
          {projects.map((project, idx) => <a key={idx} href={project.link} className="flex items-center">
            <Link />
            {project.title}
          </a>)}
        </div>}

      <div className="text-xs flex gap-2 flex-wrap">
        {skills.map((skill, idx) => <OvalTextBox key={idx} text={skill} />)}
      </div>
    </div>
  </div>
}