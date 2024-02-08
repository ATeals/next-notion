import { PostInfo } from "../type";

export const isValidPost = (postInfo: Partial<PostInfo>): postInfo is PostInfo => {
  return (
    typeof postInfo.id === "string" &&
    typeof postInfo.createdAt === "string" &&
    typeof postInfo.title === "string"
  );
};
