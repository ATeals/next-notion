import { Tag as TagType } from "@/notion/type";
import { generateClassName } from "@/util/generateClassName";
import Link from "next/link";

export const Tag = ({ tag, className }: { tag: TagType; className?: string }) => {
  return (
    <Link href={`/tags/${tag.name}`} key={tag.name}>
      <span className={generateClassName("m-2", "text-lg", "hover:underline", className)}>
        #{tag.name}
      </span>
    </Link>
  );
};
