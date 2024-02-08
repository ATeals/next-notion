import { PostDTO, PostRepository } from "./repository";

export class PostService {
  constructor(private postRepository: PostRepository) {}

  async getPostData({ id }: PostDTO["getByID"]) {
    return this.postRepository.getPostData({ id });
  }

  async getPosts({ filter }: PostDTO["getByFilter"] = {}) {
    return this.postRepository.getPosts({ filter });
  }

  async getPostInfo({ id }: PostDTO["getByID"]) {
    return this.postRepository.getPostInfo({ id });
  }

  async getTagAll() {
    return this.postRepository.getTagAll();
  }

  async getPostsFromTag({ tag }: PostDTO["getByTag"]) {
    return this.postRepository.getPostsFromTag({ tag });
  }

  async getPartialPostData({
    id,
    cursor,
  }: PostDTO["getPartialPost"]): Promise<PostDTO["getPartialPostResponse"]> {
    return this.postRepository.getPartialPostData({ id, cursor });
  }
}
