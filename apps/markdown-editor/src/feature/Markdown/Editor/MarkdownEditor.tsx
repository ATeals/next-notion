import { generateClassName } from "@/generateClassName";

type MarkdownEditorProps = React.HTMLProps<HTMLTextAreaElement> & {};

export const MarkdownEditor = ({ className, ...props }: MarkdownEditorProps) => {
  const css = generateClassName("w-full p-2 resize-none h-full bg-gray-200", className);

  return <textarea className={css} {...props} />;
};
