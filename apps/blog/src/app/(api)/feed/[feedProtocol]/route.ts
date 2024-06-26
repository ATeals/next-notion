import { BLOG_CONFIG, SITE_CONFIG } from "@/config";
import { postService } from "@/service/post";
import { Feed } from "feed";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params: { feedProtocol } }: { params: { feedProtocol: string } }
) => {
  const posts = await postService.getPosts();

  const feed = new Feed({
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    id: SITE_CONFIG.url,
    language: "ko",
    image: `${SITE_CONFIG.url}images/main.jpg`,
    favicon: `${SITE_CONFIG.url}favicon.ico`,
    copyright: `All rights reserved since ${SITE_CONFIG.since}, ${SITE_CONFIG.owner.name}`,
    author: SITE_CONFIG.owner,
    generator: "generate-rss",
    link: SITE_CONFIG.url,
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.id,
      link: `${SITE_CONFIG.url}posts/${post.id}`,
      description: post.description,
      author: [SITE_CONFIG.owner],
      contributor: [SITE_CONFIG.owner],
      image: `${BLOG_CONFIG.DOMAIN}/${BLOG_CONFIG.MAIN_JPG}`,
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
