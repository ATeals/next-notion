"use client";

export const PartialPostError = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error(error);

  return (
    <div
      onClick={() => reset()}
      className="group hover:bg-secondary-md hover:bg-opacity-20 cursor-pointer border-2 border-secondary-md rounded-md p-5 m-1 h-40 my-10 flex justify-center items-center dark:text-white"
    >
      <span className="text-secondary-md group-hover:hidden text-2xl text-bold">!</span>
      <p className="hidden group-hover:block">Reset on click</p>
    </div>
  );
};
