import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { Suspense } from "react";
import MDXComponent from "./MDXComponent";
import { postService } from "@/service/post";

export const LoopMDX = async ({ postId, next }: { postId: string; next?: string }) => {
  const { markdown, cursor } = await postService.getPartialPostData({ id: postId, cursor: next });

  return (
    <>
      <MDXComponent source={markdown} />
      {cursor && (
        <Suspense
          fallback={
            <div className="flex justify-center">
              <LoadingIndicator />
            </div>
          }
          children={<LoopMDX postId={postId} next={cursor} />}
        />
      )}
    </>
  );
};
