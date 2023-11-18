import Giscus from "@/components/Comments";
import Portal from "@/components/Portal";
import { PostBody } from "@/components/Post/PostBody";
import RevalidatePost from "@/components/RevalidatePost";
import { LOGO_IMAGE, REVALIDATE_TAGNAME } from "@/constants";
import { notionPostInfo } from "@/notion";

export default async ({ params: { id } }: { params: { id: string } }) => {
  const postInfo = await notionPostInfo(id);

  return (
    <section>
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

      <div className="p-4">
        <PostBody id={id} />
      </div>

      <Giscus />
      <Portal component={<RevalidatePost id={id} />} elementId={REVALIDATE_TAGNAME} />
    </section>
  );
};

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await notionPostInfo(id);
  return (
    post && {
      title: ` ${post.title} | Teals`,
      description: post.description || "Teals의 개발 블로그",
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
            width: 1900,
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
