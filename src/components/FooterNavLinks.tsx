'use client'

import { useScrollContext } from "src/contexts/ScrollContext";
import { scrollToView } from "src/lib/utils"

export default function FooterNavLinks() {
  const [homeRef, experienceRef, projectRef] = useScrollContext();

  return <>
    <button onClick={() => scrollToView(homeRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Home</button>
    <button onClick={() => scrollToView(experienceRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Experience</button>
    <button onClick={() => scrollToView(projectRef)} className="hover:text-blue-500 transition-colors duration-200 ease-in-out">Projects</button>
  </>
}