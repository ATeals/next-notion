"use client";

import { useScroll } from "@/feature/common/hooks/useScroll";

export const PageProgressBar = () => {
  const scrollHeight = useScroll();

  const isBrowser = typeof window !== "undefined";

  const scrollPercent = isBrowser
    ? (scrollHeight / (window.document.body.scrollHeight - window.innerHeight)) * 100
    : 0;

  return (
    <div
      className="progressBar h-[6px] fixed top-[50px] rounded-lg left-0 bg-gradient-to-r from-teal-500 to-green-300 z-[50]"
      style={{
        width: `${scrollPercent}%`,
      }}
    ></div>
  );
};
