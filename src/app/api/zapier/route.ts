import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  if (req.postId) revalidateTag(req.postId);
  console.log(req.postId);

  return NextResponse.json({ message: `Updating ${req.postId}` });
}
