import { notionPostInfo } from "@/notion";
import { Tag } from "../Tag";

export const PostHeader = async ({ id }: { id: string }) => {
  const postInfo = await notionPostInfo(id);

  return (
    <div className="relative h-screen w-screen animate-fadeIn z-[-1]">
      <div
        className="absolute bg-no-repeat"
        style={{
          backgroundImage: `url(${postInfo.coverImg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center m-10">
        <div>
          <h1 className="text-gray-400 text-md md:text-center">{postInfo.created_at}</h1>
          <h1 className="text-gray-50 text-3xl italic">{postInfo.title}</h1>
        </div>

        <h1 className="text-gray-300 text-lg my-4">{postInfo.description}</h1>

        <div className="mt-10">
          {postInfo.tags.map((tag) => (
            <Tag key={tag.id} tag={tag} className="text-gray-300" />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white dark:from-[#191B1F] to-transparent"></div>
    </div>
  );
};
