"use client";

export const Image = ({
  src,
  alt,
  width,
  height,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <>
      <img src={src} alt={alt} {...props} className="m-0 mx-auto w-[80%] my-10" />
      {alt && alt !== "" && (
        <span className="text-gray-400 text-sm italic w-[80%] mx-auto block mt-[-40px] mb-10">
          {alt}
        </span>
      )}
    </>
  );
};
