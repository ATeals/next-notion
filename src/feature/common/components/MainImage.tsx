import { MAIN_WEBP } from "@/constants";

export const MainImage = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] w-screen">
      <div
        className="absolute top-0 left-0 z-[-1] bg-no-repeat animate-fadeIn"
        style={{
          backgroundImage: `url(${MAIN_WEBP})`,
          backgroundPosition: "center top -240px",
          backgroundSize: "cover",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center animate-fadeIn">
        <h1 className="text-gray-200 text-4xl italic">Teals Blog</h1>
        <h1 className="text-gray-200 text-xl"></h1>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-white dark:from-[#191B1F] to-transparent"></div>
    </div>
  );
};
