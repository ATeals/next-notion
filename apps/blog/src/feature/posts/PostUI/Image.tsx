import { generateClassName } from "@repo/utils";
import { usePostUIContext } from "./Provider";

export const PostUIImage = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const post = usePostUIContext();

  const css = generateClassName(
    "overflow-hidden group-hover:shadow-lg dark:shadow-zinc-900 group-hover:scale-105 transition duration-300 ease-in-out",
    className
  );

  return (
    <div className={css}>
      <img src={post.coverImg} alt={post.title} className="object-cover w-full h-full" />
      {children}
    </div>
  );
};
