"use client";

import { BLOG_CONFIG, SITE_CONFIG } from "@/config";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export interface OpenGraph {
  title: string;
  img: string;
  url: string;
  description: string;
}

export const a = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return children === "bookmark" ? (
    <ErrorBoundary errorComponent={() => <div></div>}>
      <BookMark href={href} />
    </ErrorBoundary>
  ) : (
    <a href={href}> {children ? children : href}</a>
  );
};

const BookMark = async ({ href }: { href: string | undefined }) => {
  const og: OpenGraph = await (await fetch(`${BLOG_CONFIG.DOMAIN}/api/og?url=${href}`)).json();

  const { title, url, img, description } = og;

  const isValidOg = title !== undefined && img !== undefined;

  return isValidOg ? (
    <a
      href={href}
      target="_blank"
      className="my-10 block md:flex shadow-md hover:scale-105 group no-underline md:max-h-[200px] transition-all duration-200 ease-in-out"
    >
      <span className="block w-full md:w-[40%] h-[200px] md:h-auto">
        <img src={img} alt="ogImage" className="object-contain md:object-cover w-full h-full m-0" />
      </span>
      <span className="flex flex-col justify-center p-5 md:w-[60%]">
        <span className="block mb-5">{title}</span>
        <span className="block text-sm text-gray-400 mb-5 overflow-clip">
          {description.length > 125 ? description.slice(1, 125) + "..." : description}
        </span>
        <span className="group-hover:text-secondary-lg md:text-end text-sm text-gray-400 overflow-hidden overflow-ellipsis max-h-[1.4rem]">
          {url}
        </span>
      </span>
    </a>
  ) : (
    <a href={href}> {href}</a>
  );
};
