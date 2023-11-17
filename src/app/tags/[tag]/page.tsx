import { LoadingIndicator } from "@/components/LoadingIndicator";
import { PostGrid } from "@/components/Post/PostGrid";
import { notionPostsFromTag } from "@/notion";
import { Suspense } from "react";

export default async ({ params: { tag } }: { params: { tag: string } }) => {
  const tagname = decodeURI(tag);

  return (
    <section className="mt-[80px]">
      <h1 className="font-bold text-4xl my-10 w-[70%] m-auto">{tagname}</h1>
      <hr className="border-b-2 border-b-black m-10" />
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
