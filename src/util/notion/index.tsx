import { Client } from "@notionhq/client";

import getPostData from "./posts/getPostData";
import getPostInfo from "./posts/getPostInfo";
import { getPostList } from "./posts/getPostList";
import getTagsList from "./posts/getSeriesList";

const notion = new Client({ auth: process.env.NOTION_KEY });

const notionTagsList = () => getTagsList(notion);
const notionPostData = (id: string) => getPostData(notion, id);
const notionPostInfo = (id: string) => getPostInfo(notion, id);
const notionPostList = () => getPostList(notion);

export { notionTagsList, notionPostData, notionPostInfo, notionPostList };
