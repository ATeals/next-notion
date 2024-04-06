import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { PartialPostError } from "./PartialPostError";
import { PartialPostLoading } from "./PartialPostLoading";
import { LoopMDX } from "@/feature/MDX/LoopMDX";

export const RecursivePartialPost = ({ postId }: { postId: string }) => {
  return (
    <ErrorBoundary errorComponent={PartialPostError}>
      <Suspense fallback={<PartialPostLoading />}>
        <LoopMDX postId={postId} />
      </Suspense>
    </ErrorBoundary>
  );
};
