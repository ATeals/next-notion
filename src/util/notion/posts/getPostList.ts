import { Client } from "@notionhq/client";
import { PostInfo } from "../type";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { QueryDatabase } from "../../api/notion";

export const getPostList = async (notion: Client) => {
    const response = await QueryDatabase(process.env.POST_DB_ID as string, ["series"]);

    const PostList = response.results.reduce((a: PostInfo[], c) => {
        // @ts-ignore
        const coverImg = c?.cover?.external.url || c?.cover?.file.url || null;

        return [
            ...a,
            {
                // @ts-ignore
                title: c.properties.title.title[0].text.content, //
                // @ts-ignore
                created_at: c.created_time.slice(0, 10),
                // @ts-ignore
                tags: c.properties.tags.multi_select,
                // @ts-ignore
                series: c.properties.series.select.name,
                // @ts-ignore
                description: c.properties.description.rich_text[0]?.text.content || null,
                coverImg,
                id: c.id,
            },
        ];
    }, []);

    return PostList;
};
