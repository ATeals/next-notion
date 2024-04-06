import { LoadingIndicator } from "@/atom";
import { RandomQuotes } from "@/feature/RandomQuotes";
import { SnippetsPostList, SnippetsNavigation } from "@/widgets/Snippets";
import { PageHeader } from "@/widgets/common";
import { Suspense } from "react";

const SnippetsPage = async ({ searchParams: { tag } }: { searchParams: { tag?: string } }) => {
  return (
    <section>
      <section className="p-5 w-full">
        <PageHeader>Snippets</PageHeader>

        <RandomQuotes />
      </section>

      <SnippetsNavigation currentTag={tag} />

      <Suspense
        fallback={
          <div className="min-h-screen">
            <LoadingIndicator />
          </div>
        }
      >
        <SnippetsPostList tag={tag} />
      </Suspense>
    </section>
  );
};

export default SnippetsPage;
