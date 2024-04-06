"use client";

import { PostInfo, PostUI } from "@/feature/posts";

export const PostHeader = ({ post }: { post: PostInfo }) => {
  return (
    <PostUI post={post}>
      <div className="animate-fadeIn relative top-0 h-screen w-full md:h-auto max-h-screen mt-[-46px] sm:rounded-lg overflow-hidden">
        <PostUI.Image className="h-full w-full  md:h-auto relative ">
          <section className="absolute w-full z-20 bottom-0 p-5 drop-shadow-lg dark:shadow-zinc-950">
            <PostUI.Icon size="xl" />
            <PostUI.Title className="my-5 text-white" />
            <PostUI.Description className="text-gray-300" />
            <PostUI.Footer />
          </section>
        </PostUI.Image>
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 z-10 "></div>
      </div>
    </PostUI>
  );
};

export const SkeletonPostHeader = () => {
  return (
    <div className="w-full h-screen md:h-[400px] relative inset-0 bg-gray-300 animate-pulse"></div>
  );
};
