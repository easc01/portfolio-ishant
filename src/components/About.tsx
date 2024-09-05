export default function About() {
  return <div className="flex flex-col gap-4 md:gap-10 text-white  py-16">
    <div className="text-left md:w-[55%]">
      <h1 className="md:text-3xl">I'm a <span className="text-purple-500">Software Engineering</span> Student,</h1>
      <h1 className="text-xl md:text-4xl">Specialising in develop and deploying <span className="text-orange-300">scalable web applications</span>.</h1>
    </div>

    <div className="w-[80%] h-[1px] mx-auto bg-white"></div>

    <div className="md:text-right  flex flex-col items-end">
      <div className="md:w-[70%]">
        <h1 className="md:text-3xl">I expertise in building apps on <span className="px-2 bg-white font-bold text-pitch-black rounded-md">Java</span> and <span className="px-2 bg-white font-bold text-pitch-black rounded-md">TypeScript</span></h1>
        <h1 className="text-xl md:text-4xl">Currently working on <span className="text-cyan-400">Next.js</span> and <span className="text-orange-300">Spring Boot</span> with <span className="text-purple-500">Cloud Computing</span>.</h1>
      </div>
    </div>
  </div>
}