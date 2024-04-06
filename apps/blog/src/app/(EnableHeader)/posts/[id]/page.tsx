import Giscus from "@/feature/comment/Comments";
import { Suspense } from "react";

import { Toc, TocProvider } from "@/feature/Toc";
import { PostBody, PostHeaderFecther } from "@/widgets/Posts";
import { SkeletonPostHeader } from "@/widgets/Posts/PostHeader";
import { PostProgressBar } from "@/widgets/Posts/PostProgressBar";

const PostPage = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <TocProvider>
      <PostProgressBar />

      <section className="scroll-smooth">
        <Suspense fallback={<SkeletonPostHeader />}>
          <PostHeaderFecther id={id} />
        </Suspense>

        <Toc />
        <article className="bg-white dark:bg-dark-bg p-2">
          <PostBody id={id} />
          <Giscus />
        </article>
      </section>
    </TocProvider>
  );
};

export default PostPage;

export { generateMetadata } from "./matadata";
