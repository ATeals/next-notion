import { generateClassName } from "@/util/generateClassName";
import { notionTags } from "@/notion";
import Link from "next/link";

export const revalidate = 0;

export default async () => {
  const tags = await notionTags();
  return (
    <section className="mt-[80px]">
      <h1 className="font-bold text-4xl my-10 w-[70%] m-auto">TAGS</h1>
      <section className="whitespace-normal shadow-xl p-5 py-10 rounded-xl min-h-[680px] md:max-w-[70%] m-auto ">
        {tags?.map((tag) => (
          <Link href={`/tags/${tag.name}`} key={tag.name}>
            <span className={generateClassName("m-2", "text-lg", "hover:underline")}>
              #{tag.name}
            </span>
          </Link>
        ))}
      </section>
    </section>
  );
};
