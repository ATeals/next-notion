import { PostInfo } from "@/feature/post/type";

export abstract class PostAdapter {
  constructor() {}

  abstract get info(): PostInfo;
}
