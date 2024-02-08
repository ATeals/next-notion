import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { MAIN_WEBP } from "@/feature/common/constants";
import { PostInfo } from "@/feature/post/type";

export class NotionPostAdapter {
  private id;
  private title;
  private description;
  private tags;
  private createdAt;
  private updateAt;
  private coverImg;

  constructor(notionPageResponse: PageObjectResponse) {
    (this.id = notionPageResponse.id),
      (this.title =
        notionPageResponse.properties.title.type === "title"
          ? notionPageResponse.properties?.title.title[0]?.plain_text
          : undefined),
      (this.description =
        notionPageResponse.properties?.description.type === "rich_text"
          ? notionPageResponse.properties.description.rich_text[0]?.plain_text
          : undefined),
      (this.tags =
        notionPageResponse.properties?.tags.type === "multi_select"
          ? notionPageResponse.properties.tags.multi_select
          : []),
      (this.createdAt = notionPageResponse.created_time?.slice(0, 10)),
      (this.updateAt = notionPageResponse.last_edited_time?.slice(0, 10)),
      (this.coverImg =
        notionPageResponse.cover?.type === "external"
          ? notionPageResponse?.cover?.external.url
          : notionPageResponse?.cover?.file.url || undefined);
  }

  get info() {
    const postInfo: PostInfo = {
      id: this.id,
      title: this.title || "",
      description: this.description || "",
      tags: this.tags,
      createdAt: this.createdAt,
      updateAt: this.updateAt,
      coverImg: this.coverImg || MAIN_WEBP,
    };

    return postInfo;
  }
}
