"use client";

import { PostInfo, PostUI } from "@/feature/posts";
import { SnippetsMarkdownWapper } from "./SnippetsMarkdownWapper";
import { DividerLine } from "@/atom";

export const SnippertsPost = ({
  post,
  children,
}: {
  post: PostInfo;
  children: React.ReactNode;
}) => {
  return (
    <SnippetsMarkdownWapper>
      <PostUI post={post}>
        <PostUI.Title />
        {children}
        <PostUI.Footer />
      </PostUI>
      <DividerLine className="border-primary-lg mt-5" />
    </SnippetsMarkdownWapper>
  );
};
