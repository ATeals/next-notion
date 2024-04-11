import { MarkdownViewer, MarkdownEditor, useMarkdownInput } from "@/feature/Markdown";

export const Home = () => {
  const { register, markdown, addShortcut } = useMarkdownInput();

  return (
    <div className="flex h-dvh p-5">
      <div className="w-1/2 h-full rounded-lg bg-white p-5">
        <MarkdownEditor className="rounded-lg h-full w-full" {...register()}>
          <MarkdownEditor.Toolbar>
            <MarkdownEditor.Trigger onClick={() => addShortcut("h1")}>h1</MarkdownEditor.Trigger>
            <MarkdownEditor.Trigger onClick={() => addShortcut("strong")}>
              bold
            </MarkdownEditor.Trigger>
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
            <MarkdownEditor.Trigger onClick={() => addShortcut("code")}>
              code
            </MarkdownEditor.Trigger>
          </MarkdownEditor.Toolbar>
        </MarkdownEditor>
      </div>

      <MarkdownViewer className="w-1/2 border-2 border-gray-300 rounded-lg overflow-scroll">
        {markdown}
      </MarkdownViewer>
    </div>
  );
};
