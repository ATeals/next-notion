"use client";

import { useState } from "react";
import { generateClassName } from "../util/generateClassName";

export const CopyLinkButton = ({ url, className }: { url: string; className?: string }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setIsClicked(true);
  };

  return (
    <button onClick={handleClick} className={generateClassName("cursor-pointer", className)}>
      <i className="bi bi-link-45deg text-2xl" />
      {isClicked && <span>Copied!</span>}
    </button>
  );
};
