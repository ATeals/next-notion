"use client";

import { generateClassName } from "../../util/generateClassName";
import { useRandomQuotes } from "./useRandomQuote";

export const RandomQuotes = ({ className }: { className?: string }) => {
  const { quote, speaker } = useRandomQuotes();

  return (
    <p key={quote} className={generateClassName("min-h-[100px] animate-fadeIn", className)}>
      <span className="block py-2"> {quote} </span>
      <span> -{speaker}- </span>
    </p>
  );
};
