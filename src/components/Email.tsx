import { MailIcon } from "./Icons";

export const Email = () => (
  <div className="flex items-center z-50 bg-pitch-black/50 backdrop-blur-md fixed bottom-5 right-5 rounded-full border-2 border-brown-white p-1">
    <div className="bg-white w-max m-auto rounded-full p-1 lg:p-2">
      <MailIcon className="text-black" />
    </div>

    <a href="mailto:ishant9715@gmail.com" className="px-2 text-xs lg:text-base">ishant9715@gmail.com</a>
  </div>
)