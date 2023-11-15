import MDXComponent from "@/components/MDXComponent";
import { notionPostData } from "@/util/notion";

export default async ({ params: { id } }: { params: { id: string } }) => {
  const start = performance.now();
  const parent = await notionPostData(id);

  console.log(performance.now() - start);
  return (
    <main className="p-4">
      <MDXComponent source={parent} />
    </main>
  );
};
