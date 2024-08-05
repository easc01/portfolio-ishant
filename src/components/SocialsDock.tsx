import React from "react";

import { Dock, DockIcon } from "../../@/components/magicui/dock";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon, TwitterIcon } from "./Icons";

export default function DockDemo() {
  return (
    <div className="relative">
      <Dock className="rounded-xl bg-pitch-black/50  border-0" direction="middle">
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <a href="https://linkedin.com/in/ishantsikdar" target="_blank" >
            <LinkedInIcon className="size-6" />
          </a>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <a href="https://github.com/ishantSikdar/" target="_blank">
            <GitHubIcon className="size-6" />
          </a>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <a href="https://leetcode.com/u/eaSc01/" target="_blank">
            <LeetCodeIcon className="size-6" />
          </a>
        </DockIcon>
        <DockIcon className="transition-colors duration-300 ease-in-out hover:bg-brown-white p-1">
          <a href="https://x.com/Ishant_Sikdar" target="_blank">
            <TwitterIcon className="size-6" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

