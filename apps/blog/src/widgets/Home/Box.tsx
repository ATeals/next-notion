import { generateClassName } from "@repo/utils";

export const Box = ({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  const css = generateClassName(
    "inline rounded-lg p-2 shadow-lg dark:shadow-zinc-950 flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out",
    className
  );

  return (
    <div className={css} {...props}>
      {children}
    </div>
  );
};
