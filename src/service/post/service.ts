import { PostRepository } from "./repository";
import { PostType } from "./type";

export class PostService {
  constructor(private postRepository: PostRepository) {}

  async getPostData({ id }: PostType["getByID"]) {
    return this.postRepository.getPostData({ id });
  }

  async getPosts({ filter }: PostType["getByFilter"] = {}) {
    return this.postRepository.getPosts({ filter });
  }

  async getPostInfo({ id }: PostType["getByID"]) {
    return this.postRepository.getPostInfo({ id });
  }

  async getTagAll() {
    return this.postRepository.getTagAll();
  }

  async getPostsFromTag({ tag }: PostType["getByTag"]) {
    return this.postRepository.getPostsFromTag({ tag });
  }

  async getPartialPostData({
    id,
    cursor,
  }: PostType["getPartialPost"]): Promise<PostType["getPartialPostResponse"]> {
    return this.postRepository.getPartialPostData({ id, cursor });
  }
}
