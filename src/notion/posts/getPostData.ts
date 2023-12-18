import { n2m } from "@/util/n2m";
import { RetrieveBlockChildren } from "@/notion/api";

export const getPostData = async (id: string) => {
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
