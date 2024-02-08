import { SITE_CONFIG } from "@/config";
import { notionPosts } from "@/service/notion";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await notionPosts();

  return posts.map((post) => ({
    url: `${SITE_CONFIG.url}posts/${post?.id}`,
    changeFrequency: "daily",
    priority: 1,
  }));
}
