import { useEffect, useState } from "react";
import { Quote } from "./type";
import { QUOTE_LIST } from "./entities";
import { getRandomItemFromList } from "@repo/utils";

export const useRandomQuotes = ({ delay = 10000 }: { delay?: number } = {}) => {
  const [quote, setQuote] = useState<Quote>(QUOTE_LIST[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setQuote(getRandomItemFromList(QUOTE_LIST));
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);

  return quote;
};
