"use client";

import { PostInfo } from "@/notion/type";
import Link from "next/link";
import { ElapsedTimeComponent } from "../ElapsedTimeComponent";

export const Post = ({ post }: { post: PostInfo }) => {
  return (
    <div key={post.id} className="group">
      <Link href={`/posts/${post.id}`}>
        <div className=" overflow-hidden rounded-lg mb-5">
          <div
            className="w-full h-[200px] bg-cover rounded-lg  group-hover:scale-110 transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${
                post.coverImg ||
                "https://i.pinimg.com/564x/67/47/c8/6747c89d587400867c55c8be6bce52c3.jpg"
              })`,
            }}
          />
        </div>
      </Link>

      <>
        {post.tags.map((tag) => (
          <Link
            href={`/tags/${tag.name}`}
            key={tag.id + post.id}
            className="hover:underline cursor-pointer mr-2 text-gray-500"
          >
            #{tag.name}
          </Link>
        ))}
      </>

      <Link key={post.id} href={`/posts/${post.id}`}>
        <h1 className="text-xl group-hover:underline"> {post.title}</h1>
        <p className="text-md text-gray-500"> {post.description}</p>
        <ElapsedTimeComponent time={post.created_at} />
      </Link>
    </div>
  );
};
