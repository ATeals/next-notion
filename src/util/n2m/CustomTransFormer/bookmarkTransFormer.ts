import { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ListBlockChildrenResponseResult } from "notion-to-md/build/types";

export const bookmarkTransFormer = async (block: ListBlockChildrenResponseResult) => {
  let { bookmark } = block as BookmarkBlockObjectResponse;

  return `[bookmark](${bookmark.url})`;
};
