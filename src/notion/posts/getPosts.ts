import { PostInfo, Tag } from "@/notion/type";
import { QueryDatabase } from "@/notion/api";
import { extractData } from "../utils";

export const getPosts = async () => {
  const res = await QueryDatabase(process.env.POST_DB_ID as string, {
    next: { tags: ["series"] },
    filter: [
      {
        property: "tags",
        multi_select: {
          does_not_contain: "Collection",
        },
      },
    ],
  });

  const PostList = res?.results?.reduce((a: Array<Partial<PostInfo> | undefined>, c) => {
    return [
      ...a,
      extractData(c, ["title", "description", "tags", "createdAt", "updateAt", "coverImg", "id"]),
    ];
  }, []);

  return PostList;
};
