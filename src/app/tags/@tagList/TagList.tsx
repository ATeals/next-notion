"use client";

import { Tag } from "@/feature/Tag/type";
import { generateClassName } from "@/feature/common/util/generateClassName";
import Link from "next/link";
import { useParams } from "next/navigation";

export const TagList = ({ tags }: { tags: Tag[] }) => {
  const params = useParams<{ tag: string }>();
  const selectedTag = decodeURI(params.tag);

  return (
    <ul className="md:block flex whitespace-nowrap overflow-x-scroll p-2">
      {tags.map((tag) => (
        <li
          className={generateClassName(selectedTag === tag.name && "text-teal-500", "m-2")}
          key={tag.id}
        >
          <Link href={`/tags/${tag.name}`}>
            <span># {tag.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
