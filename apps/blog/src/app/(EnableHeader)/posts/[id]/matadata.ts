import { BLOG_CONFIG } from "@/config";
import { postService } from "@/service/post";

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await postService.getPostInfoById(id);
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
            url: post.coverImg ? post.coverImg : BLOG_CONFIG.LOGO,
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
