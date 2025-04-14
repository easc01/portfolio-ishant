export default function About() {
  return (
    <div className="flex flex-col gap-4 md:gap-10 text-white  py-16">
      <div className="text-left md:w-[55%]">
        <h2 className="text-xl md:text-4xl">
          I specialize in developing and deploying{" "}
          <span className="text-orange-300">scalable web applications</span>.
        </h2>
      </div>

      <div className="w-[80%] h-[1px] mx-auto bg-white"></div>

      <div className="md:text-right  flex flex-col items-end">
        <div className="md:w-[70%]">
          <h2 className="md:text-3xl">
            I expertise in building apps on{" "}
            <span className="px-2 bg-white font-bold text-pitch-black rounded-md">
              Java
            </span>{" "}
            and{" "}
            <span className="px-2 bg-white font-bold text-pitch-black rounded-md">
              TypeScript
            </span>
          </h2>
          <h2 className="text-xl md:text-4xl">
            Currently working on <span className="text-cyan-400">Golang</span>,{" "}
            <span className="text-orange-300">Nest.js</span> <br /> and{" "}
            <span className="text-purple-500">AWS</span>.
          </h2>
        </div>
      </div>
    </div>
  );
}
