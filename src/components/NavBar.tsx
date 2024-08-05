import { useEffect, useState } from "react";
import { useScrollContext } from "../contexts/ScrollContext";
import { scrollToView } from "../lib/utils";

export default function NavBar() {
  const [homeRef, experienceRef, projectRef] = useScrollContext();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    let navbarDisapperTimer: NodeJS.Timeout;

    // start timer no matter if scrolled or not
    navbarDisapperTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Reset the timer on every scroll event
      clearTimeout(navbarDisapperTimer);

      // Show or hide navbar based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(navbarDisapperTimer);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`z-50 fixed top-0 w-full pt-4 font-light font-poppins transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-pitch-black/50 backdrop-blur-md text-xs md:text-sm flex gap-2 w-max h-max mx-auto rounded-full p-2">
        <button
          onClick={() => scrollToView(homeRef)}
          className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white"
        >
          Home
        </button>

        <button
          onClick={() => scrollToView(experienceRef)}
          className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white"
        >
          Experience
        </button>

        <button
          onClick={() => scrollToView(projectRef)}
          className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white"
        >
          Projects
        </button>
      </div>
    </div>
  );
}
