import { LoopMDX } from "@/feature/MDX/components/LoopMDX";
import { SnippetPost } from "@/feature/post/components/SnipentPost";
import { PostInfo } from "@/feature/post/type";
import { Suspense } from "react";

export const SnippetPostList = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <section className="mt-3 min-h-[800px] shadow">
      {posts.map((post) => (
        <SnippetPost key={post.id} post={post}>
          <Suspense fallback={<></>}>
            <LoopMDX postId={post.id} />
          </Suspense>
        </SnippetPost>
      ))}
    </section>
  );
};
