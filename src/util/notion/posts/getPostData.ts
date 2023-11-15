import { Client } from "@notionhq/client";

import { RetrieveBlockChildren } from "../../api/notion";
import { n2m } from "@/util/n2m";

const getPostData = async (notion: Client, id: string): Promise<string> => {
  // const mdblocks = await n2m.pageToMarkdown(id);

  const arr = [];
  const res = await RetrieveBlockChildren(id);

  arr.push(...res.results);
  let start_cursor = res.next_cursor;
  while (start_cursor) {
    const res = await RetrieveBlockChildren(id, start_cursor);

    if (start_cursor === res.next_cursor) break;

    arr.push(...res.results);
    start_cursor = res.next_cursor;
  }

  const x = await n2m.blocksToMarkdown(arr);
  const { parent } = n2m.toMarkdownString(x);

  return parent;
};

export default getPostData;
