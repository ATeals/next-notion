import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export const RetrieveBlockChildren = async (id: string, start_cursor?: string): Promise<ListBlockChildrenResponse> => {
    let url = `https://api.notion.com/v1/blocks/${id}/children?page_size=25`;

    if (start_cursor) {
        url = `https://api.notion.com/v1/blocks/${id}/children?page_size=25&start_cursor=${start_cursor}`;
    }

    const res = await (
        await fetch(url, {
            method: "GET",
            headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
            next: { revalidate: false, tags: [id] },
        })
    ).json();

    return res;
};
