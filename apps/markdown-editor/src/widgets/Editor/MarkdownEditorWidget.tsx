import { LanguageBadgeModal, ModalWapper } from "@/feature/LanguageBadge";
import { MARKDOWN_SHORTCUTS, MarkdownEditor } from "@/feature/Markdown";
import { useOverlay } from "@repo/react";
import { SetStateAction } from "react";

const SIMPLE_BADGE_URL = ({ language, color }: { language: string; color: string }) =>
  `https://img.shields.io/badge/${language}-${color}?&style=for-the-badge&logo=JavaScript&logoColor=white`;

export const MarkdownEditorWidget = ({
  register,
  addShortcut,
  setMarkdown,
}: {
  register: () => {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  };
  addShortcut: (key: keyof typeof MARKDOWN_SHORTCUTS) => unknown;
  setMarkdown: (value: SetStateAction<string>) => unknown;
}) => {
  const { open, close } = useOverlay();

  const openModal = () =>
    open(({ isOpen }) => {
      return (
        <ModalWapper isOpen={isOpen} close={close}>
          <LanguageBadgeModal
            onSubmit={(value) => {
              if (value)
                setMarkdown(
                  (prev) => prev + "\n" + `![${value.language}](${SIMPLE_BADGE_URL(value)})`
                );
              console.log(value);
              close();
            }}
          />
        </ModalWapper>
      );
    });

  return (
    <MarkdownEditor className="w-full h-full rounded-lg" {...register()}>
      <MarkdownEditor.Toolbar>
        <MarkdownEditor.Trigger onClick={() => openModal()}>Badge</MarkdownEditor.Trigger>
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
