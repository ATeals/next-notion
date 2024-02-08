import { Tag } from "@/feature/Tag/components";
import { postService } from "@/service/post";
import Link from "next/link";

export const PostHeader = async ({ id }: { id: string }) => {
  const post = await postService.getPostInfo({ id });

  return (
    <div className="relative h-screen w-screen animate-fadeIn">
      <div
        className="absolute bg-no-repeat z-[-1]"
        style={{
          backgroundImage: `url(${post.coverImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center m-10 z-10">
        <div>
          <span className="text-gray-400 text-md md:text-center block">{post.createdAt}</span>
          <h1 className="text-gray-50 text-3xl italic">{post.title}</h1>
        </div>

        <span className="text-gray-300 text-lg my-4 block">{post.description}</span>

        <div className="mt-10">
          {post.tags.map((tag) => (
            <Tag key={tag.id} tag={tag} className="text-gray-300" />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white dark:from-[#191B1F] to-transparent"></div>
      <div className="absolute w-full h-full bg-black animate-darkening opacity-40"></div>
    </div>
  );
};
