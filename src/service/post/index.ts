import { NotionPostRepository } from "./repository";
import { PostService } from "./service";
import { n2m } from "../n2m";
import { NotionPostAdapter } from "../notion/adapter/NotionPostAdapter";

export const postService = new PostService(new NotionPostRepository(n2m, NotionPostAdapter));
