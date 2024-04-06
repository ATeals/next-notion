import { useContext } from "react";
import { HeadingsContext } from "./TocProvider";

export const useHeadingContext = () => {
  const headings = useContext(HeadingsContext);

  if (!headings) throw new Error("useHeadingContext must be used within a TocProvider component");

  return headings;
};
