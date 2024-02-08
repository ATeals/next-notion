import { Tag } from "@/feature/Tag/type";
import { PostType } from "./type";

export abstract class PostRepository {
  constructor() {}
  abstract getPosts({ filter }: PostType["getByFilter"]): Promise<PostType["info"][]>;
  abstract getPostInfo({ id }: PostType["getByID"]): Promise<PostType["info"]>;
  abstract getPostData({ id }: PostType["getByID"]): Promise<string>;
  abstract getPartialPostData({
    id,
    cursor,
  }: PostType["getPartialPost"]): Promise<PostType["getPartialPostResponse"]>;
  abstract getTagAll(): Promise<Tag[]>;
  abstract getPostsFromTag({ tag }: PostType["getByTag"]): Promise<PostType["info"][]>;
}
