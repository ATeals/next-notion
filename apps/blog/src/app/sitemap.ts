import { SITE_CONFIG } from "@/config";
import { postService } from "@/service/post";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await postService.getPosts();

  return posts.map((post) => ({
    url: `${SITE_CONFIG.url}posts/${post?.id}`,
    changeFrequency: "daily",
    priority: 1,
  }));
}
