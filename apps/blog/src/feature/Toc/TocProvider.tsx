"use client";

import { ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import { TocHeading } from "./type";

export const HeadingsContext = createContext<TocHeading[]>([]);
export const SetHeadingContext = createContext<{
  setter: (dispatcher: SetStateAction<TocHeading[]>) => void;
}>({ setter: () => {} });

export const TocProvider = ({ children }: { children: ReactNode }) => {
  const [headings, setter] = useState<TocHeading[]>([]);

  return (
    <SetHeadingContext.Provider value={{ setter }}>
      <HeadingsContext.Provider value={headings}>{children}</HeadingsContext.Provider>
    </SetHeadingContext.Provider>
  );
};
