import { usePostContext } from "../../hooks/usePostContext";

export const Image = () => {
  const post = usePostContext();
  return (
    <div className=" overflow-hidden rounded-lg mb-5 group-hover:scale-105 duration-200 group-hover:shadow-xl">
      <div
        className="w-full h-[200px] bg-cover rounded-lg  group-hover:scale-110 transition duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${post.coverImg})`,
        }}
      />
    </div>
  );
};
