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
    // const res = await (
    //   await fetch(`https://api.notion.com/v1/blocks/${block.id}`, {
    //     method: "GET",
    //     headers: {
    //       accept: "application/json",
    //       "Notion-Version": "2022-06-28",
    //       Authorization: `Bearer ${process.env.NOTION_KEY}`,
    //     },
    //     next: { revalidate: 0 },
    //   })
    // ).json();
    const i = await notion.blocks.retrieve({ block_id: block.id });

    image = i;
  }

  return `![test](${image?.file?.url || image?.external?.url || ""})`;
});

n2m.setCustomTransformer("bookmark", async (block) => {
  const { bookmark } = block as any;
  if (bookmark.url) {
    return true;
  }
  return false; // use default behavior
});
