import { PostInfo, Tag } from "@/feature/posts/types";
import { PostRepository } from "./repository";
import { PostType } from "./type";

interface PostServiceInterFace {
  getPosts(): Promise<PostInfo[]>;
  getPostsExceptSnippet(): Promise<PostInfo[]>;
  getSnippetPosts(option: { tag?: string }): Promise<PostInfo[]>;
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

  public async getSnippetPosts({ tag }: { tag?: string } = {}) {
    const filter = [
      {
        property: "snippet",
        checkbox: {
          equals: true,
        },
      },
      tag && {
        property: "tags",
        multi_select: {
          contains: tag,
        },
      },
    ].filter((i) => i);

    return this.postRepository.getPosts({ filter });
  }

  public async getPosts() {
    return this.postRepository.getPosts({
      filter: [
        {
          property: "tags",
          multi_select: {
            does_not_contain: "링크",
          },
        },
      ],
    });
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
