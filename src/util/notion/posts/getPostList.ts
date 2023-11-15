import { Client } from "@notionhq/client";
import { NotionPageResponse, PostInfo } from "../type";
import { QueryDatabase } from "../../../api/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const getPostList = async (notion: Client) => {
  const { results }: { results: NotionPageResponse[] } = await QueryDatabase(
    process.env.POST_DB_ID as string,
    ["series"]
  );

  const PostList = results.reduce((a: PostInfo[], c) => {
    // @ts-ignore
    const coverImg = c?.cover?.external.url || c?.cover?.file.url || null;

    return [
      ...a,
      {
        title: c.properties.title.title[0].text.content,
        created_at: c.created_time.slice(0, 10),
        tags: c.properties.tags.multi_select.map((i: any) => i.name),
        description: c.properties.description.rich_text[0]?.text.content || null,
        coverImg,
        id: c.id,
      },
    ];
  }, []);

  return PostList;
};
