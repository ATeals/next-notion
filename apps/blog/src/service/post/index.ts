import { PostService } from "./service";
import { n2m } from "../n2m";
import { NotionPostAdapter } from "../notion/adapter/NotionPostAdapter";
import { NotionPostRepository } from "../notion/repository";

export const postService = new PostService(new NotionPostRepository(n2m, NotionPostAdapter));
