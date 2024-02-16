import { postService } from "@/service/post";
import { Suspense } from "react";
import { RandomQuotes } from "@/feature/common/components/RandomQuotes";
import { SnippetNav } from "./SnippetNav";
import { PostsFetcher } from "@/feature/post/components/ServerComponents/PostsFetcher";
import { SnippetPostList } from "./SnippetPostList";

export default ({ searchParams: { tag } }: { searchParams: { tag?: string } }) => {
  return (
    <section className="py-[48px] max-w-[680px] mx-auto">
      <h1 className="font-bold text-4xl my-5 px-5 dark:text-white">Snippet</h1>
      <RandomQuotes className="text-gray-500 px-5 dark:text-gray-400 mb-10" />

      <SnippetNav selectedTag={tag} />

      <Suspense
        fallback={<section className="mt-3 min-h-[800px] shadow" />}
        children={
          <PostsFetcher
            fetcher={() => postService.getSnippetPosts({ tag })}
            children={SnippetPostList}
          />
        }
      />
    </section>
  );
};
