import { LoadingIndicator } from "@/atom";
import { TagPostList } from "@/widgets/Tags/TagPostList";
import { Suspense } from "react";

const TagsPage = async ({ params: { id } }: { params: { id: string } }) => {
  const tag = decodeURI(id);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <TagPostList tag={tag} />
    </Suspense>
  );
};

export default TagsPage;
