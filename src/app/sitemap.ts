import { DOMAIN_URL } from "@/constants";
import { notionPosts } from "@/service/notion";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await notionPosts();

  return posts.map((post) => ({
    url: `${DOMAIN_URL}posts/${post?.id}`,
    changeFrequency: "daily",
    priority: 1,
  }));
}
