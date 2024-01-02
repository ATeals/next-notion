"use client";

import { ReactNode, SetStateAction, useState } from "react";
import { TocHeading } from "./type";
import { createContext } from "react";

export const HeadingsContext = createContext<TocHeading[]>([]);
export const SetHeadingContext = createContext<{
  setter: (dispatcher: SetStateAction<TocHeading[]>) => void;
}>({ setter: () => {} });

export const TocProvider = ({ children }: { children: ReactNode }) => {
  const [headings, setter] = useState<TocHeading[]>([]);

  return (
    <HeadingsContext.Provider value={headings}>
      <SetHeadingContext.Provider value={{ setter }}>{children}</SetHeadingContext.Provider>
    </HeadingsContext.Provider>
  );
};
