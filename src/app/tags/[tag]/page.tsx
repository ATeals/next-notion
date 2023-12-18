import { LoadingIndicator } from "@/components/LoadingIndicator";
import { PostGrid } from "@/components/Post/PostGrid";
import { notionPostsFromTag } from "@/notion";
import { Suspense } from "react";

export default async ({ params: { tag } }: { params: { tag: string } }) => {
  const tagname = decodeURI(tag);

  return (
    <section className="mt-[80px] dark:text-white">
      <h1 className="font-bold text-4xl my-10 xl:w-[1200px] px-20 mx-auto">{tagname}</h1>
      <section className="md:max-m-10 m-auto">
        <Suspense
          fallback={
            <div className="flex justify-center">
              <LoadingIndicator />
            </div>
          }
          children={<PostGrid fetcher={() => notionPostsFromTag(tagname)} />}
        />
      </section>
    </section>
  );
};
