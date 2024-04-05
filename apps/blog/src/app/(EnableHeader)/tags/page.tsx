import { LoadingIndicator } from "@/atom";
import { TagPostList } from "@/widgets/Tags/TagPostList";
import { Suspense } from "react";

const PostPage = async () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <TagPostList />
    </Suspense>
  );
};

export default PostPage;
