'use client'

import { useScrollContext } from "src/contexts/ScrollContext";

export default function HomeRef() {
  const homeRef = useScrollContext()[0];
  return <div ref={homeRef}></div>
}