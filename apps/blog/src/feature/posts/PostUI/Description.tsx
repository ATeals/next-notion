import { generateClassName } from "@repo/utils";
import { usePostUIContext } from "./Provider";
import { Text } from "@/atom";

export const PostUIDescription = ({ className }: { className?: string }) => {
  const post = usePostUIContext();

  const css = generateClassName("text-gray-400 mb-2", className);

  return (
    <Text as="p" size="sm" className={css}>
      {post.description}
    </Text>
  );
};
