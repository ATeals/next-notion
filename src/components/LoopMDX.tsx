import { LoadingIndicator } from "@/components/LoadingIndicator";
import MDXComponent from "@/components/MDXComponent";
import { RetrieveBlockChildren } from "@/api/notion";
import { n2m } from "@/util/n2m";
import { Suspense } from "react";

export const LoopMDX = async ({ postId, next }: { postId: string; next?: string }) => {
  const { results, next_cursor } = await RetrieveBlockChildren(postId, next);

  const x = await n2m.blocksToMarkdown(results);
  const { parent } = n2m.toMarkdownString(x);

  if (next === next_cursor) return <h1>Error!!!!!</h1>;

  return (
    <>
      <MDXComponent source={parent} />
      {next_cursor !== null && (
        <Suspense
          fallback={
            <div className="flex justify-center">
              <LoadingIndicator />
            </div>
          }
          children={<LoopMDX postId={postId} next={next_cursor} />}
        />
      )}
    </>
  );
};
