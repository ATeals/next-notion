import { generateClassName } from "@repo/utils";

type IconProps = {
  icon: string;
  size?: keyof typeof IconSizeMap;
  color?: string;
} & React.HTMLAttributes<HTMLElement>;

const IconSizeMap = {
  sm: "text-md",
  md: "text-lg",
  lg: "text-2xl",
  xl: "text-3xl",
};

export const Icon = ({ icon, size = "md", color = "inherit", className, ...props }: IconProps) => {
  const classname = generateClassName(
    "bi",
    `bi-${icon}`,
    `text-${color}`,
    IconSizeMap[size],
    className
  );

  return <i className={classname} {...props} />;
};
