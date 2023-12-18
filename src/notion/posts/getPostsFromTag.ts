import { PostInfo } from "@/notion/type";
import { QueryDatabase } from "@/notion/api";
import { extractData } from "../utils";

export const getPostsFromTag = async (tag: string) => {
  const { results } = await QueryDatabase(process.env.POST_DB_ID as string, {
    filter: [
      {
        property: "tags",
        multi_select: {
          contains: tag,
        },
      },
    ],
  });

  const PostList = results?.reduce((a: Array<Partial<PostInfo> | undefined>, c) => {
    return [
      ...a,
      extractData(c, ["title", "description", "tags", "createdAt", "updateAt", "coverImg", "id"]),
    ];
  }, []);

  return PostList;
};
