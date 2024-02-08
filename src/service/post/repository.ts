import { Tag } from "@/feature/Tag/type";
import { PostType } from "./type";

export abstract class PostRepository {
  constructor() {}
  abstract getPosts({ filter }: PostType["getByFilter"]): Promise<PostType["adapter"][]>;
  abstract getPostInfo({ id }: PostType["getByID"]): Promise<PostType["adapter"]>;
  abstract getPostData({ id }: PostType["getByID"]): Promise<string>;
  abstract getPartialPostData({
    id,
    cursor,
  }: PostType["getPartialPost"]): Promise<PostType["getPartialPostResponse"]>;
  abstract getTagAll(): Promise<Tag[]>;
  abstract getPostsFromTag({ tag }: PostType["getByTag"]): Promise<PostType["adapter"][]>;
}
