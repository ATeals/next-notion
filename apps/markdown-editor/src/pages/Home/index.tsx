import { useMemo, useState } from "react";

import { useParmasData } from "@/feature/common/hooks/useParamsData";

import { MarkdownViewer, MarkdownEditor } from "@/feature/Markdown";

const useMarkdownInput = () => {
  const { getData, setData } = useParmasData("");

  const [input, setInput] = useState(() => getData());

  const register = () => {
    return useMemo(
      () => ({
        value: input,
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setInput(e.currentTarget.value);
          setData(e.currentTarget.value);
        },
      }),
      [input]
    );
  };

  return { register, markdown: input, setMarkdown: setInput };
};

export const Home = () => {
  const { register, markdown: md } = useMarkdownInput();

  return (
    <div className="flex h-dvh">
      <div className="w-1/2 h-full">
        <MarkdownEditor {...register()} />
      </div>

      <MarkdownViewer className="w-1/2">{md}</MarkdownViewer>
    </div>
  );
};
