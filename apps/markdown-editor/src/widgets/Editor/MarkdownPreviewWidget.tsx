import { MarkdownViewer } from "@/feature/Markdown";
import { generateClassName } from "@/generateClassName";

interface MarkdownPreviewWidgetProps {
  markdown: string;

  className?: string;
}

export const MarkdownViewerWidget = ({ markdown, className }: MarkdownPreviewWidgetProps) => {
  const css = generateClassName("bg-white p-2", className);

  return <MarkdownViewer className={css}>{markdown}</MarkdownViewer>;
};

export const MarkdownRichTextWidget = ({ markdown, className }: MarkdownPreviewWidgetProps) => {
  const css = generateClassName("bg-white p-2", className);

  return <pre className={css}>{markdown}</pre>;
};
