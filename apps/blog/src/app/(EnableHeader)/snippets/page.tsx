import { RandomQuotes } from "@/feature/RandomQuotes";
import { SnippetsPostList } from "@/widgets/Snippets";
import { PageHeader } from "@/widgets/common";

const SnippetsPage = async () => {
  return (
    <section>
      <section className="p-5 w-full">
        <PageHeader>Snippets</PageHeader>

        <RandomQuotes />
      </section>

      <SnippetsPostList />
    </section>
  );
};

export default SnippetsPage;
