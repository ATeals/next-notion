import { PostUIList } from "@/feature/posts/PostUILIst";
import { postService } from "@/service/post";
import { DEFAULT_HEADER_HEIGHT } from "src/config";

const PostPage = async () => {
  const posts = await postService.getPosts();

  console.log(posts);

  return (
    <div className="h-full pt-15 p-5" style={{ paddingTop: DEFAULT_HEADER_HEIGHT }}>
      <div className="grid grid-col-1 gap-10 py-10">
        <PostUIList posts={posts} />
      </div>
    </div>
  );
};

export default PostPage;
