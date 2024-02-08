import { notionPosts } from "@/service/notion";
import { Suspense } from "react";
import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { PostsFetcher } from "@/feature/post/components/ServerComponents/PostsFetcher";
import { PostInfo } from "@/service/notion/type";
import { PostList } from "@/feature/post/components/PostList";

export default async () => {
  return (
    <section className="dark:text-white">
      <h1 className="font-bold text-4xl my-5 px-10 md:px-20">ALL Post</h1>
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
              fetcher={() => notionPosts()}
            />
          }
        />
      </section>
    </section>
  );
};
