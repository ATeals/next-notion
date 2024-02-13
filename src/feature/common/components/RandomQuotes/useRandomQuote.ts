import { useEffect, useState } from "react";
import { Quote } from "./type";
import { QUOTE_LIST } from "./entities";
import { getRandomItemFromList } from "../../util/getRandomItemFromList";

export const useRandomQuotes = () => {
  const [quote, setQuote] = useState<Quote>(QUOTE_LIST[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setQuote(getRandomItemFromList(QUOTE_LIST));
    }, 10000);

    return () => clearTimeout(id);
  }, [QUOTE_LIST]);

  return quote;
};
