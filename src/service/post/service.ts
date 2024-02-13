import { Tag } from "@/feature/Tag/type";
import { PostInfo } from "@/feature/post/type";
import { PostRepository } from "./repository";
import { PostType } from "./type";

interface PostServiceInterFace {
  getPosts(): Promise<PostInfo[]>;
  getPostsExceptSnippet(): Promise<PostInfo[]>;
  getSnippetPosts(): Promise<PostInfo[]>;
  getPostsFromTag(tag: string): Promise<PostInfo[]>;
  getPostInfoById(id: string): Promise<PostInfo>;
  getPostBodyById(id: string): Promise<string>;
  getPartialPostData({
    id,
    cursor,
  }: PostType["getPartialPost"]): Promise<PostType["getPartialPostResponse"]>;
  getTagAll(): Promise<Tag[]>;
}

export class PostService implements PostServiceInterFace {
  constructor(private postRepository: PostRepository) {}

  public async getPostsFromTag(tag: string) {
    return this.postRepository.getPosts({
      filter: [
        {
          property: "tags",
          multi_select: {
            contains: tag,
          },
        },
      ],
    });
  }

  public async getPostsExceptSnippet() {
    return this.postRepository.getPosts({
      filter: [
        {
          property: "snippet",
          checkbox: {
            equals: false,
          },
        },
      ],
    });
  }

  public async getSnippetPosts() {
    return this.postRepository.getPosts({
      filter: [
        {
          property: "snippet",
          checkbox: {
            equals: true,
          },
        },
      ],
    });
  }

  public async getPosts() {
    return this.postRepository.getPosts({});
  }

  public async getPostInfoById(id: string) {
    return this.postRepository.getPostInfo({ id });
  }

  public async getPostBodyById(id: string) {
    return this.postRepository.getPostData({ id });
  }

  public async getTagAll() {
    return this.postRepository.getTagAll();
  }

  public async getPartialPostData({
    id,
    cursor,
  }: PostType["getPartialPost"]): Promise<PostType["getPartialPostResponse"]> {
    return this.postRepository.getPartialPostData({ id, cursor });
  }
}
