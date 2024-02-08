import { RetrieveDatabase } from "@/service/notion/api";
import { Tag } from "../type";

export const getTags = async () => {
  const response = await RetrieveDatabase(process.env.POST_DB_ID as string, ["tag"]);

  const tags = response.properties?.tags;

  return tags.type === "multi_select" ? (tags.multi_select.options as Tag[]) : undefined;
};
