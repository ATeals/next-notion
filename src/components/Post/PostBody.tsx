import { generateClassName } from "@/util/generateClassName";
import { LoopMDX } from "../LoopMDX";

export const PostBody = ({ id }: { id: string }) => {
  return (
    <div
      className={generateClassName(
        "prose prose-stone lg:prose-l w-full",
        "prose-quoteless",
        "prose-p:break-words",
        "prose-headings:my-10",
        "prose-p:my-5",
        "prose-hr:m-2",
        "prose-pre:bg-inherit",
        "m-auto",
        "max-w-[680px]"
      )}
    >
      <LoopMDX postId={id} />
    </div>
  );
};
