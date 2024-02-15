import { LoopMDX } from "@/feature/MDX/components/LoopMDX";
import { postService } from "@/service/post";
import { Suspense } from "react";
import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { SnippetPost } from "@/feature/post/components/SnipentPost";
import { RandomQuotes } from "@/feature/common/components/RandomQuotes";
import { SnippetNav } from "./SnippetNav";
import ErrorBoundary from "@/feature/common/components/ErrorBoundary";

export default async ({ searchParams }: { searchParams?: { tag: string } }) => {
  const tagName = searchParams?.tag;

  const posts = await postService.getSnippetPosts({ tag: tagName });

  return (
    <section className="py-[48px] max-w-[680px] mx-auto">
      <h1 className="font-bold text-4xl my-5 px-5 dark:text-white">Snippet</h1>
      <RandomQuotes className="text-gray-500 px-5 dark:text-gray-400 mb-10" />

      <SnippetNav selectedTag={tagName} />

      <section className="mt-3 min-h-[800px] shadow">
        {posts.map((post) => (
          <SnippetPost key={post.id} post={post}>
            <Suspense fallback={<LoadingIndicator />}>
              <LoopMDX postId={post.id} />
            </Suspense>
          </SnippetPost>
        ))}
      </section>
    </section>
  );
};
