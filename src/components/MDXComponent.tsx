import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { generateClassName } from "@/util/generateClassName";

import { GeistSans } from "geist/font/sans";
import { code } from "./CodeBlock";

export default (props: any) => {
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
      style={GeistSans.style}
    >
      <MDXRemote
        {...props}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
        components={{
          code,
        }}
      />
    </div>
  );
};
