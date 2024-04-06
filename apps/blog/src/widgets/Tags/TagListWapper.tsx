"use client";

import { BLOG_CONFIG } from "@/config";
import { Tag, TagUI } from "@/feature/posts";
import Link from "next/link";
import { useParams } from "next/navigation";

export const TagListWapper = ({ children, tags }: { children: React.ReactNode; tags: Tag[] }) => {
  const params = useParams<{ id: string }>();
  const selectedTag = decodeURI(params.id);

  return (
    <>
      <aside className=" lg:absolute lg:h-full lg:top-20 lg:left-0 lg:translate-x-[-100%] p-5 pl-0">
        <ul className="block sticky top-20 lg:w-[250px] w-full max-h-[800px] overflow-y-scroll lg:text-right text-center p-2">
          {tags.map((tag, i) => (
            <li key={tag.id} className="my-2 inline-block">
              <Link href={`${BLOG_CONFIG.PATH.TAGS}/${tag.name}`}>
                <TagUI tag={tag} enable={tag.name === selectedTag} />
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {children}
    </>
  );
};
