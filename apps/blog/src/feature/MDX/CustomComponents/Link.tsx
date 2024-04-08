"use client";

import { BLOG_CONFIG } from "@/config";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense, useEffect, useState } from "react";

export interface OpenGraph {
  title: string;
  img: string;
  url: string;
  description: string;
}

export const a = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return children === "bookmark" && href ? (
    <ErrorBoundary errorComponent={() => <span></span>}>
      <BookMark href={href} />
    </ErrorBoundary>
  ) : (
    <a href={href}> {children ? children : href}</a>
  );
};

const useOg = (href: string) => {
  const [og, setOg] = useState<OpenGraph | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOg = async (href: string) => {
    const og: OpenGraph = await (await fetch(`${BLOG_CONFIG.DOMAIN}/api/og?url=${href}`)).json();

    setOg(og);
    setLoading(false);
  };

  useEffect(() => {
    fetchOg(href);
  }, [href]);

  return { og, loading };
};

const BookMark = ({ href }: { href: string }) => {
  const { og, loading } = useOg(href);

  if (loading)
    return <a href={href} className="min-h-[200px] w-full bg-gray-300 animate-pulse"></a>;

  return og ? (
    <a
      href={href}
      target="_blank"
      className="group/bookmark my-10 block md:flex  shadow-md hover:scale-105  no-underline md:max-h-[200px] transition-all duration-200 ease-in-out"
    >
      <span className="block w-full md:w-[40%] h-[200px] md:h-auto">
        <img
          src={og.img}
          alt="ogImage"
          className="object-contain md:object-cover w-full h-full m-0"
        />
      </span>
      <span className="flex flex-col justify-center p-5 md:w-[60%]">
        <span className="block mb-5">{og.title}</span>
        <span className="block text-sm text-gray-400 mb-5 overflow-clip">
          {og.description.length > 125 ? og.description.slice(1, 125) + "..." : og.description}
        </span>
        <span className="group-hover/bookmark:text-secondary-lg text-sm text-gray-400 overflow-hidden overflow-ellipsis max-h-[1.4rem]">
          {og.url}
        </span>
      </span>
    </a>
  ) : (
    <a href={href}> {href}</a>
  );
};
