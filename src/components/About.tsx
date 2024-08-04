export default function About() {
  return <div className="flex flex-col gap-16 text-warm-white font-poppins  py-16">
    <div className="text-left w-[55%]">
      <p className="text-3xl">I'm a <span className="text-purple-500">Software Engineering</span> Student,</p>
      <p className="text-4xl">Specialising in develop and deploying <span className="text-orange-300">scalable web applications</span>.</p>
    </div>

    <div className="text-right flex flex-col items-end">
      <div className="w-[70%]">
        <p className="text-3xl">I expertise in building apps on <span className="px-2 bg-warm-white font-bold text-pitch-black rounded-md">Java</span> and <span className="px-2 bg-warm-white font-bold text-pitch-black rounded-md">TypeScript</span></p>
        <p className="text-4xl">Currently working on <span className="text-cyan-400">Next.js</span> and <span className="text-orange-300">Spring Boot</span> with <span className="text-purple-500">Cloud Computing</span>.</p>
      </div>
    </div>
  </div>
}