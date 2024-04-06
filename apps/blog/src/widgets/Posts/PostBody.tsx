import { RecursivePartialPost } from "@/feature/posts/PartialPost";
import { PostMarkdownWapper } from "./PostMarkdownWapper";

export const PostBody = ({ id }: { id: string }) => {
  return (
    <PostMarkdownWapper>
      <RecursivePartialPost postId={id} />
    </PostMarkdownWapper>
  );
};
