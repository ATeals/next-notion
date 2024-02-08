import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";
import { PostAdapterClass, PostType } from "../post/type";
import { PostRepository } from "../post/repository";
import { QueryDatabase, RetrieveBlockChildren, RetrieveDatabase, RetrievePage } from "./api";
import { Tag } from "./type";

export class NotionPostRepository implements PostRepository {
  constructor(
    private n2m: NotionToMarkdown,
    private adapter: PostAdapterClass<PageObjectResponse>
  ) {}

  async getPostData({ id }: PostType["getByID"]): Promise<string> {
    const arr = [];
    const res = await RetrieveBlockChildren(id);

    arr.push(...res.results);
    let start_cursor = res.next_cursor;
    while (start_cursor) {
      const res = await RetrieveBlockChildren(id, start_cursor);

      if (start_cursor === res.next_cursor) break;

      arr.push(...res.results);
      start_cursor = res.next_cursor;
    }

    const x = await this.n2m.blocksToMarkdown(arr);
    const { parent } = this.n2m.toMarkdownString(x);

    return parent;
  }

  async getPartialPostData({
    id,
    cursor,
  }: PostType["getPartialPost"]): Promise<PostType["getPartialPostResponse"]> {
    const { results, next_cursor } = await RetrieveBlockChildren(id, cursor);

    const x = await this.n2m.blocksToMarkdown(results);
    const { parent: markdown } = this.n2m.toMarkdownString(x);

    return { markdown, cursor: next_cursor || undefined };
  }

  async getTagAll(): Promise<Tag[]> {
    const response = await RetrieveDatabase(process.env.POST_DB_ID as string, ["tag"]);

    const tags = response.properties?.tags;

    return tags.type === "multi_select" ? (tags.multi_select.options as Tag[]) : [];
  }

  async getPostInfo({ id }: PostType["getByID"]): Promise<PostType["adapter"]> {
    const response = await RetrievePage(id);

    return new this.adapter(response);
  }

  async getPosts({ filter }: PostType["getByFilter"]): Promise<PostType["adapter"][]> {
    const { results } = await QueryDatabase(process.env.POST_DB_ID as string, {
      next: { tags: ["series"] },
      filter,
    });

    const PostList = results?.reduce((a: Array<PostType["adapter"]>, c) => {
      return isFullPageResponse(c) ? [...a, new this.adapter(c)] : a;
    }, []);

    return PostList;
  }

  async getPostsFromTag({ tag }: PostType["getByTag"]) {
    const { results } = await QueryDatabase(process.env.POST_DB_ID as string, {
      filter: [
        {
          property: "tags",
          multi_select: {
            contains: tag,
          },
        },
      ],
    });

    const PostList = results?.reduce((a: PostType["adapter"][], c) => {
      return isFullPageResponse(c) ? [...a, new this.adapter(c)] : a;
    }, []);

    return PostList;
  }
}
