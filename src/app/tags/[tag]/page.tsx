import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { PostList } from "@/feature/post/components/PostList";
import { PostsFetcher } from "@/feature/post/components/ServerComponents/PostsFetcher";
import { notionPostsFromTag } from "@/service/notion";
import { PostInfo } from "@/service/notion/type";
import { Suspense } from "react";

export default async ({ params: { tag } }: { params: { tag: string } }) => {
  const tagname = decodeURI(tag);

  return (
    <section className="dark:text-white">
      <h1 className="font-bold text-4xl my-5 px-10 md:px-20">{tagname}</h1>
      <section className="md:max-m-10 m-auto">
        <Suspense
          fallback={
            <div className="flex justify-center">
              <LoadingIndicator />
            </div>
          }
          children={
            <PostsFetcher
              children={({ posts }: { posts: PostInfo[] }) => <PostList posts={posts} />}
              fetcher={() => notionPostsFromTag(tagname)}
            />
          }
        />
      </section>
    </section>
  );
};
