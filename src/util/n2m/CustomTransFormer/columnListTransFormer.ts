import { ListBlockChildrenResponseResult } from "notion-to-md/build/types";
import { n2m } from "..";

export const columnListTransFormer = async (block: ListBlockChildrenResponseResult) => {
  const mdBlocks_temp = await n2m.pageToMarkdown(block.id);
  let final_md_string = `<div className="column" style={{ display: "flex", columnGap: "25px" }}>`;

  for (const one_block of mdBlocks_temp) {
    const mdString_temp = n2m.toMarkdownString(one_block.children);
    final_md_string =
      final_md_string +
      `<div style={{width : "100%", display : "flex", flexDirection : "column"}}>${mdString_temp.parent}</div>`;
  }

  return final_md_string + "</div>";
};
