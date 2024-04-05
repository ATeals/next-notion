import { Suspense } from "react";
import MDXComponent from "./MDXComponent";
import { postService } from "@/service/post";
import { LoadingIndicator } from "@/atom";
import { PartialPostError } from "../posts/PartialPost";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export const LoopMDX = async ({ postId, next }: { postId: string; next?: string }) => {
  const { markdown, cursor } = await postService.getPartialPostData({ id: postId, cursor: next });

  return (
    <>
      <MDXComponent source={markdown} />
      {cursor && (
        <ErrorBoundary errorComponent={PartialPostError}>
          <Suspense
            fallback={
              <div className="flex justify-center">
                <LoadingIndicator />
              </div>
            }
          >
            <LoopMDX postId={postId} next={cursor} />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
};
