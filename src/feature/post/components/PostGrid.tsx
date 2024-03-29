"use client";

import { PostCard } from "@/feature/post/components/PostCard";
import Link from "next/link";
import { PostInfo } from "../type";

export const PostGrid = ({ posts }: { posts: Array<PostInfo> }) => {
  return (
    <section className="px-5 md:px-20 m-auto max-w-[1200px]">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[1rem] flex-col">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post}>
            <Link href={`/posts/${post.id}`}>
              <PostCard.Image />
            </Link>
            <PostCard.Tags />
            <Link href={`/posts/${post.id}`}>
              <PostCard.Title />
              <PostCard.Description />
              <PostCard.ElapsedTimeLine />
            </Link>
          </PostCard>
        ))}
      </section>
    </section>
  );
};
