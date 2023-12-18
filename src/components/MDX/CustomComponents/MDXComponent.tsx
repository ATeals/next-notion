import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export default (props: any) => {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
      components={customElements}
    />
  );
};
