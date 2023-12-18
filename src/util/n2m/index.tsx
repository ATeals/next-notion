import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: true,
  },
});

n2m.setCustomTransformer("image", async (block) => {
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
});

n2m.setCustomTransformer("bookmark", async (block) => {
  let { bookmark } = block as any;

  return `[${bookmark?.caption[0]?.plain_text || bookmark?.url || ""}](${bookmark?.url || ""})`;
});
