import { MARKDOWN_SHORTCUTS, MarkdownEditor } from "@/feature/Markdown";

export const MarkdownEditorWidget = ({
  register,
  addShortcut,
}: {
  register: () => {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  };
  addShortcut: (key: keyof typeof MARKDOWN_SHORTCUTS) => unknown;
}) => {
  return (
    <MarkdownEditor className="w-full h-full rounded-lg" {...register()}>
      <MarkdownEditor.Toolbar>
        <MarkdownEditor.Trigger onClick={() => addShortcut("h1")}>h1</MarkdownEditor.Trigger>
        <MarkdownEditor.Trigger onClick={() => addShortcut("strong")}>bold</MarkdownEditor.Trigger>
        <MarkdownEditor.Trigger onClick={() => addShortcut("itelic")}>
          itelic
        </MarkdownEditor.Trigger>
        <MarkdownEditor.Trigger onClick={() => addShortcut("hyperlink")}>
          link
        </MarkdownEditor.Trigger>
        <MarkdownEditor.Trigger onClick={() => addShortcut("quotes")}>
          quotes
        </MarkdownEditor.Trigger>
        <MarkdownEditor.Trigger onClick={() => addShortcut("img")}>img</MarkdownEditor.Trigger>
        <MarkdownEditor.Trigger onClick={() => addShortcut("code")}>code</MarkdownEditor.Trigger>
      </MarkdownEditor.Toolbar>
    </MarkdownEditor>
  );
};
