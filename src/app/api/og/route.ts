import { NextRequest, NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  // const api_key = request.nextUrl.searchParams.get("api_key");

  // if (api_key !== process.env.API_KEY)
  //   return NextResponse.json({ title: "NOT MATCH API KEY", api_key });

  if (!url) return NextResponse.json({ title: "NO URL" });

  try {
    const data = (await ogs({ url: encodeURI(url) })).result;
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
