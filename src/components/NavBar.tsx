import { useScrollContext } from "../contexts/ScrollContext";
import { scrollToView } from "../lib/utils";

export default function NavBar() {
  const [homeRef, experienceRef, projectRef] = useScrollContext();

  return (
    <div className="z-50 fixed top-0 w-full pt-4 font-light font-poppins">
      <div className="bg-pitch-black/50 backdrop-blur-md text-xs md:text-sm flex gap-2 w-max h-max mx-auto rounded-full p-2">
        <button onClick={() => scrollToView(homeRef)} className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white">
          Home
        </button>

        <button onClick={() => scrollToView(experienceRef)} className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white">
          Experience
        </button>

        <button onClick={() => scrollToView(projectRef)} className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white">
          Projects
        </button>
      </div>
    </div>
  );
}
