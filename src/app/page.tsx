import { LoadingIndicator } from "@/components/LoadingIndicator";
import { PostGrid } from "@/components/Post/PostGrid";
import { siteConfig } from "@/config";
import { DOMAIN_URL, MAIN_JPG, MAIN_WEBP } from "@/constants";
import { notionPosts } from "@/notion";
import { Suspense } from "react";

export default async () => {
  return (
    <section>
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
      <div className="background min-h-[680px] z-10">
        <Suspense
          fallback={<LoadingIndicator />}
          children={
            <PostGrid
              fetcher={() =>
                notionPosts({
                  filter: [
                    {
                      property: "snippet",
                      checkbox: {
                        equals: false,
                      },
                    },
                  ],
                })
              }
            />
          }
        />
      </div>
    </section>
  );
};
