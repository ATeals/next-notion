import {
  GetDatabaseResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { notionFetcher } from "./notionFetcer";

export const QueryDatabase = async (
  dbId: string,
  { next, filter }: { next?: NextFetchRequestConfig; filter?: any } = {}
): Promise<QueryDatabaseResponse> => {
  const res = await notionFetcher(`databases/${dbId}/query`, {
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
    next,
  });

  return res;
};

export const RetrieveDatabase = async (
  dbId: string,
  tags: string[]
): Promise<GetDatabaseResponse> => notionFetcher(`databases/${dbId}`, { next: { tags } });
