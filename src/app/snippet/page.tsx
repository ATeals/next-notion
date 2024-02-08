import { notionPosts } from "@/service/notion";

import Link from "next/link";
import { generateClassName } from "@/feature/common/util/generateClassName";

export default async () => {
  const posts = await notionPosts({
    filter: [
      {
        property: "snippet",
        checkbox: {
          equals: true,
        },
      },
    ],
  });
  return (
    <section className="dark:text-white mt-[80px] max-w-[680px] m-auto">
      <h1 className="font-bold text-4xl my-5 px-10 md:px-20">Snippet</h1>
      <section className="md:max-m-10 m-auto px-10 md:px-20 group/list">
        {posts.map((post) => (
          <article className=" my-5 group">
            <Link href={`/posts/${post?.id}`} key={post?.id}>
              <div className=" group-hover:underline flex justify-between group-hover/list:text-gray-200 dark:group-hover/list:text-gray-700">
                <span className="lg:text-lg group-hover:text-black dark:group-hover:text-white">
                  {post?.title}
                </span>
                <span className="group-hover:text-black dark:group-hover:text-white">
                  {post?.createdAt}
                </span>
              </div>
              <div
                className={generateClassName(
                  "max-h-0 overflow-hidden text-xs transition-[max-height] duration-500 group-hover:max-h-10",
                  "text-sm lg:text-md text-gray-400 my-2"
                )}
              >
                <p>{post?.description}</p>
                <div className="hidden group-hover:block mt-2">
                  {post?.tags?.map((tag) => (
                    <span>#{tag.name}</span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
};
