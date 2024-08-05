import { useScrollContext } from "../contexts/ScrollContext";
import { scrollToView } from "../lib/utils";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon, TwitterIcon } from "./Icons";

export default function Footer() {
  const [homeRef, experienceRef, projectRef] = useScrollContext();

  return <div>
    <div className="p-10 mx-4 mb-4 flex justify-between font-poppins border border-warm-white/20 rounded-xl">
      <div className="w-1/4">
        <p className="text-2xl">
          Delivering <span className="text-cyan-500">Precision</span> and <span className="text-purple-500">Performance</span> in Tech
        </p>
      </div>

      <div className="w-1/4 h-full">
        <p className="pb-5 text-orange-300 font-medium">Explore More</p>

        <div className="flex items-start flex-col gap-2">
          <button onClick={() => scrollToView(homeRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Home</button>
          <button onClick={() => scrollToView(experienceRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Experience</button>
          <button onClick={() => scrollToView(projectRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Projects</button>
        </div>
      </div>

      <div className="w-1/4 h-full">
        <p className="pb-5 text-green-500 font-medium">Socials</p>

        <div className="flex items-start flex-col text-sm gap-3">
          <a href="https://www.linkedin.com/in/ishantsikdar" className="flex gap-3 items-center">
            <LinkedInIcon className="size-5" />
            <p className="hover:text-blue-500 transition-colors duration-200 ease-in-out">LinkedIn</p>
          </a>
          <a href="https://github.com/ishantSikdar" className="flex gap-3 items-center">
            <GitHubIcon className="size-5" />
            <p className="hover:text-blue-500 transition-colors duration-200 ease-in-out">GitHub</p>
          </a>
          <a href="https://leetcode.com/u/eaSc01" className="flex gap-3 items-center">
            <LeetCodeIcon className="size-5" />
            <p className="hover:text-blue-500 transition-colors duration-200 ease-in-out">LeetCode</p>
          </a>
          <a href="https://x.com/Ishant_Sikdar" className="flex gap-3 items-center">
            <TwitterIcon className="size-5" />
            <p className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Twitter</p>
          </a>
        </div>
      </div>
    </div>

    <p className="ms-5 mb-4">Ishant Sikdar © 2024</p>
  </div>
}