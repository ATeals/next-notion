import { useMarkdownInput } from "@/feature/Markdown";
import { useWindowWidth } from "@/feature/common/hooks";

import {
  CopyButton,
  MarkdownEditorWidget,
  MarkdownRichTextWidget,
  MarkdownViewerWidget,
} from "@/widgets/Editor";
import { Switch } from "@repo/react";
import { useState } from "react";

export const Editor = () => {
  const { register, markdown, addShortcut } = useMarkdownInput();

  const { isMaxWidth } = useWindowWidth();

  const EDITOR_CASES = {
    EDIT: <MarkdownEditorWidget register={register} addShortcut={addShortcut} />,
    PREVIEW: <MarkdownViewerWidget className="h-full" markdown={markdown} />,
    CODE: <MarkdownRichTextWidget className="h-full" markdown={markdown} />,
  };

  const [currentSwitch, setCurrentSwitch] = useState<keyof typeof EDITOR_CASES>("EDIT");

  return isMaxWidth(1200) ? (
    <div className="flex h-dvh p-5">
      <div className="w-1/2 h-full rounded-lg bg-white p-5">
        <MarkdownEditorWidget register={register} addShortcut={addShortcut} />
      </div>
      <div className="w-1/2 h-full rounded-lg  border-2 border-gray-300 overflow-hidden">
        <div className="flex justify-end w-full gap-2 [&>*]:rounded-t-lg">
          <CopyButton copyText={window.location.href}>Share</CopyButton>
          <CopyButton copyText={markdown}>Copy MD</CopyButton>
        </div>

        <MarkdownViewerWidget className="h-full p-5 rounded-l-lg" markdown={markdown} />
      </div>
    </div>
  ) : (
    <div className="w-full h-screen p-5">
      <div className="flex justify-between px-2">
        <div className="flex justify-start w-full gap-2 [&>*]:rounded-t-lg">
          <button
            className={"px-2 p-1 rounded-sm bg-white"}
            onClick={() => setCurrentSwitch("EDIT")}
          >
            Edit
          </button>
          <button
            className={"px-2 p-1 rounded-sm bg-white"}
            onClick={() => setCurrentSwitch("CODE")}
          >
            Code
          </button>
          <button
            className={"px-2 p-1 rounded-sm bg-white"}
            onClick={() => setCurrentSwitch("PREVIEW")}
          >
            Preview
          </button>
        </div>

        <div className="flex justify-end w-full gap-2 [&>*]:rounded-t-lg">
          <CopyButton copyText={window.location.href}>Share</CopyButton>
          <CopyButton copyText={markdown}>Copy MD</CopyButton>
        </div>
      </div>

      <div className="w-full h-[95%]">
        <Switch caseBy={EDITOR_CASES} value={currentSwitch} />
      </div>
    </div>
  );
};
