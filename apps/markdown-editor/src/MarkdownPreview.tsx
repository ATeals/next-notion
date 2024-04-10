import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./styles/github-md-style.css";

export const MarkdownPreview = () => {
  return <Markdown className={"prose"} remarkPlugins={[remarkGfm]}></Markdown>;
};
