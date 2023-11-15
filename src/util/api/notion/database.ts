import { GetDatabaseResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export const QueryDatabase = async (dbId: string, tags: string[]): Promise<QueryDatabaseResponse> => {
    const response = await (
        await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Notion-Version": "2022-06-28",
                "content-type": "application/json",
                Authorization: `Bearer ${process.env.NOTION_KEY}`,
            },
            body: JSON.stringify({
                page_size: 100,
                sorts: [
                    {
                        timestamp: "last_edited_time",
                        direction: "descending",
                    },
                ],
            }),
            next: { revalidate: false, tags },
        })
    ).json();

    return response;
};

export const RetrieveDatabase = async (dbId: string, tags: string[]): Promise<GetDatabaseResponse> => {
    const response = await (
        await fetch(`https://api.notion.com/v1/databases/${dbId}`, {
            method: "GET",
            headers: { accept: "application/json", "Notion-Version": "2022-06-28", Authorization: `Bearer ${process.env.NOTION_KEY}` },
            next: { revalidate: false, tags },
        })
    ).json();
    return response;
};
