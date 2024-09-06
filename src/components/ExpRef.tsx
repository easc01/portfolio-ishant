'use client'

import { useScrollContext } from "src/contexts/ScrollContext";

export default function ExpRef() {
  const expRef = useScrollContext()[1];
  return <div ref={expRef}></div>
}