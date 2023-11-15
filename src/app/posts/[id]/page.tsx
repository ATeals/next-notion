import MDXComponent from "@/components/MDXComponent";
import { notionPostData } from "@/util/notion";

export default async ({ params: { id } }: { params: { id: string } }) => {
  const parent = await notionPostData(id);

  return (
    <main className="p-4">
      <MDXComponent source={parent} />
    </main>
  );
};
