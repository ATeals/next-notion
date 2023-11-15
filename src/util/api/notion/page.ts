import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

export const RetrievePage = async (id: string): Promise<GetPageResponse> => {
    const response = await (
        await fetch(`https://api.notion.com/v1/pages/${id}`, {
            method: "GET",
            headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
            next: { revalidate: false, tags: [id] },
        })
    ).json();

    return response;
};
