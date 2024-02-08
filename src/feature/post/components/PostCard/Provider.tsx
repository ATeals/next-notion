import { createContext } from "react";
import { PostInfo } from "../../type";

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
