import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { imageTransFormer } from "./CustomTransFormer/imageTransFormer";
import { bookmarkTransFormer } from "./CustomTransFormer/bookmarkTransFormer";
import { columnListTransFormer } from "./CustomTransFormer/columnListTransFormer";
import { videoTransFormer } from "./CustomTransFormer/videoTransFormer";

const notion = new Client({ auth: process.env.NOTION_KEY });

export const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: true,
  },
});

n2m.setCustomTransformer("image", imageTransFormer);
n2m.setCustomTransformer("bookmark", bookmarkTransFormer);
n2m.setCustomTransformer("column_list", columnListTransFormer);
n2m.setCustomTransformer("video", videoTransFormer);
