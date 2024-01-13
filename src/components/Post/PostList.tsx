import { PostInfo } from "@/notion/type";
import { Post } from "./Post";
import { isFullPost } from "@/notion/utils/isFullPost";

export const PostList = async ({
  fetcher,
}: {
  fetcher: () => Promise<Array<Partial<PostInfo> | undefined>>;
}) => {
  const posts = await fetcher();

  return (
    <section className="px-5 md:px-20 m-auto max-w-[1200px]">
      <section className="[&>*]:mb-10">
        {posts?.map((post) => post && isFullPost(post) && <Post key={post.id} post={post} />)}
      </section>
    </section>
  );
};
