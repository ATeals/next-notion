import { postService } from "@/service/post";
import { TagNavigation } from "./TagNavigation";

export const TagNavigationFetcher = async () => {
  const tags = await postService.getTagAll();

  return <TagNavigation tags={tags} />;
};
