import { generateClassName } from "@repo/utils";

export const PostWapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const css = generateClassName(
    "group flex h-[200px] hover:shadow-lg hover:cursor-pointer rounded-lg dark:shadow-zinc-900",
    className
  );

  return <div className={css}>{children}</div>;
};
