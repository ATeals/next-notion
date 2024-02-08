import { generateClassName } from "@/feature/common/util/generateClassName";
import Link from "next/link";
import { Tag as TagType } from "../type";

export const Tag = ({ tag, className }: { tag: TagType; className?: string }) => {
  return (
    <Link href={`/tags/${tag.name}`} key={tag.name}>
      <span className={generateClassName("m-2", "text-lg", "hover:underline", className)}>
        #{tag.name}
      </span>
    </Link>
  );
};
