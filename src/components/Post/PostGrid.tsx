import { PostInfo } from "@/notion/type";
import { Post } from "./Post";
import { isFullPost } from "@/notion/utils/isFullPost";

export const PostGrid = async ({
  fetcher,
}: {
  fetcher: () => Promise<Array<Partial<PostInfo> | undefined>>;
}) => {
  const posts = await fetcher();

  return (
    <section className="px-5 md:px-20 m-auto max-w-[1200px]">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[1rem] flex-col">
        {posts?.map((post) => post && isFullPost(post) && <Post key={post.id} post={post} />)}
      </section>
    </section>
  );
};
