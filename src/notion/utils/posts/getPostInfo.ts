import { RetrievePage } from "@/notion/api";
import { PostInfo } from "@/notion/type";

export const getPostInfo = async (id: string): Promise<PostInfo> => {
  const response = await RetrievePage(id);

  const title =
    response.properties?.title.type === "title"
      ? response.properties?.title.title[0].plain_text
      : "";

  const created_at = response.created_time?.slice(0, 10);
  const update_at = response.last_edited_time?.slice(0, 10);

  const tags =
    response.properties?.tags.type === "multi_select" ? response.properties.tags.multi_select : [];

  const description =
    response.properties?.description.type === "rich_text"
      ? response.properties.description.rich_text[0]?.plain_text
      : "";

  const coverImg =
    response.cover?.type === "external" ? response?.cover?.external.url : response?.cover?.file.url;

  return { title, created_at, update_at, tags, description, coverImg, id: response.id };
};
