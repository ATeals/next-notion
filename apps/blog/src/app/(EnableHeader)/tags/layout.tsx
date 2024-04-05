import { postService } from "@/service/post";
import { TagListWapper } from "@/widgets/Tags";
import { PageHeader } from "@/widgets/common";

const TagsPageLayout = async ({ children }: { children: React.ReactNode }) => {
  const tags = await postService.getTagAll();

  return (
    <section className="w-full min-h-screen">
      <PageHeader className="p-5">Tags</PageHeader>
      <TagListWapper tags={tags}>{children}</TagListWapper>
    </section>
  );
};

export default TagsPageLayout;
