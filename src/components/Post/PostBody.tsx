import { generateClassName } from "@/util/generateClassName";
import { LoopMDX } from "../LoopMDX";

export const PostBody = ({ id }: { id: string }) => {
  return (
    <div
      className={generateClassName(
        "dark:prose-invert",
        "prose prose-stone lg:prose-l w-full",
        "prose-quoteless",
        "prose-p:break-words",
        "prose-headings:mt-20 prose-headings:mb-2",
        "prose-headings:text-2xl",
        "prose-h3:text-lg",
        "prose-p:my-5",
        "prose-hr:my-2",
        "prose-pre:bg-inherit",
        "prose-a:dark:text-teal-400 prose-a:text-teal-700",
        "prose-pre:px-0",
        "m-auto",
        "max-w-[680px]"
      )}
    >
      <LoopMDX postId={id} />
    </div>
  );
};
