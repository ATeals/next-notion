import { generateClassName } from "@/generateClassName";

type MarkdownEditorProps = React.HTMLProps<HTMLTextAreaElement> & {};

export const MarkdownEditorProvider = ({
  className,
  value,
  onChange,
  children,
  ...props
}: MarkdownEditorProps) => {
  const css = generateClassName("relative", className);

  return (
    <div className={css}>
      <textarea
        className={"resize-none w-full h-full p-2 pt-[50px] "}
        value={value}
        onChange={onChange}
        {...props}
      ></textarea>
      {children}
    </div>
  );
};

export const MarkdownEditorToolbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex absolute top-0 left-0 w-full border-[0.1rem] border-gray-300 rounded-lg overflow-scroll">
      {children}
    </div>
  );
};

export const MarkdownEditorTrigger = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const css = generateClassName(
    "p-2 border-r-[0.1rem] border-gray-300 flex-shrink-0",
    props.className
  );

  return (
    <button className={css} {...props}>
      {children}
    </button>
  );
};

export const MarkdownEditor = Object.assign(MarkdownEditorProvider, {
  Toolbar: MarkdownEditorToolbar,
  Trigger: MarkdownEditorTrigger,
});
