import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { Suspense } from "react";
import { PostGrid } from "@/feature/post/components/PostGrid";
import { PostsFetcher } from "@/feature/post/components/ServerComponents/PostsFetcher";
import { MainImage } from "@/feature/common/components/MainImage";
import { postService } from "@/service/post";
import { PostInfo } from "@/feature/post/type";

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
                postService.getPosts({
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
