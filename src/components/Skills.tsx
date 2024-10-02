import DotPattern from "../../@/components/magicui/dot-pattern";
import { cn } from "../../@/lib/utils";
import { AWSIcon, DjangoIcon, DockerIcon, ExpressJSIcon, FlaskIcon, GitIcon, JavaIcon, JavaScriptIcon, KubernetesIcon, LinuxIcon, MongoDBIcon, NextJSIcon, NodeJSIcon, PostgreSQLIcon, PythonIcon, ReactJSIcon, RecoilJSIcon, RedisIcon, ReduxIcon, SpringBootIcon, TailwindIcon, TypeScriptIcon } from "./Icons";

export default function Skills() {
  return <div className="relative pb-14">
    <DotPattern
      color="#ffffff"
      opacity={0.2}
      className={cn(
        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] ",
      )}
    />

    <div className="z-50">
      <div className="flex items-center gap-4 py-4">
        <h1 className="md:text-center text-4xl lg:text-5xl font-thin text-nowrap">My Tech Stack</h1>
        <div className="w-full h-[1px] bg-warm-white"></div>
      </div>

      <div className="px-5">
        <h2 className="md:text-center text-sm md:text-lg lg:text-2xl py-4">I apply my knowledge of different <span className="text-orange-300">technologies</span> to deliver <span className="text-cyan-500">practical solutions</span> across multiple platforms</h2>

        <div className="mt-12 flex gap-10 flex-wrap justify-center items-center">
          <JavaIcon size={80} />
          <SpringBootIcon size={80} />
          <TypeScriptIcon size={80} />
          <NextJSIcon size={70} />
          <PostgreSQLIcon size={80} />
          <DockerIcon size={80} />
          <RedisIcon size={80} />
          <ReactJSIcon size={80} />
          <RecoilJSIcon size={70} />
          <MongoDBIcon size={80} />
          <NodeJSIcon size={80} />
          <ExpressJSIcon size={80} />
          <AWSIcon size={80} />
          {/* <KubernetesIcon size={70} /> */}
          <LinuxIcon size={80} />
          <GitIcon size={80} />
          <JavaScriptIcon size={80} />
          <TailwindIcon size={80} />
          {/* <ReduxIcon size={70} /> */}
          {/* <PythonIcon size={70} /> */}
          {/* <FlaskIcon size={70} /> */}
          {/* <DjangoIcon size={70} /> */}
        </div>
      </div>
    </div>
  </div>
}