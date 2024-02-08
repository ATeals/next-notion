import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { notionPosts } from "@/service/notion";
import { Suspense } from "react";
import { PostGrid } from "@/feature/post/components/PostGrid";
import { PostsFetcher } from "@/feature/post/components/ServerComponents/PostsFetcher";
import { PostInfo } from "@/service/notion/type";
import { MainImage } from "@/feature/common/components/MainImage";

export default async () => {
  return (
    <section>
      <MainImage />
      <div className="background min-h-[680px] z-10">
        <Suspense
          fallback={<LoadingIndicator />}
          children={
            <PostsFetcher
              children={({ posts }: { posts: PostInfo[] }) => <PostGrid posts={posts} />}
              fetcher={() =>
                notionPosts({
                  filter: [
                    {
                      property: "snippet",
                      checkbox: {
                        equals: false,
                      },
                    },
                  ],
                })
              }
            />
          }
        />
      </div>
    </section>
  );
};
