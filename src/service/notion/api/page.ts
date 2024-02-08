import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { notionFetcher } from "./notionFetcer";

export const RetrievePage = async (id: string): Promise<PageObjectResponse> =>
  notionFetcher(`pages/${id}`, { next: { tags: [id] } });
