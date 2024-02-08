import { PostInfo } from "@/feature/post/type";
import { PostAdapter } from "./Adapter";

export interface PostType {
  adapter: PostAdapter;
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
