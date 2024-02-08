import { PostInfo } from "@/service/notion/type";
import { createContext } from "react";

export const PostContext = createContext<PostInfo | undefined>(undefined);

export const Provider = ({ post, children }: { post: PostInfo; children: React.ReactNode }) => {
  return (
    <PostContext.Provider value={post}>
      <div key={post.id} className="group">
        {children}
      </div>
    </PostContext.Provider>
  );
};
