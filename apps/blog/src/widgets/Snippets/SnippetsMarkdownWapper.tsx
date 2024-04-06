import { generateClassName } from "@repo/utils";

export const SnippetsMarkdownWapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={generateClassName(
        "dark:prose-invert",
        "prose prose-md p-5 max-w-none",
        "prose-quoteless",
        "prose-p:break-words prose-p:text-gray-500 dark:prose-p:text-gray-400",
        "prose-headings:mt-5 prose-headings:mb-2 prose-headings:text-gray-500",
        "prose-h1:text-2xl md:prose-h1:text-2xl prose-h1:text-black dark:prose-h1:text-white prose-h1:mb-0",
        "prose-pre:bg-inherit",
        "prose-pre:p-0",
        "prose-li:text-gray-500 dark:prose-li:text-gray-400",
        "animate-fadeIn"
      )}
    >
      {children}
    </section>
  );
};
