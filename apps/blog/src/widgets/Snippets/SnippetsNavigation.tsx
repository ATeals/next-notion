import { BLOG_CONFIG } from "@/config";
import { TagUI } from "@/feature/posts";
import Link from "next/link";

export const SnippetsNavigation = ({ currentTag }: { currentTag?: string }) => {
  return (
    <div key={currentTag} className="[&>*]:p-4 dark:text-white">
      <Link key={"전체"} href={`${BLOG_CONFIG.PATH.SNIPPETS}`}>
        <TagUI tag={"전체"} enable={!currentTag} />
      </Link>

      {["회고", "링크", "개발"].map((tag) => (
        <Link key={tag} href={`${BLOG_CONFIG.PATH.SNIPPETS}?tag=${tag}`}>
          <TagUI tag={tag} enable={currentTag === tag} />
        </Link>
      ))}
    </div>
  );
};
