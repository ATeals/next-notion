"use client";

import { BLOG_CONFIG } from "@/config";
import { Tag, TagUI } from "@/feature/posts";
import { useParams } from "next/navigation";
import Link from "next/link";

export const TagNavigation = ({ tags }: { tags: Tag[] }) => {
  const params = useParams<{ id: string }>();
  const selectedTag = decodeURI(params.id);

  return (
    <ul className="block sticky top-20 lg:w-[250px] w-full max-h-[800px] overflow-y-scroll lg:text-right text-center p-2">
      {tags.map((tag, i) => (
        <li key={tag.id} className="my-2 inline-block">
          <Link href={`${BLOG_CONFIG.PATH.TAGS}/${tag.name}`}>
            <TagUI tag={tag} enable={tag.name === selectedTag} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
