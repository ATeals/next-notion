"use client";

import { Tag as TagType } from "@/feature/Tag/type";
import { generateClassName } from "@/feature/common/util/generateClassName";
import { useParams } from "next/navigation";
import { Tag } from "./Tag";

export const TagList = ({ tags }: { tags: TagType[] }) => {
  const params = useParams<{ tag: string }>();
  const selectedTag = decodeURI(params.tag);

  return (
    <ul className="md:block flex whitespace-nowrap overflow-x-scroll p-2">
      {tags.map((tag) => (
        <li
          key={tag.id}
          className={generateClassName(selectedTag === tag.name && "text-teal-500", "m-2")}
        >
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
};
