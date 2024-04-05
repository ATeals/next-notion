import { NextResponse } from "next/server";

import urlMetadata from "url-metadata";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url") || "";

    const result: urlMetadata.Result = await urlMetadata(url, {
      cache: "force-cache",
    });

    const ogData = {
      title: result["og:title"],
      url: result["og:url"],
      img: result["og:image"] || result["image"] || result["twitter:image"],
      description: result["description"],
    };

    return NextResponse.json(ogData, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error!!" }, { status: 500 });
  }
}
