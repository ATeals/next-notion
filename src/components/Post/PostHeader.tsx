import { notionPostInfo } from "@/notion";
import { Tag } from "../Tag";
import { MAIN_WEBP } from "@/constants";

export const PostHeader = async ({ id }: { id: string }) => {
  const postInfo = await notionPostInfo(id);

  return (
    <div className="relative h-screen w-screen animate-fadeIn z-[-1]">
      <div
        className="absolute bg-no-repeat"
        style={{
          backgroundImage: `url(${postInfo?.coverImg || MAIN_WEBP})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center m-10 z-10">
        <div>
          <span className="text-gray-400 text-md md:text-center block">{postInfo?.createdAt}</span>
          <h1 className="text-gray-50 text-3xl italic">{postInfo?.title}</h1>
        </div>

        <span className="text-gray-300 text-lg my-4 block">{postInfo?.description}</span>

        <div className="mt-10">
          {postInfo?.tags?.map((tag) => (
            <Tag key={tag.id} tag={tag} className="text-gray-300" />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white dark:from-[#191B1F] to-transparent"></div>
      <div className="absolute w-full h-full bg-black animate-darkening opacity-40"></div>
    </div>
  );
};
