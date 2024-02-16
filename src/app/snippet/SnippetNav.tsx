import { generateClassName } from "@/feature/common/util/generateClassName";
import Link from "next/link";

export const SnippetNav = ({ selectedTag }: { selectedTag?: string }) => {
  return (
    <div key={selectedTag} className="[&>*]:p-4 dark:text-white">
      <Link
        key={"전체"}
        href={"/snippet"}
        className={generateClassName(
          "rounded-t-xl",
          !selectedTag ? "shadow text-teal-500" : "shadow-inner"
        )}
      >
        전체
      </Link>
      {["회고", "링크", "개발"].map((tag) => (
        <Link
          key={tag}
          href={`/snippet?tag=${tag} `}
          className={generateClassName(
            "rounded-t-xl",
            selectedTag === tag ? "shadow text-teal-500" : "shadow-inner"
          )}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};
