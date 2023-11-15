import { Client } from "@notionhq/client";
import { QueryDatabase, RetrieveDatabase } from "../../../api/notion";
import { AsideListObject } from "../type";

const getTagsList = async (notion: Client): Promise<AsideListObject[]> => {
  const response = await RetrieveDatabase(process.env.POST_DB_ID as string, ["tag"]);

  const { results } = await QueryDatabase(process.env.POST_DB_ID as string, ["tag"]);

  return results;
};

export default getTagsList;
