"use client";

import { SITE_CONFIG } from "@/config";
import { PostCard } from "@/feature/post/components/PostCard";
import { PostInfo } from "@/feature/post/type";
import Link from "next/link";
import { SnippetPostMarkdownWapper } from "@/feature/post/components/SnipentPost/SnippetPostMarkdownWapper";
import { CopyLinkButton } from "@/feature/common/components/CopyLinkButton";

export const SnippetPost = ({ children, post }: { children: React.ReactNode; post: PostInfo }) => {
  return (
    <SnippetPostMarkdownWapper>
      <PostCard post={post}>
        <div className="flex items-baseline group/header">
          <Link href={`/posts/${post.id}`} className="no-underline mr-2">
            <PostCard.Title />
          </Link>
          <CopyLinkButton
            url={`${SITE_CONFIG.url}posts/${post.id}`}
            className="hidden group-hover/header:block"
          />
        </div>
        <PostCard.TimeLine />

        {children}

        <PostCard.Tags />
      </PostCard>
      <hr />
    </SnippetPostMarkdownWapper>
  );
};
