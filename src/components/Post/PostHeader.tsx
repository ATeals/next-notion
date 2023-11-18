import { notionPostInfo } from "@/notion";

export const PostHeader = async ({ id }: { id: string }) => {
  const postInfo = await notionPostInfo(id);

  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-fixed bg-center-safari bg-center md:bg-left"
        style={{
          backgroundImage: `url(${postInfo.coverImg})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center m-10">
        <div>
          <h1 className="text-gray-400 text-md md:text-center">{postInfo.created_at}</h1>
          <h1 className="text-gray-50 text-3xl italic">{postInfo.title}</h1>
        </div>

        <h1 className="text-gray-300 text-lg my-4">{postInfo.description}</h1>

        <div className="mt-10">
          {postInfo.tags.map((tag) => (
            <span className="text-lg text-gray-300 mx-2" key={tag.id}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};
