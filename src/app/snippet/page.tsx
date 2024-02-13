import { LoopMDX } from "@/feature/MDX/components/LoopMDX";
import { postService } from "@/service/post";
import { Suspense } from "react";
import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { RandomQuotes } from "@/feature/common/components/RandomQuotes";
import { SnippetPost } from "@/feature/post/components/SnipentPost";

export default async () => {
  const posts = await postService.getSnippetPosts();

  return (
    <section className="py-[48px] max-w-[680px] mx-auto">
      <h1 className="font-bold text-4xl my-5 px-5 dark:text-white">Snippet</h1>
      <RandomQuotes className="text-gray-500 px-5 dark:text-gray-400 mb-10" />

      {posts.map((post) => (
        <SnippetPost key={post.id} post={post}>
          <Suspense fallback={<LoadingIndicator />}>
            <LoopMDX postId={post.id} />
          </Suspense>
        </SnippetPost>
      ))}
    </section>
  );
};
