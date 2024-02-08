import { Tag } from "../../service/notion/type";

export interface PostInfo {
  title: string;
  coverImg: string;
  tags: Tag[];
  createdAt: string;
  updateAt: string;
  description: string;
  id: string;
}
