import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { LoopMDX } from "@/feature/MDX/components/LoopMDX";
import { PartialPostError } from "./PartialPostError";
import { PartialPostLoading } from "./PartialPostLoading";

export const RecursivePartialPost = ({ postId }: { postId: string }) => {
  return (
    <Suspense fallback={<PartialPostLoading />}>
      <ErrorBoundary errorComponent={PartialPostError}>
        <LoopMDX postId={postId} />
      </ErrorBoundary>
    </Suspense>
  );
};
