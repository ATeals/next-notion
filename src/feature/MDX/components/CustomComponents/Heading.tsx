"use client";

import { TocHeading } from "@/feature/Toc/type";
import { useHeading } from "../../hooks/useHeading";

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
