import { GetPageResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionFetcher } from ".";

export const RetrievePage = async (id: string): Promise<PageObjectResponse> =>
  NotionFetcher(`pages/${id}`, { next: { tags: [id] } });
