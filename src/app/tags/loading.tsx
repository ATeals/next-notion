import { LoadingIndicator } from "@/components/LoadingIndicator";

export default () => {
  return (
    <main className="flex flex-col items-center mt-[100px]">
      <h1>Loading...</h1>
      <LoadingIndicator />
    </main>
  );
};
