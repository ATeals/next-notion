"use client";

import { ProgressBar } from "@/atom";
import { DEFAULT_PAGE_WIDTH } from "@/config";
import { useScroll } from "@repo/react";

export const PostProgressBar = () => {
  const scrollHeight = useScroll();

  const windowHeight = document.body.scrollHeight - window.innerHeight;

  console.log(windowHeight, scrollHeight);

  return (
    <ProgressBar
      className="fixed shadow-inner z-10 top-12 h-2 rounded-lg"
      barStyle="shadow-lg bg-gradient-to-r from-primary-lg to-primary-sm"
      current={scrollHeight}
      max={windowHeight}
      style={{ maxWidth: DEFAULT_PAGE_WIDTH, width: "100%" }}
    />
  );
};
