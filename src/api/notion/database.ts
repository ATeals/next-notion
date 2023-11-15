import {
  GetDatabaseResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionFetcher } from ".";

export const QueryDatabase = async (dbId: string, tags: string[], filter?: any): Promise<any> => {
  const res = await NotionFetcher(`databases/${dbId}/query`, {
    method: "POST",
    body: {
      page_size: 100,
      sorts: [
        {
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
      filter,
    },
    next: { tags },
  });

  return res;
};

export const RetrieveDatabase = async (
  dbId: string,
  tags: string[]
): Promise<GetDatabaseResponse> => NotionFetcher(`databases/${dbId}`, { next: { tags } });
