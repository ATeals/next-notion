"use client";

import { generateClassName } from "@/feature/common/util/generateClassName";
import Link from "next/link";
import { useContext } from "react";
import { HeadingsContext } from "./TocProvider";

export const Toc = () => {
  const headings = useContext(HeadingsContext);

  return (
    <aside className="text-sm absolute h-full right-0 hidden xl:block translate-x-[100%] pl-10">
      <ul className="w-[250px] max-h-[800px] overflow-y-scroll sticky top-20 p-[1rem] text-gray-500 pl-5 border-l-2">
        {headings?.map((heading, index) => (
          <li key={heading.text + index}>
            <Link
              href={`#${heading.text}`}
              replace
              className={generateClassName(
                "block",
                heading.type === "h2" && "ml-2 my-2",
                heading.type === "h3" && "ml-4 mb-2",
                "hover:text-teal-500 hover:underline",
                "animate-fadeIn",
                heading.isInViewport && "text-teal-500"
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
