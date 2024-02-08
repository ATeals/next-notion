"use client";

import { PostInfo } from "../type";
import { PostCard } from "./PostCard";
import Link from "next/link";

export const PostList = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <section className="px-5 md:px-20 m-auto max-w-[1200px]">
      <section className="[&>*]:mb-10">
        {posts?.map((post) => (
          <PostCard post={post} key={post.id}>
            <PostCard key={post.id} post={post}>
              <Link href={`posts/${post.id}`}>
                <PostCard.Image />
              </Link>
              <PostCard.Tags />
              <Link href={`posts/${post.id}`}>
                <PostCard.Title />
                <PostCard.Description />
                <PostCard.TimeLine />
              </Link>
            </PostCard>
          </PostCard>
        ))}
      </section>
    </section>
  );
};
