import { siteConfig } from "@/config";
import { OpenGraph } from "@/types/openGraph";

export const a = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return children === "bookmark" ? (
    <BookMark href={href} />
  ) : (
    <a href={href}> {children ? children : href}</a>
  );
};

const BookMark = async ({ href }: { href: string | undefined }) => {
  const BASE_URL =
    process.env.NODE_ENV === "production" ? siteConfig.url : "http://localhost:3000/";

  const og: OpenGraph = await (await fetch(`${BASE_URL}api/og?url=${href}`)).json();

  const {
    ogTitle: title,
    ogImage: [image],
    ogDescription: description,
    ogUrl: url,
  } = og;

  const isFullOg = title !== undefined && image !== undefined;

  return (
    isFullOg && (
      <a
        href={href}
        target="_blank"
        className="my-10 block lg:flex shadow-md hover:scale-105 group no-underline"
      >
        <span className="block w-full lg:w-[40%] ">
          <img src={image.url} alt="ogImage" className="object-cover w-full h-full m-0" />
        </span>
        <span className="flex flex-col justify-center p-5">
          <span className="block mb-5">{title}</span>
          <span className="block text-sm text-gray-400 mb-5">{description}</span>
          <span className="lg:text-end text-sm text-gray-400 overflow-hidden overflow-ellipsis max-h-[1.4rem]">
            {url}
          </span>
        </span>
      </a>
    )
  );
};
