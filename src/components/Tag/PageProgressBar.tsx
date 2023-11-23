"use client";

import { useScroll } from "@/hooks/useScroll";
import { useEffect, useState } from "react";

export const PageProgressBar = () => {
  const scrollHeight = useScroll();

  const scrollPercent = (scrollHeight / (document.body.scrollHeight - window.innerHeight)) * 100;

  return (
    <div
      className="progressBar h-[6px] fixed top-[40px] rounded-lg left-0 bg-gradient-to-r from-teal-500 to-green-300 z-[50]"
      style={{
        width: `${scrollPercent}%`,
      }}
    ></div>
  );
};
