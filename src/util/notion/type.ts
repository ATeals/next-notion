export interface PostInfo {
  title: string;
  coverImg: string;
  tags: string[];
  created_at: string;
  series: string;
  description: string;
  id: string;
}

export interface tag {
  id: string;
  name: string;
  color: string;
}

export interface CompactPost {
  title: string;
  id: string;
}

export interface AsideListObject {
  title: string;
  id: string;
  posts: Array<CompactPost>;
}
