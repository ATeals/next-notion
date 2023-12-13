export const notionFetcher = async (
  url: string,
  {
    method = "GET",
    body,
    searchParams,
    next,
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: { [key: string]: any };
    searchParams?: Array<string | undefined>;
    next?: NextFetchRequestConfig;
  } = {}
) => {
  const res = await (
    await fetch(`https://api.notion.com/v1/${url}?${searchParams ? searchParams.join("&") : ""}`, {
      method,
      headers: {
        accept: "application/json",
        "Notion-Version": "2022-06-28",
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NOTION_KEY}`,
      },
      body: JSON.stringify(body),
      next: { revalidate: 0, ...next },
    })
  ).json();

  return res;
};
