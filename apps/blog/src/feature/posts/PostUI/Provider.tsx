import { createContext, useContext } from "react";
import { PostInfo } from "../types";

export const PostUIContext = createContext<PostInfo | undefined>(undefined);

export const usePostUIContext = () => {
  const context = useContext(PostUIContext);

  if (!context) {
    throw new Error("usePostUIContext must be used within a PostUIContextProvider");
  }

  return context;
};

export const PostUIProvider = ({
  children,
  post,
}: {
  children: React.ReactNode;
  post: PostInfo;
}) => {
  return <PostUIContext.Provider value={post}>{children}</PostUIContext.Provider>;
};
