"use client";

import Portal from "@/feature/common/components/Portal";
import RevalidatePost from "@/feature/post/components/RevalidatePost";
import { REVALIDATE_TAGNAME } from "@/feature/common/constants";

export default () => {
  const postId = process.env.RESUME_PAGE_ID!;

  return (
    <section className="flex items-center justify-center pt-[100px]">
      <h1 className="text-xl"> 오류가 발생했습니다.</h1>

      <Portal component={<RevalidatePost id={postId} />} elementId={REVALIDATE_TAGNAME} />
    </section>
  );
};
