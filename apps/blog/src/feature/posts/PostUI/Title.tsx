import { Heading } from "@/atom";
import { generateClassName } from "@repo/utils";
import { usePostUIContext } from "./Provider";

export const PostUITitle = ({ className }: { className?: string }) => {
  const post = usePostUIContext();

  const css = generateClassName(
    "mb-2 group-hover:text-primary-lg group-hover:drop-shadow-lg transition duration-300 ease-in-out",
    className
  );

  return <Heading className={css}>{post.title}</Heading>;
};
