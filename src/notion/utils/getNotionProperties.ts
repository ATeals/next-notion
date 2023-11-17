import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const getNotionProperties = (property: BlockObjectResponse, type: string) => {
  return property.type === type ? property : undefined;
};

export default getNotionProperties;
