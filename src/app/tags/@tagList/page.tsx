import { postService } from "@/service/post";
import { TagList } from "@/feature/Tag/components";

export default async () => {
  const tags = await postService.getTagAll();

  return <TagList tags={tags} />;
};
