"use client";

import { useHeadingActionsContext } from "@/feature/Toc/hooks/useHeadingActionsContext";
import { TocHeading } from "@/feature/Toc/type";
import { useIntersectionObserver } from "@/feature/common/hooks/useIntersectionObserver";
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

type HeadingProps = Omit<React.HtmlHTMLAttributes<HTMLHeadingElement>, "children"> & {
  children: string;
};

export const h1 = ({ children, ...props }: HeadingProps) => {
  const heading: TocHeading = { type: "h1", text: children, isInViewport: false };

  const { ref } = useHeading(heading);

  return (
    <h1 ref={ref} id={children}>
      {children}
    </h1>
  );
};

export const h2 = ({ children, ...props }: HeadingProps) => {
  const heading: TocHeading = { type: "h2", text: children, isInViewport: false };

  const { ref } = useHeading(heading);

  return (
    <h2 ref={ref} id={children}>
      {children}
    </h2>
  );
};

export const h3 = ({ children, ...props }: HeadingProps) => {
  const heading: TocHeading = { type: "h3", text: children, isInViewport: false };

  const { ref } = useHeading(heading);

  return (
    <h3 ref={ref} id={children}>
      {children}
    </h3>
  );
};
