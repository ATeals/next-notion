import { LoadingIndicator } from "@/atom";

export const FullPageLoading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingIndicator />
    </div>
  );
};
