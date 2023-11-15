import { Client } from "@notionhq/client";

import getSeriesList from "./posts/getSeriesList";
import getPostData from "./posts/getPostData";
import getPostInfo from "./posts/getPostInfo";
import { getPostList } from "./posts/getPostList";

const notion = new Client({ auth: process.env.NOTION_KEY });

const notionSeriesList = () => getSeriesList(notion);
const notionPostData = (id: string) => getPostData(notion, id);
const notionPostInfo = (id: string) => getPostInfo(notion, id);
const notionPostList = () => getPostList(notion);

export { notionSeriesList, notionPostData, notionPostInfo, notionPostList };
