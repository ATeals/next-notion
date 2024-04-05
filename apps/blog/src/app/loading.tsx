import { LoadingIndicator } from "@/atom";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <LoadingIndicator />
    </div>
  );
};

export default Loading;
