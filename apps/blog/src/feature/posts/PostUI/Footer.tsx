import { elapsedTime, generateClassName } from "@repo/utils";
import { usePostUIContext } from "./Provider";
import { Text } from "@/atom";
import Link from "next/link";
import { BLOG_CONFIG } from "@/config";

export const PostFooter = ({ className }: { className?: string }) => {
  const post = usePostUIContext();

  const css = generateClassName("flex justify-between w-full", className);

  return (
    <div className={css}>
      <div className="flex overflow-scroll w-2/3 gap-1 text-gray-600 dark:text-gray-300">
        {post.tags.map((tag) => (
          <Text
            size="sm"
            className="hover:cursor-pointer dorp-shadow-lg dark:shadow-zinc-900 flex-shrink-0 pr-1 hover:text-secondary-lg dark:hover:text-secondary-sm"
            key={tag.id}
            onClick={() => (window.location.href = `${BLOG_CONFIG.PATH.TAGS}/${tag.name}`)}
          >
            #{tag.name}
          </Text>
        ))}
      </div>

      <Text size="sm" className="text-gray-600 dark:text-gray-300">
        {elapsedTime(post.createdAt)}
      </Text>
    </div>
  );
};
