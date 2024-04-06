"use client";

import Link from "next/link";
import { useContext } from "react";
import { HeadingsContext } from "./TocProvider";
import { generateClassName } from "@repo/utils";

interface Options {
  enableHeader?: ("h1" | "h2" | "h3" | "h4" | "h5" | "h6")[];
}

export const Toc = ({ enableHeader = ["h1", "h2", "h3"] }: Options) => {
  const headings = useContext(HeadingsContext);

  return (
    <aside className="text-sm absolute h-full right-0 hidden lg:block translate-x-[100%] pl-10">
      <ul className="w-[250px] max-h-[800px] overflow-y-scroll sticky top-20 p-[1rem] text-gray-500 pl-5 border-l-2">
        {headings
          ?.filter((heading) => enableHeader.includes(heading.type))
          .map((heading, index) => (
            <li key={heading.text + index}>
              <Link
                href={`#${heading.text}`}
                replace
                className={generateClassName(
                  "block",
                  heading.type === "h2" && "ml-2 my-2",
                  heading.type === "h3" && "ml-4 mb-2",
                  "hover:text-primary-sm hover:drop-shadow-lg ",
                  "animate-fadeIn",
                  heading.isInViewport && "text-primary-sm drop-shadow-lg ",
                  "dark:shadow-zinc-950"
                )}
              >
                <span>{heading.text}</span>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};
