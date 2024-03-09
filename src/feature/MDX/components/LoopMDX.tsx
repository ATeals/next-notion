import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";
import { Suspense } from "react";
import MDXComponent from "./MDXComponent";
import { postService } from "@/service/post";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { PartialPostError } from "@/feature/post/components/PartialPost";

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
          children={
            <ErrorBoundary errorComponent={PartialPostError}>
              <LoopMDX postId={postId} next={cursor} />
            </ErrorBoundary>
          }
        />
      )}
    </>
  );
};
