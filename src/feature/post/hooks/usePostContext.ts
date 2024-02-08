import { useContext } from "react";
import { PostContext } from "../components/PostCard/Provider";
import { ComponentError } from "../components/PostCard";

export const usePostContext = () => {
  const post = useContext(PostContext);

  if (!post)
    throw new ComponentError({
      type: "ContextError",
      message: "PostContext 에서 Post가 필수입니다.",
    });

  return post;
};
