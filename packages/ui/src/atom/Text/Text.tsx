import { AsChildProps, Slot } from "@/common/Slot";
import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@repo/utils";

type TextProps = {
  size?: keyof typeof TextSizeMap;
} & AsChildProps;

const TextSizeMap = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

export const Text = <T extends React.ElementType = "p">({
  as,
  size = "md",
  children,
  className,
  asChild,
  ...props
}: PolymorphicComponentProps<T, TextProps>) => {
  const Element = asChild ? Slot : as || "p";

  const tailwind = generateClassName(TextSizeMap[size], className);

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
