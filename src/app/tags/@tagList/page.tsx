import { notionTags } from "@/service/notion";
import { TagList } from "./TagList";

export default async () => {
  const tags = await notionTags();

  return <TagList tags={tags} />;
};
