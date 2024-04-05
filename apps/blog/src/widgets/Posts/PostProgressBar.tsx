"use client";

import { ProgressBar } from "@/atom";
import { DEFAULT_PAGE_WIDTH } from "@/config";
import { useScroll } from "@repo/react";

export const PostProgressBar = () => {
  const scrollHeight = useScroll();

  const windowHeight = document.body.scrollHeight - window.innerHeight;

  return (
    <ProgressBar
      className="fixed shadow-inner z-10 top-12 h-2 rounded-lg"
      barStyle="drop-shadow-lg bg-gradient-to-r from-primary-lg to-primary-sm dark:shadow-zinc-950"
      current={scrollHeight}
      max={windowHeight}
      style={{ maxWidth: DEFAULT_PAGE_WIDTH, width: "100%" }}
    />
  );
};
