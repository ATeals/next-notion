import { PostInfo } from "@/feature/posts/types";

export abstract class PostAdapter {
  constructor() {}

  abstract get info(): PostInfo;
}
