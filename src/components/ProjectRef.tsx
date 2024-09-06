'use client'

import { useScrollContext } from "src/contexts/ScrollContext";

export default function ProjectRef() {
  const projectRef = useScrollContext()[2];
  return <div ref={projectRef}></div>
}