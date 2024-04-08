import { LoadingIndicator } from "@/atom";
import { TagListWapper } from "@/widgets/Tags";
import { TagNavigationFetcher } from "@/widgets/Tags/TagNavigationFetcher";
import { PageHeader } from "@/widgets/common";
import { Suspense } from "react";

const TagsPageLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader className="p-5">Tags</PageHeader>
      <TagListWapper
        navigation={
          <Suspense fallback={<LoadingIndicator />}>
            <TagNavigationFetcher />
          </Suspense>
        }
      >
        {children}
      </TagListWapper>
    </section>
  );
};

export default TagsPageLayout;
