import { Client } from "@notionhq/client";
import { QueryDatabase, RetrieveDatabase } from "../../api/notion";
import { AsideListObject } from "../type";

const getSeriesList = async (notion: Client): Promise<AsideListObject[]> => {
    const response = await RetrieveDatabase(process.env.POST_DB_ID as string, ["series"]);

    const { results } = await QueryDatabase(process.env.POST_DB_ID as string, ["series"]);

    // @ts-ignore
    const item = response.properties.series.select.options;

    const seriesArr = item.reduce((a: AsideListObject[], c: any) => {
        // @ts-ignore
        const posts = results.filter((i) => i.properties.series.select.name === c.name).reduce((a, c) => [...a, { title: c.properties.title.title[0].text.content, id: c.id }], []);
        return [...a, { title: c.name, id: c.id, posts }];
    }, []);

    return seriesArr;
};

export default getSeriesList;
