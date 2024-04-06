import { useContext } from "react";
import { SetHeadingContext } from "./TocProvider";

export const useHeadingActionsContext = () => {
  const { setter } = useContext(SetHeadingContext);

  if (!setter)
    throw new Error("useHeadingActionsContext must be used within a TocProvider component");

  return { setter };
};
