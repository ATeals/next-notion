import { PostUIList } from "@/feature/posts";
import { postService } from "@/service/post";
import { PageHeader } from "@/widgets/common";
import { DEFAULT_HEADER_HEIGHT } from "src/config";

const PostPage = async () => {
  const posts = await postService.getPostsExceptSnippet();

  return (
    <div className="h-full pt-15 p-5" style={{ paddingTop: DEFAULT_HEADER_HEIGHT }}>
      <PageHeader>POSTS</PageHeader>
      <div className="grid grid-col-1 gap-10 py-10">
        <PostUIList posts={posts} />
      </div>
    </div>
  );
};

export default PostPage;
