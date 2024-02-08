import { Tag } from "../Tag/type";

export interface PostInfo {
  title: string;
  coverImg: string;
  tags: Tag[];
  createdAt: string;
  updateAt: string;
  description: string;
  id: string;
}
