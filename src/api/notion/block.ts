import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionFetcher } from ".";

export const RetrieveBlockChildren = async (
  id: string,
  start_cursor?: string
): Promise<ListBlockChildrenResponse> =>
  NotionFetcher(`blocks/${id}/children`, {
    searchParams: ["page_size=25", start_cursor && `&start_cursor=${start_cursor}`],
    next: { tags: [id] },
  });
