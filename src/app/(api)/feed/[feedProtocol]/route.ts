import { siteConfig } from "@/config";
import { notionPosts } from "@/notion";
import { isFullPost } from "@/notion/utils/isFullPost";
import { Feed } from "feed";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params: { feedProtocol } }: { params: { feedProtocol: string } }
) => {
  const posts = await notionPosts();

  const feed = new Feed({
    title: siteConfig.title,
    description: siteConfig.description,
    id: siteConfig.url,
    language: "ko",
    image: `${siteConfig.url}images/main.jpg`,
    favicon: `${siteConfig.url}favicon.ico`,
    copyright: `All rights reserved since ${siteConfig.since}, ${siteConfig.owner.name}`,
    author: siteConfig.owner,
    generator: "generate-rss",
    link: siteConfig.url,
  });

  posts.forEach((post) => {
    if (post === undefined || !isFullPost(post)) return;

    feed.addItem({
      title: post.title,
      id: post.id,
      link: `${siteConfig.url}posts/${post.id}`,
      description: post.description,
      author: [siteConfig.owner],
      contributor: [siteConfig.owner],
      image: post.coverImg || `${siteConfig.url}images/main.jpg`,
      date: new Date(post.createdAt),
      category: post.tags.map((tag) => ({ name: tag.name })),
    });
  });

  feed.addCategory("Technologies");

  if (feedProtocol === "rss")
    return new Response(feed.rss2(), { headers: { "Content-Type": "text/xml" } });
  else if (feedProtocol === "json")
    return new Response(feed.json1(), { headers: { "Content-Type": "application/json" } });
  else if (feedProtocol === "atom")
    return new Response(feed.atom1(), { headers: { "Content-Type": "text/xml" } });
  else return NextResponse.json({ error: "Invalid feed property" }, { status: 404 });
};
