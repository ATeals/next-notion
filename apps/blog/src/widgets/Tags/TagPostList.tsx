import { PostInfo, PostUIList } from "@/feature/posts";
import { postService } from "@/service/post";

export const TagPostList = async ({ tag }: { tag?: string }) => {
  let posts: PostInfo[] = [];

  if (!tag) {
    posts = await postService.getPosts();
  } else {
    posts = await postService.getPostsFromTag(tag);
  }

  return (
    <div className="h-full p-5">
      <div className="grid grid-col-1 gap-10">
        <PostUIList posts={posts} />
      </div>
    </div>
  );
};
