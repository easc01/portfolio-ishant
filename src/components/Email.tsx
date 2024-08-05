import { FileTextIcon } from "@radix-ui/react-icons";
import { MailIcon } from "./Icons";

export const Email = () => (
  <div className="fixed bottom-5 right-5 flex flex-col items-end gap-3 z-50">
    <div className="flex w-max items-center bg-pitch-black/50 backdrop-blur-md  rounded-full border-2 border-brown-white p-1">
      <div className="bg-white w-max m-auto rounded-full p-1 lg:p-2">
        <FileTextIcon className="text-black" />
      </div>
      <a href="/resume.pdf" download="resume-ishant-sikdar.pdf" className="px-2 text-xs lg:text-base">Resume</a>
    </div>

    <div className="flex items-center bg-pitch-black/50 backdrop-blur-md  rounded-full border-2 border-brown-white p-1">
      <div className="bg-white w-max m-auto rounded-full p-1 lg:p-2">
        <MailIcon className="text-black" />
      </div>
      <a href="mailto:ishant9715@gmail.com" className="px-2 text-xs lg:text-base">ishant9715@gmail.com</a>
    </div>
  </div>
)