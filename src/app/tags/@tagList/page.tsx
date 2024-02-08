import { postService } from "@/service/post";
import { TagList } from "./TagList";

export default async () => {
  const tags = await postService.getTagAll();

  return <TagList tags={tags} />;
};
