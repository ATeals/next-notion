import { generateClassName } from "@repo/utils";
import { ElementType } from "react";
import { PolymorphicComponentProps } from "src/types";

type BadgeType = {
  size?: keyof typeof BadgeSizeMap;
  variant?: keyof typeof BadgeVariantMap;
};

const BadgeSizeMap = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-md",
};

const BadgeVariantMap = {
  primary: " border-[0.1rem] border-gary-500 bg-blue-500 bg-opacity-60 text-white",
  default: "border-[0.1rem] border-gary-500",
  "primary-outline": "border-[0.1rem] border-blue-400 text-blue-400",
};

export const Badge = <As extends ElementType = "div">({
  as,
  children,
  className,
  size = "md",
  variant = "default",
  ...props
}: PolymorphicComponentProps<As, BadgeType>) => {
  const Element = as || "div";

  const classname = generateClassName(
    "inline-block px-1 rounded-xl flex justify-center items-center",
    BadgeSizeMap[size],
    BadgeVariantMap[variant],
    className
  );

  return (
    <Element className={classname} {...props}>
      {children}
    </Element>
  );
};
