import { LoadingIndicator } from "@/components/LoadingIndicator";
import { PostGrid } from "@/components/Post/PostGrid";
import { PostList } from "@/components/Post/PostList";
import { notionPostsFromTag } from "@/notion";
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
          children={<PostList fetcher={() => notionPostsFromTag(tagname)} />}
        />
      </section>
    </section>
  );
};
