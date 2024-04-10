import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { generateClassName } from "@/generateClassName";

import "@/styles/github-md-style.css";

type MarkdownViewerProps = Omit<React.HTMLProps<HTMLDivElement>, "children"> & {
  children: string;
};

export const MarkdownViewer = ({ children, className, ...props }: MarkdownViewerProps) => {
  const css = generateClassName("p-2 prose markdown-body max-w-none", className);

  return (
    <div className={css} {...props}>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {children}
      </Markdown>
    </div>
  );
};
