import { ListBlockChildrenResponseResult } from "notion-to-md/build/types";

export const imageTransFormer = async (block: ListBlockChildrenResponseResult) => {
  let { image } = block as any;

  if (!image?.file) return false;

  if (new Date(image?.file?.expiry_time) < new Date()) {
    const res = await (
      await fetch(`https://api.notion.com/v1/blocks/${block.id}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "Notion-Version": "2022-06-28",
          Authorization: `Bearer ${process.env.NOTION_KEY}`,
        },
        next: { revalidate: 0 },
      })
    ).json();

    image = res.image;
  }

  return `![${image?.caption[0]?.plain_text || ""}](${
    image?.file?.url || image?.external?.url || ""
  })`;
};
