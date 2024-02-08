import { PostInfo } from "@/service/notion/type";

export const PostsFetcher = async ({
  fetcher,
  children,
}: {
  fetcher: () => Promise<Array<PostInfo>>;
  children: ({ posts }: { posts: Array<PostInfo> }) => JSX.Element;
}) => {
  const posts = await fetcher();

  return children({ posts });
};
