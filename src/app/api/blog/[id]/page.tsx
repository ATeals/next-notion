import Giscus from "@/components/Comments";
import { PostBody } from "@/components/Post/PostBody";
import { LOGO_IMAGE } from "@/constants";
import { notionPostInfo } from "@/notion";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { PostHeader } from "@/components/Post/PostHeader";
import { PageProgressBar } from "@/components/PageProgressBar";
import { Toc, TocProvider } from "@/components/Toc";

export default async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <TocProvider>
      <section className="scroll-smooth">
        <PageProgressBar />

        <Suspense
          fallback={
            <div className="w-screen h-screen flex justify-center items-center">
              <LoadingIndicator />
            </div>
          }
          children={<PostHeader id={id} />}
        />

        <div className="p-4 background">
          <div className="max-w-[680px] mx-auto relative">
            <Toc />
            <Suspense fallback={<LoadingIndicator />} children={<PostBody id={id} />} />
          </div>

          <Giscus />
        </div>
      </section>
    </TocProvider>
  );
};

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await notionPostInfo(id);
  return (
    post && {
      title: ` ${post.title} | ATeals`,
      description: post.description || "ATeals의 개발 블로그",
      canonical: `posts/${post.id}`,
      openGraph: {
        type: "website",
        locale: "ko_KR",
        url: `posts/${post.id}`,
        title: post.title,
        description: post.description,
        site_name: "Teals",
        images: [
          {
            url: post.coverImg ? post.coverImg : LOGO_IMAGE,
            width: 1200,
            height: 630,
            alt: "ogImage",
          },
        ],
      },
      twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      },
    }
  );
};
