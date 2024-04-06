import { postService } from "@/service/post";
import { SnippertsPost } from "./SnippetsPost";
import { RecursivePartialPost } from "@/feature/posts/PartialPost";
import { Suspense } from "react";

export const SnippetsPostList = async ({ tag }: { tag?: string }) => {
  const posts = await postService.getSnippetPosts({ tag });

  return posts.map((post) => {
    return (
      <Suspense key={post.id} fallback={<div></div>}>
        <SnippertsPost post={post}>
          <RecursivePartialPost postId={post.id} />
        </SnippertsPost>
      </Suspense>
    );
  });
};
