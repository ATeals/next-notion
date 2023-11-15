import { LoopMDX } from "@/components/LoopMDX";
import { generateClassName } from "@/util/generateClassName";
import { notionPostInfo } from "@/util/notion";
import { GeistSans } from "geist/font/sans";

export default async ({ params: { id } }: { params: { id: string } }) => {
  await notionPostInfo(id);
  return (
    <main className="p-4">
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
        style={GeistSans.style}
      >
        <LoopMDX postId={id} />
      </div>
    </main>
  );
};
