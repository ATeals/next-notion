"use client";

import { PostInfo } from "@/notion/type";
import Link from "next/link";
import { ElapsedTimeComponent } from "../ElapsedTimeComponent";

export const FirstPost = ({ post }: { post: PostInfo }) => {
  return (
    <div key={post.id} className="group flex items-center my-10">
      <Link href={`/posts/${post.id}`} className="w-[50%]">
        <div className=" overflow-hidden rounded-lg mb-5">
          <div
            className="w-full h-[300px] bg-cover rounded-lg  group-hover:scale-110 transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${
                post.coverImg ||
                "https://i.pinimg.com/564x/67/47/c8/6747c89d587400867c55c8be6bce52c3.jpg"
              })`,
            }}
          />
        </div>
      </Link>
      <div className="w-[50%] p-10">
        <div>
          {post.tags.map((tag) => (
            <Link
              href={`/tags/${tag.name}`}
              key={tag.id + post.id}
              className="hover:underline cursor-pointer mr-2 text-gray-500"
            >
              #{tag.name}
            </Link>
          ))}
        </div>

        <Link key={post.id} href={`/posts/${post.id}`}>
          <h1 className="text-2xl group-hover:underline"> {post.title}</h1>
          <p className="text-lg text-gray-500"> {post.description}</p>
          <ElapsedTimeComponent time={post.created_at} />
        </Link>
      </div>
    </div>
  );
};
