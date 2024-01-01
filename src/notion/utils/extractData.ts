import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { PostInfo, Tag } from "../type";
import { isFullPageOrDatabase } from "@notionhq/client";

const pageCheck = (pageInfo: PageObjectResponse) => ({
  id: pageInfo.id,
  title:
    pageInfo.properties?.title.type === "title"
      ? pageInfo.properties?.title.title[0]?.plain_text
      : undefined,

  description:
    pageInfo.properties?.description.type === "rich_text"
      ? pageInfo.properties.description.rich_text[0]?.plain_text
      : undefined,
  tags:
    pageInfo.properties?.tags.type === "multi_select"
      ? pageInfo.properties.tags.multi_select
      : undefined,
  createdAt: pageInfo.created_time?.slice(0, 10),
  updateAt: pageInfo.last_edited_time?.slice(0, 10),
  coverImg:
    pageInfo.cover?.type === "external"
      ? pageInfo?.cover?.external.url
      : pageInfo?.cover?.file.url || undefined,
});

export const extractData = (
  pageInfo:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse,
  seletor: Array<keyof PostInfo>
) => {
  let pageMap: Partial<PostInfo>;

  if (isFullPageOrDatabase(pageInfo) && pageInfo.object === "page") {
    pageMap = pageCheck(pageInfo);

    return seletor.reduce((a: Partial<PostInfo>, c) => ({ ...a, [c]: pageMap[c] }), {});
  }

  return undefined;
};
