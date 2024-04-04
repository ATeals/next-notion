"use client";

import { PostUI } from "./PostUI";
import { PostInfo } from "./types";

export const PostUIList = ({ posts }: { posts: PostInfo[] }) => {
  return posts.map((post) => (
    <PostUI key={post.id} post={post}>
      <PostUI.Wapper className="flex">
        <PostUI.Image className="relative w-1/3">
          <PostUI.Icon className="absolute top-0 left-0 m-2" />
        </PostUI.Image>

        <div className="relative w-2/3 p-4">
          <PostUI.Title />
          <PostUI.Description />
          <PostUI.Footer className="absolute left-0 bottom-0" />
        </div>
      </PostUI.Wapper>
    </PostUI>
  ));
};
