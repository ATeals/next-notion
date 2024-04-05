"use client";

import { PostInfo, PostUI } from "@/feature/posts";

export const PostHeader = ({ post }: { post: PostInfo }) => {
  return (
    <PostUI post={post}>
      <div className="relative top-0 h-screen w-full md:h-auto max-h-screen mt-[-46px] sm:rounded-lg overflow-hidden">
        <PostUI.Image className="h-full md:h-auto" />
      </div>
    </PostUI>
  );
};

export const SkeletonPostHeader = () => {
  return <div className="w-full h-screen relative inset-0 bg-gray-300 animate-pulse"></div>;
};
