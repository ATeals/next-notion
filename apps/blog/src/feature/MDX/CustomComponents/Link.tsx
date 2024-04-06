"use client";

import { SITE_CONFIG } from "@/config";
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
  const BASE_URL =
    process.env.NODE_ENV === "production" ? SITE_CONFIG.url : "http://localhost:3000/";

  const og: OpenGraph = await (await fetch(`${BASE_URL}api/og?url=${href}`)).json();

  const { title, url, img, description } = og;

  const isFullOg = title !== undefined && img !== undefined;

  return (
    isFullOg && (
      <a
        href={href}
        target="_blank"
        className="my-10 block lg:flex shadow-md hover:scale-105 group no-underline lg:max-h-[200px]"
      >
        <span className="block w-full lg:w-[40%] ">
          <img src={img} alt="ogImage" className="object-cover w-full h-full m-0" />
        </span>
        <span className="flex flex-col justify-center p-5 lg:w-[60%]">
          <span className="block mb-5">{title}</span>
          <span className="block text-sm text-gray-400 mb-5 overflow-clip">
            {description.length > 125 ? description.slice(1, 125) + "..." : description}
          </span>
          <span className="lg:text-end text-sm text-gray-400 overflow-hidden overflow-ellipsis max-h-[1.4rem]">
            {url}
          </span>
        </span>
      </a>
    )
  );
};
