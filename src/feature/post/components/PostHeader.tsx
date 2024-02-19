import { Tag } from "@/feature/Tag/components";
import { postService } from "@/service/post";
import { PostIcon } from "./PostIcon";

export const PostHeader = async ({ id }: { id: string }) => {
  const post = await postService.getPostInfoById(id);

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

      <div className="absolute inset-0 flex flex-col md:items-center justify-end md:justify-center m-5 z-10 [&>*]:text-shadow-lg shadow-black">
        {post.icon && <PostIcon icon={post.icon} size="lg" className="mb-5 md:m-5" />}

        <span className="text-gray-400 text-md block">{post.createdAt}</span>
        <h1 className="text-gray-50 text-3xl">{post.title}</h1>

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
