import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { generateClassName } from "@/util/generateClassName";

import { GeistSans } from "geist/font/sans";
import { code } from "./CodeBlock";

export default (props: any) => {
  return (
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
  );
};
