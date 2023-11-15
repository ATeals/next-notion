import { Client } from "@notionhq/client";
import { NotionPage, PostInfo } from "../type";
import { RetrievePage } from "../../../api/notion";

const getPostInfo = async (notion: Client, id: string): Promise<PostInfo> => {
  const response: NotionPage = await RetrievePage(id);

  let coverImg;

  if (response.cover?.type === "external") coverImg = response?.cover?.external.url;
  else coverImg = response?.cover?.file.url;

  return {
    title: response.properties?.title.title[0].text.content,
    created_at: response.created_time.slice(0, 10),
    tags: response.properties.tags.multi_select,
    description: response.properties.description.rich_text[0]?.text.content,
    id: response.id,
    coverImg,
  };
};

export default getPostInfo;
