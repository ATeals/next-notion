import { LoadingIndicator } from "@/components/LoadingIndicator";

export default () => {
  return (
    <main className="flex flex-col items-center">
      <h1>Loading...</h1>
      <LoadingIndicator />
    </main>
  );
};
