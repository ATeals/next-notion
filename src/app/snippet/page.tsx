import { notionPosts } from "@/notion";

import Link from "next/link";
import { TagList } from "../tags/@tagList/TagList";

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
      <section className="md:max-m-10 m-auto px-10 md:px-20">
        {posts.map((post) => (
          <article className=" my-5 group">
            <Link href={`/posts/${post?.id}`} key={post?.id}>
              <div className="group-hover:underline flex justify-between">
                <span className="lg:text-lg">{post?.title}</span>
                <span className="text-gray-400">{post?.createdAt}</span>
              </div>
              <p className="hidden group-hover:block animate-fadeIn text-sm lg:text-md text-gray-400 my-2">
                {post?.description}
              </p>
            </Link>
            <div className="hidden group-hover:block animate-fadeIn">
              {post?.tags?.map((tag) => (
                <Link
                  href={`/tags/${tag.name}`}
                  key={tag.id + post.id}
                  className="hover:underline cursor-pointer mr-2 text-gray-400 text-sm lg:text-md"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};
