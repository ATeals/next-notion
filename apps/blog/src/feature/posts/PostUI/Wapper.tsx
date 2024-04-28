import { generateClassName } from "@repo/utils";

export const PostWapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const css = generateClassName(
    "group hover:scale-105 lg:hover:shadow-lg hover:cursor-pointer rounded-lg dark:shadow-zinc-900",
    "transition-all ease-in-out duration-300",
    className
  );

  return <div className={css}>{children}</div>;
};
