import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { notionFetcher } from "./notionFetcer";

export const RetrieveBlockChildren = async (
  id: string,
  start_cursor?: string
): Promise<ListBlockChildrenResponse> =>
  notionFetcher(`blocks/${id}/children`, {
    searchParams: ["page_size=25", start_cursor && `&start_cursor=${start_cursor}`],
    next: { tags: [id], revalidate: false },
  });
