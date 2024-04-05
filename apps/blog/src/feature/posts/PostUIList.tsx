"use client";

import Link from "next/link";
import { PostUI } from "./PostUI";
import { PostInfo } from "./types";
import { BLOG_CONFIG } from "@/config";

export const PostUIList = ({ posts }: { posts: PostInfo[] }) => {
  return posts.map((post) => (
    <Link key={post.id} href={`${BLOG_CONFIG.PATH.POSTS}/${post.id}`}>
      <PostUI post={post}>
        <PostUI.Wapper className="md:flex md:h-[200px]">
          <PostUI.Image className="relative w-full h-[200px] md:h-full md:w-1/3 rounded-lg">
            <PostUI.Icon className="absolute top-0 left-0 m-2" />
          </PostUI.Image>

          <div className="relative w-full md:w-2/3 p-4">
            <PostUI.Title />
            <PostUI.Description className="max-h-[100px] py-5 text-gray-400" />
            <PostUI.Footer className="absolute left-0 bottom-0 p-2 px-4" />
          </div>
        </PostUI.Wapper>
      </PostUI>
    </Link>
  ));
};
