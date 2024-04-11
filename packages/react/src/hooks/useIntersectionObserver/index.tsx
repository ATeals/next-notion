"use client";

import { useCallback, useRef } from "react";

export const useIntersectionObserver = ({
  onIntersecting,
  option,
}: {
  onIntersecting?: (entries?: IntersectionObserverEntry[]) => unknown;
  option?: IntersectionObserverInit;
} = {}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: HTMLDivElement) => {
      if (!node) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            if (onIntersecting) onIntersecting(entries);
          }
        },
        { rootMargin: "-50px 0px -700px 0px", ...option }
      );

      observerRef.current.observe(node);
    },
    [onIntersecting]
  );

  return {
    ref,
  };
};
