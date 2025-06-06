"use client";

import Lenis from "@studio-freight/lenis";
import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  useEffect,
} from "react";

type ScrollContextType = [
  React.RefObject<HTMLDivElement>,
  React.RefObject<HTMLDivElement>,
  React.RefObject<HTMLDivElement>
];

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ScrollContext.Provider value={[homeRef, experienceRef, projectRef]}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === null) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
