import { generateClassName } from "@/util/generateClassName";
import { LoopMDX } from "../MDX/LoopMDX";

export const PostBody = ({ id }: { id: string }) => {
  return (
    <div
      className={generateClassName(
        "dark:prose-invert",
        "prose prose-stone lg:prose-l w-full",
        "prose-quoteless",
        "prose-p:break-words",
        "prose-headings:mt-20 prose-headings:mb-2",
        "prose-h1:text-4xl prose-h1:text-teal-600",
        "prose-h2:text-3xl",
        "prose-h3:text-xl",
        "prose-p:my-5",
        "prose-hr:my-2",
        "prose-pre:bg-inherit",
        "prose-a:dark:text-teal-400 prose-a:text-teal-600",
        "prose-pre:px-0",
        "m-auto",
        "max-w-[680px]",
        "animate-fadeIn",
        "prose-em:text-gray-400"
      )}
    >
      <LoopMDX postId={id} />
    </div>
  );
};
