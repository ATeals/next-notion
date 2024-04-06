import { Heading } from "@/atom";
import { generateClassName } from "@repo/utils";

export const PageHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const css = generateClassName(
    "mb-10 text-primary-lg drop-shadow-lg dark:shadow-zinc-950",
    className
  );

  return (
    <Heading className={css} size="lg">
      {children}
    </Heading>
  );
};
