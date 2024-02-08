import { LoopMDX } from "@/feature/MDX/LoopMDX";
import MDXComponent from "@/feature/MDX/MDXComponent";
import Portal from "@/feature/common/components/Portal";
import RevalidatePost from "@/feature/post/components/RevalidatePost";
import { REVALIDATE_TAGNAME } from "@/constants";
import { generateClassName } from "@/feature/common/util/generateClassName";

export default async () => {
  const postId = process.env.RESUME_PAGE_ID!;

  return (
    <section className="pt-20">
      <section
        className={generateClassName(
          "dark:prose-invert",
          "prose prose-stone prose-md md:prose-lg p-10",
          "prose-quoteless",
          "prose-p:break-words",
          "prose-headings:mt-10 prose-headings:mb-2",
          "prose-h1:text-3xl md:prose-h1:text-4xl  prose-h1:text-teal-600",
          "prose-h2:text-2xl md:prose-h2:text-3xl",
          "prose-h3:text-xl",
          "prose-p:my-2",
          "prose-hr:my-2",
          "prose-pre:bg-inherit",
          "prose-a:dark:text-teal-400 prose-a:text-teal-600",
          "prose-pre:px-0",
          "m-auto",
          "lg:max-w-[1200px]",
          "animate-fadeIn",
          "prose-em:text-gray-400"
        )}
      >
        <LoopMDX postId={postId} />
      </section>

      <Portal component={<RevalidatePost id={postId} />} elementId={REVALIDATE_TAGNAME} />
    </section>
  );
};
