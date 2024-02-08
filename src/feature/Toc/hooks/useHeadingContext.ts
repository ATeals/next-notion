import { useContext } from "react";
import { HeadingsContext } from "../components/TocProvider";
import { ComponentError } from "@/feature/post/components/PostCard";

export const useHeadingContext = () => {
  const headings = useContext(HeadingsContext);

  if (!headings)
    throw new ComponentError({
      type: "ContextError",
      message: "headings 는 useSetHeadingContext 에서 필수입니다.",
    });

  return headings;
};
