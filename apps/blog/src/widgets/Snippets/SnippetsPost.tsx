"use client";

import { PostInfo, PostUI } from "@/feature/posts";
import { SnippetsMarkdownWapper } from "./SnippetsMarkdownWapper";
import { DividerLine, Icon } from "@/atom";
import { BLOG_CONFIG } from "@/config";
import { useState } from "react";
import Link from "next/link";

export const SnippertsPost = ({
  post,
  children,
}: {
  post: PostInfo;
  children: React.ReactNode;
}) => {
  const handleCopyClick = (link: string) => {
    navigator.clipboard.writeText(link);
    setIsClicked(true);
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <SnippetsMarkdownWapper>
      <div className="group">
        <PostUI post={post}>
          <div className="flex justify-between items-end">
            <div className="flex items-end gap-2">
              <PostUI.Icon />

              <Link href={`${BLOG_CONFIG.PATH.POSTS}/${post.id}`} className="no-underline">
                <PostUI.Title />
              </Link>
            </div>

            <div className="hidden group-hover:flex items-end gap-2">
              {isClicked && <span className="text-primary">Copied!</span>}
              <Icon
                onClick={() =>
                  handleCopyClick(`${BLOG_CONFIG.DOMAIN}${BLOG_CONFIG.PATH.POSTS}/${post.id}`)
                }
                icon="send"
                className="animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          {children}
          <PostUI.Footer />
        </PostUI>
        <DividerLine className="border-primary-lg mt-5" />
      </div>
    </SnippetsMarkdownWapper>
  );
};
