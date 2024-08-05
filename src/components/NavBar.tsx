export default function NavBar() {
  return (
    <div className="z-50 fixed top-0 w-full pt-4 font-light font-poppins">
      <div className="bg-pitch-black/50 backdrop-blur-md text-xs md:text-sm flex gap-2 w-max h-max mx-auto rounded-full p-2">
        <button className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white">
          Home
        </button>

        <button className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white">
          Experience
        </button>

        <button className="px-3 py-1 bg-transparent text-white rounded-full transition-colors duration-300 ease-in-out hover:bg-brown-white">
          Projects
        </button>
      </div>
    </div>
  );
}
