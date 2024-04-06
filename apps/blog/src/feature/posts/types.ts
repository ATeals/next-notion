export type Icon = { isURL: true; url: string } | { isURL: false; icon: string };

export interface PostInfo {
  title: string;
  coverImg: string;
  tags: Tag[];
  createdAt: string;
  updateAt: string;
  description: string;
  id: string;
  icon?: Icon;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}
