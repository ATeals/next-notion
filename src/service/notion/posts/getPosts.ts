import { PostInfo, Tag } from "@/service/notion/type";
import { QueryDatabase } from "@/service/notion/api";
import { extractData } from "../utils";

export const getPosts = async ({ filter }: { filter?: any[] } = {}) => {
  const res = await QueryDatabase(process.env.POST_DB_ID as string, {
    next: { tags: ["series"] },
    filter,
  });

  const PostList = res?.results?.reduce((a: Array<Partial<PostInfo> | undefined>, c) => {
    return [
      ...a,
      extractData(c, ["title", "description", "tags", "createdAt", "updateAt", "coverImg", "id"]),
    ];
  }, []);

  return PostList as PostInfo[];
};
