import { FileTextIcon } from "@radix-ui/react-icons";
import { Dock, DockIcon } from "../../@/components/magicui/dock";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon, MailIcon, MediumIcon, TwitterIcon } from "./Icons";
import Tooltip from "./Tooltip";

export default function SocialsDock() {
  return (
    <div className="relative">
      <Dock className="rounded-xl bg-pitch-black/50  border-0 h-[60px]" direction="middle">
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <Tooltip text="LinkedIn">
            <a href="https://linkedin.com/in/ishantsikdar" target="_blank" >
              <LinkedInIcon className="size-6" />
            </a>
          </Tooltip>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <Tooltip text="Medium">
            <a href="https://medium.com/@ishantsikdar93" target="_blank" >
              <MediumIcon className="size-7" />
            </a>
          </Tooltip>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <Tooltip text="GitHub">
            <a href="https://github.com/ishantSikdar" target="_blank">
              <GitHubIcon className="size-6" />
            </a>
          </Tooltip>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <Tooltip text="LeetCode">
            <a href="https://leetcode.com/u/eaSc01" target="_blank">
              <LeetCodeIcon className="size-7" />
            </a>
          </Tooltip>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <Tooltip text="Twitter">
            <a href="https://x.com/Ishant_Sikdar" target="_blank">
              <TwitterIcon className="size-8" />
            </a>
          </Tooltip>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <Tooltip text="Download Resume" className="w-max">
            <a href="/resume.pdf" target="_blank">
              <FileTextIcon className="size-6" />
            </a>
          </Tooltip>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <Tooltip text="Mail">
            <a href="mailto:ishant9715@gmail.com" target="_blank">
              <MailIcon className="size-6 text-white" />
            </a>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}

