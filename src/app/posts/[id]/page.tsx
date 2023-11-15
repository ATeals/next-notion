import MDXComponent from "@/components/MDXComponent";
import { notionPostData } from "@/util/notion";
import getPostData from "@/util/notion/posts/getPostData";
import { Client } from "@notionhq/client";

export default async ({ params: { id } }: { params: { id: string } }) => {
  // const parent = await notionPostData(id);

  const start = performance.now();
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const res = await getPostData(notion, id);

  console.log(performance.now() - start);

  return (
    <main className="p-4">
      <MDXComponent source={res} />
      Post
    </main>
  );
};
