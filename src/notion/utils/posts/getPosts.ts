import { PostInfo } from "@/notion/type";
import { QueryDatabase } from "@/notion/api";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const getPosts = async () => {
  const { results } = await QueryDatabase(process.env.POST_DB_ID as string, {
    next: { tags: ["series"] },
  });

  const posts = results as PageObjectResponse[];

  console.log(posts);

  const PostList = posts.reduce((a: PostInfo[], c: PageObjectResponse) => {
    const coverImg =
      c.cover?.type === "external" ? c?.cover?.external.url : c?.cover?.file.url || "";
    const created_at = c.created_time.slice(0, 10);
    const update_at = c.last_edited_time.slice(0, 10);
    const title =
      c.properties?.title.type === "title" ? c.properties?.title.title[0].plain_text : "";

    const tags = c.properties.tags.type === "multi_select" ? c.properties.tags.multi_select : [];

    const description =
      c.properties.description.type === "rich_text"
        ? c.properties.description.rich_text[0]?.plain_text
        : "";

    return [...a, { title, created_at, update_at, tags, description, coverImg, id: c.id }];
  }, []);

  return PostList;
};
