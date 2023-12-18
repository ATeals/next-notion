"use client";

export const Image = ({
  src,
  alt,
  width,
  height,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className="my-10 w-full">
      <img src={src} alt={alt} {...props} className="m-0 w-full" />
      {alt && <span className="text-gray text-sm italic">{alt}</span>}
    </div>
  );
};
