import { useParmasData } from "@/feature/common/hooks";
import { useMemo, useState } from "react";
import { MARKDOWN_SHORTCUTS } from "../const";

export const useMarkdownInput = () => {
  const { getData, setData } = useParmasData("");

  const [markdown, setMarkdown] = useState(() => getData());

  const register = () => {
    return useMemo(
      () => ({
        value: markdown,
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setMarkdown(e.currentTarget.value);
          setData(e.currentTarget.value);
        },
      }),
      [markdown]
    );
  };

  const addShortcut = (shortcut: keyof typeof MARKDOWN_SHORTCUTS) => {
    setMarkdown((prev) => prev + "\n" + MARKDOWN_SHORTCUTS[shortcut]);
  };

  return { markdown, setMarkdown, register, addShortcut };
};
