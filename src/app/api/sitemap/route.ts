import { DOMAIN_URL } from "@/constants";
import { notionPosts } from "@/service/notion";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
  const posts = await notionPosts();

  const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url><loc>${DOMAIN_URL}</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
    ${posts
      .map(
        (post) =>
          post &&
          `<url><loc>${DOMAIN_URL}posts/${post.id}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`
      )
      .join("\n")}
    </urlset>`;

  return new Response(xmlData, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
