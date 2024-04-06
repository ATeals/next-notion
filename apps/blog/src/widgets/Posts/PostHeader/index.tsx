import { postService } from "@/service/post";
import { PostHeader, SkeletonPostHeader } from "./PostHeader";

export const PostHeaderFecther = async ({ id }: { id: string }) => {
  const post = await postService.getPostInfoById(id);

  return <PostHeader post={post} />;
};

export { SkeletonPostHeader };
