import { useContext } from "react";
import { SetHeadingContext } from "../components/TocProvider";
import { ComponentError } from "@/feature/post/components/PostCard";

export const useHeadingActionsContext = () => {
  const { setter } = useContext(SetHeadingContext);

  if (!setter)
    throw new ComponentError({
      type: "ContextError",
      message: "setter는 useSetHeadingContext에서 필수입니다.",
    });

  return { setter };
};
