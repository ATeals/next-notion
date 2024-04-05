import { TocHeading } from "@/feature/Toc/type";
import { useHeadingActionsContext } from "@/feature/Toc/useHeadingActionsContext";
import { useIntersectionObserver } from "@repo/react";
import { useEffect } from "react";

export const useHeading = (heading: TocHeading) => {
  const { setter } = useHeadingActionsContext();
  const { ref } = useIntersectionObserver({
    onIntersecting: () => {
      setter((headings) => {
        const copy = headings.map((i) => ({ ...i, isInViewport: false }));
        const index = copy.findIndex((i) => i.text === heading.text);
        copy.splice(index, 1, { ...copy[index], isInViewport: true });
        return copy;
      });
    },
    option: { threshold: 0.2 },
  });

  useEffect(() => {
    setter((headings) => (headings.includes(heading) ? headings : [...headings, heading]));
  }, []);

  return { ref };
};
