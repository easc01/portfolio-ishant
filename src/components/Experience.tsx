import AnimatedGridPattern from "../../@/components/magicui/animated-grid-pattern";
import { cn } from "../../@/lib/utils";
import ExperienceTimeline from "../lib/experience.json";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="relative flex flex-col">
      {/* Mobile and Tablet Header */}
      <div className="flex items-center gap-4 lg:hidden">
        <h1 className="text-4xl mb-2 w-max font-thin">Experience</h1>
        <div className="w-full h-[1px] bg-warm-white"></div>
      </div>

      {/* Desktop Layout */}
      <div className="flex h-full ">
        {/* Left Side (Experience Text) */}
        <div className="hidden lg:flex gap-4 lg:sticky lg:top-0 lg:h-screen lg:w-1/3 lg:items-center lg:justify-center lg:px-8">
          <h1 className="text-5xl font-thin">Experience</h1>
        </div>

        {/* Right Side (Experience Cards) */}
        <div className="lg:w-2/3 lg:px-8 flex flex-col items-center w-full gap-2 z-10">
          {ExperienceTimeline.map((exp, idx) => (
            <ExperienceCard
              projects={exp.projects}
              location={exp.location}
              timeline={exp.timeline}
              isNPO={exp.isNPO}
              description={exp.description}
              organisation={exp.organisation}
              organisationLink={exp.organisationLink}
              position={exp.position}
              skills={exp.skills}
              key={idx}
            />
          ))}
        </div>
      </div>

      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
