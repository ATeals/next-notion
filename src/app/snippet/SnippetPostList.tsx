import { RecursivePartialPost } from "@/feature/post/components/PartialPost";
import { SnippetPost } from "@/feature/post/components/SnipentPost";
import { PostInfo } from "@/feature/post/type";

export const SnippetPostList = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <section className="mt-3 min-h-[800px] shadow">
      {posts.map((post) => (
        <SnippetPost key={post.id} post={post}>
          <RecursivePartialPost postId={post.id} />
        </SnippetPost>
      ))}
    </section>
  );
};
