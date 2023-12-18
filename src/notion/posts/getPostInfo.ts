import { RetrievePage } from "@/notion/api";
import { extractData } from "../utils";

export const getPostInfo = async (id: string) => {
  const response = await RetrievePage(id);

  return extractData(response, [
    "title",
    "description",
    "tags",
    "createdAt",
    "updateAt",
    "coverImg",
    "id",
  ]);
};
