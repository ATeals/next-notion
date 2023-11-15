"use client";

import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const code = ({ node, inline, className, children, ...props }: SyntaxHighlighterProps) => {
  const match = /language-(\w+)/.exec(className || "");
  const language =
    (match && (match[1] === "javascript" ? "jsx" : match[1] === "typescript" ? "tsx" : null)) || "";

  return !inline && match ? (
    <SyntaxHighlighter language={language} wrapLongLines={false} {...props} style={oneLight}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code {...props}>{children}</code>
  );
};
