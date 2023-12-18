import { notionTags } from "@/notion";
import { Tag } from "@/components/Tag";

export default async () => {
  const tags = await notionTags();
  return (
    <section className="mt-[80px] dark:text-white">
      <h1 className="font-bold text-4xl my-10 xl:w-[1200px] px-20 mx-auto">TAGS</h1>
      <section className="whitespace-normal shadow-xl p-5 py-10 rounded-xl min-h-[680px] md:max-w-[70%] m-auto">
        {tags?.map((tag) => (
          <Tag key={tag.id} tag={tag} className="text-[18px]" />
        ))}
      </section>
    </section>
  );
};
