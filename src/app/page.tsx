import { LoadingIndicator } from "@/components/LoadingIndicator";
import { PostGrid } from "@/components/Post/PostGrid";
import { notionPosts } from "@/notion";
import { Suspense } from "react";

export default async () => {
  return (
    <section>
      <div className="relative h-[450px] w-screen">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${"/images/main.webp"})`,
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-gray-200 text-4xl italic">Teals Blog</h1>
          <h1 className="text-gray-200 text-xl"></h1>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <Suspense fallback={<LoadingIndicator />} children={<PostGrid fetcher={notionPosts} />} />
    </section>
  );
};
