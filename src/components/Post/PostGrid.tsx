import { PostInfo } from "@/notion/type";
import { Post } from "./Post";

export const PostGrid = async ({ fetcher }: { fetcher: () => Promise<PostInfo[]> }) => {
  const posts = await fetcher();

  return (
    <section className="px-[2em] m-auto max-w-[1200px]">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-[1rem] flex-col">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
};
