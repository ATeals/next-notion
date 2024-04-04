import { PostInfo } from "@/feature/posts/types";
import { PostAdapter } from "./adapter";

export interface PostType {
  adapter: PostAdapter;
  info: PostInfo;
  getByID: getById;
  getByFilter: getByFilter;
  getByTag: { tag: string };
  getPartialPost: { id: string; cursor?: string };
  getPartialPostResponse: { markdown: string; cursor?: string };
}

export interface getById {
  id: string;
}

export interface getByFilter {
  filter?: any[];
}

export type PostAdapterClass<T> = new (inputValue: T) => PostType["adapter"];
