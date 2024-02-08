import { LoadingIndicator } from "@/feature/common/components/LoadingIndicator";

export default () => {
  return (
    <main className="flex flex-col items-center mt-[100px]">
      <h1 className="dark:text-white">Loading...</h1>
      <LoadingIndicator />
    </main>
  );
};
