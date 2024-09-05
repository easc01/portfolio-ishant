import { FileTextIcon } from "@radix-ui/react-icons";
import { useScrollContext } from "../contexts/ScrollContext";
import { scrollToView } from "../lib/utils";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon, MailIcon, TwitterIcon } from "./Icons";

export default function Footer() {
  const [homeRef, experienceRef, projectRef] = useScrollContext();

  return <div>
    <div className="p-5 text-white md:p-10 mx-4 mb-4 flex gap-5 flex-col md:flex-row justify-between font-poppins border border-warm-white/20 rounded-xl">
      <div className="md:w-1/4 flex flex-col justify-between">
        <h1 className="xl:text-2xl">
          Delivering <span className="text-cyan-500">Precision</span> and <span className="text-purple-500">Performance</span> in Tech
        </h1>

        <div className="hidden md:block xl:text-lg">
          <p>Delhi, India</p>
          <h1>Ishant Sikdar © 2024</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:w-1/2 justify-center">

        <div className="md:w-1/3">
          <h2 className="md:pb-5 text-sm md:text-base text-orange-300 font-medium">Explore More</h2>

          <div className="flex items-start md:flex-col gap-2">
            <button onClick={() => scrollToView(homeRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Home</button>
            <button onClick={() => scrollToView(experienceRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Experience</button>
            <button onClick={() => scrollToView(projectRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Projects</button>
          </div>
        </div>

        <div className="md:w-1/3">
          <h1 className="pb-2 md:pb-5 text-sm md:text-base text-green-500 font-medium">Socials</h1>

          <div className="flex items-start flex-wrap md:flex-col text-sm gap-2 md:gap-3">
            <a href="https://www.linkedin.com/in/ishantsikdar" className="flex gap-1 md:gap-3 items-center">
              <LinkedInIcon className="size-5" />
              <h2 className="hover:text-blue-500 transition-colors duration-200 ease-in-out">LinkedIn</h2>
            </a>
            <a href="https://github.com/ishantSikdar" className="flex gap-1 md:gap-3 items-center">
              <GitHubIcon className="size-5" />
              <h2 className="hover:text-blue-500 transition-colors duration-200 ease-in-out">GitHub</h2>
            </a>
            <a href="https://leetcode.com/u/eaSc01" className="flex gap-1 md:gap-3 items-center">
              <LeetCodeIcon className="size-5" />
              <h2 className="hover:text-blue-500 transition-colors duration-200 ease-in-out">LeetCode</h2>
            </a>
            <a href="https://x.com/Ishant_Sikdar" className="flex gap-1 md:gap-3 items-center">
              <TwitterIcon className="size-5" />
              <h2 className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Twitter</h2>
            </a>
          </div>
        </div>

        <div className="md:1/3 flex flex-col jus">
          <p className="pb-2 md:pb-5 text-sm md:text-base text-cyan-500 font-medium ms-1">Others</p>

          <div className=" flex flex-col gap-2 md:gap-4">
            <div className="flex w-max items-center p-1">
              <div className="bg-white w-max m-auto rounded-full p-1 lg:p-2">
                <FileTextIcon className="text-black" />
              </div>
              <a href="/resume.pdf" download="resume-ishant-sikdar.pdf" className="px-2 text-sm hover:text-blue-500 transition-colors duration-200 ease-in-out">Resume</a>
            </div>

            <div className="flex items-center p-1 w-max">
              <div className="bg-white w-max m-auto rounded-full p-1 lg:p-2">
                <MailIcon className="text-black size-4" />
              </div>
              <a href="mailto:ishant9715@gmail.com" className="px-2 text-sm hover:text-blue-500 transition-colors duration-200 ease-in-out">ishant9715@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="font-medium mx-5 mb-4 text-xs md:text-base flex justify-between md:hidden">
      <h1>Ishant Sikdar © 2024</h1>
      <p>Delhi, India</p>
    </div>
  </div>
}