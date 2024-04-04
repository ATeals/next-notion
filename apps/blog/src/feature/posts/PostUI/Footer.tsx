import { elapsedTime, generateClassName } from "@repo/utils";
import { usePostUIContext } from "./Provider";
import { Text } from "@/atom";

export const PostFooter = ({ className }: { className?: string }) => {
  const post = usePostUIContext();

  const css = generateClassName("flex justify-between w-full p-5", className);

  return (
    <div className={css}>
      <div className="flex overflow-scroll w-2/3 gap-1">
        {post.tags.map((tag) => (
          <Text
            size="sm"
            key={tag.id}
            className=" flex-shrink-0 p-1 dorp-shadow-lg dark:shadow-zinc-900"
          >
            #{tag.name}
          </Text>
        ))}
      </div>

      <Text size="sm" className="">
        {elapsedTime(post.createdAt)}
      </Text>
    </div>
  );
};
